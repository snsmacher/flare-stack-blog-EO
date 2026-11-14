# AGENTS.md

给接手的 AI 协作者和未来的自己看的项目说明。动代码前先读完这一页，比读上游文档有用。

- **本文件是项目指令的唯一入口。** ZCode 只读两处：`~/.zcode/AGENTS.md`（跨项目偏好）和工作区根目录的这份 `AGENTS.md`；它不合并子目录、不展开 `@import`、也不会按任务类型自动挑规则文件。所以新约定请写在这里，别散到别处。`CLAUDE.md` 只有一行指针，不用维护。
- 部署、环境变量、排查见 [docs/deployment.md](./docs/deployment.md)；功能与架构全貌见 [README.md](./README.md)；改动历史见 [CHANGELOG.md](./CHANGELOG.md)。

## 项目是什么

Flare-Stack-Blog-EO（<https://blog.765528.xyz>）：TanStack Start SSR 单体博客 + 后台，跑在 EdgeOne Makers（`ssr-node` 云函数）+ PostgreSQL 17 上。版本线从这里自己的 `1.0.0` 起算。

代码起点是 [du2333/flare-stack-blog](https://github.com/du2333/flare-stack-blog) 3.10.0，但**与它没有共同提交历史**，`git merge upstream` 必然失败，也不再尝试。上游代码只作参考：表现层和组织方式还能看；`src/lib/db`、`migrations`、`src/lib/env`、`cloudflare.config.ts`、`src/lib/queue` 已经各走各的。

## 先读什么

1. `README.md` 的「架构」「目录地图」两节，五分钟建立地图；
2. 本文件的「动这些地方之前先停一下」，那是踩过的坑；
3. `docs/deployment.md` 的环境变量与构建小节（烘焙机制会咬人）；
4. `CHANGELOG.md` 最近两版，知道手上这套代码从哪来；
5. `docs/adr/` 里和你要改的部分相关的那几篇，编号递增不复用。

## 硬性约束

| 约束 | 原因 |
| --- | --- |
| SQL 只写 PostgreSQL 方言 | 宿主是 PG 17。`instr`→`strpos`、`IS NOT`→`IS DISTINCT FROM`、`unixepoch()`→`now()`、`sum(bool)`→`count(*) filter (where …)`、忽略大小写用 `lower()` |
| `db.batch()` 保持 BEGIN/COMMIT | 它是手写的批处理事务，用来复刻 D1 的语义；换成 `Promise.all` 就没有原子性了 |
| `cloudflare.config.ts` 不能删 | 名字骗人：它是 `cf workers types` 生成 `Env` 类型的输入，删了整仓类型检查都过不去 |
| 缓存头只认 `Cache-Control` | EdgeOne 不读 `CDN-Cache-Control`，也没有 Cache-Tag 清除；写了等于没写 |
| 搜索不要换回 `tsvector` / Orama | 中文查询两者都翻过车，现在是进程内索引 + 子串匹配，见 ADR 0037 |
| 提交前还原 `src/paraglide/runtime.js` | 每次 `i18n:compile` 都会改写它，属于构建产物，不该进提交 |
| 不跳过 husky 钩子 | 钩子挂了通常是真问题（缓存头断言、类型漂移），不是噪音 |

## 命令

```bash
bun run dev          # 本地起服务（3000）
bun run lint         # oxlint 全仓
bun run typecheck    # 生成 oRPC 契约 + cf workers types + tsc
bun run test:node    # 全部单元测试；没有 bun run test（集成测试已删）
bun run build        # 生产构建，产出 .edgeone/（含 EO 补丁）
bun run db:push      # schema 同步到库
bun run db:generate  # 生成迁移 SQL 到 migrations/
```

提交前的完整验证：`bun run lint && bun run typecheck && bun run test:node`。只改表现层时可以只跑 lint + typecheck。

## 目录地图

| 路径 | 是什么 |
| --- | --- |
| `src/routes/_public/` | 前台页面。路由文件即页面，共享布局在 `_public/route.tsx` |
| `src/routes/admin/` | 后台。导航在 `admin/route.tsx`，设置页在 `admin/settings/` |
| `src/routes/api*.ts`、`rss.xml.ts`、`sitemap.xml.ts`、`stats.js.ts` | 非页面路由：接口、订阅源、umami 反代 |
| `src/features/*` | 领域模块，一个功能一个目录：posts、comments、media、search、auth、config、version… |
| `src/lib/db/` | `pg` + drizzle(PG)。`db.batch()` 的手写事务也在这里 |
| `src/lib/env/` | `nodeEnv` 是进程内替身（模拟 Workers 绑定）；`serverEnv` 会合并 `process.env` |
| `src/lib/cache/`、`src/lib/constants.ts` | 缓存策略与 TTL 常量 |
| `scripts/` | 构建期与运维脚本：EO 产物补丁、发版说明提取、i18n 校验 |
| `docs/adr/` | 架构决策记录 |
| `.github/workflows/release.yml` | 推 `main` 自动打 tag + 发 Release |

## 常见改动的入口

| 想做的事 | 从哪下手 |
| --- | --- |
| 改前台某个页面 | `src/routes/_public/` 对应路由文件，组件与数据多半在 `src/features/` 同名目录里 |
| 加一个后台页面 | `src/routes/admin/` 新建路由，再挂到 `admin/route.tsx` 的导航 |
| 加一个接口 | 优先走 oRPC procedure；需要固定路径（给外部调用、要 OpenAPI）时才在 `src/routes/api.*.ts` 加 |
| 改文章编辑器行为 | `src/features/posts/components/post-editor/`，自动保存与发布在 `hooks/use-post-actions.tsx` |
| 改缓存 TTL 或响应头 | `src/lib/cache/`、`src/lib/constants.ts`，改完看同目录 `*.test.ts` 的断言 |
| 改搜索排序 | `src/features/search/engine.ts`，文件头有权重与设计取舍 |
| 加环境变量 | 三处一起改：`vite.config.ts` 的烘焙名单、`src/lib/env/server.env.ts` 的 schema、`.env.example` 与 README 的表；排查烘焙看构建日志的 `[bake-probe]` 一行 |
| 改发版流程 | `.github/workflows/release.yml` + `scripts/release-notes.mjs` |

## 动这些地方之前先停一下

| 位置 | 特殊之处 |
| --- | --- |
| `src/lib/db/` | `pg` + drizzle(PG)。`db.batch()` 是手写的 BEGIN/COMMIT，别换成 `Promise.all`；连接串解析在 `connection-target.ts` |
| `src/lib/db/**` 里的 SQL | 只认 PostgreSQL 方言。`instr`→`strpos`、`IS NOT`→`IS DISTINCT FROM`、`unixepoch()`→`now()`、`sum(bool)`→`count(*) filter`、区分大小写用 `strpos(lower(..))` |
| `src/features/search/engine.ts` | 自建进程内索引，不是 `tsvector` 也不是 FTS5。按 `search_index_meta.version` 失效，改排序先读文件头 |
| `src/lib/env/` | 构建期烘焙 + 运行时 `process.env` 合并两条路都在用；只改一边会「本地好、线上空」 |
| `cloudflare.config.ts` | 名字骗人：它是 `cf workers types` 生成 `Env` 类型的输入，删掉整个 `src/` 都编不过 |
| `scripts/patch-eo-handler.mjs` | 打的是 `.edgeone/cloud-functions/ssr-node/handler.js`；适配器模板变了它会明确报 FATAL，别静默跳过 |
| `src/lib/queue/` | Queues 在 EdgeOne 上不存在；`env.QUEUE` 是进程内替身（`src/lib/env/queue.ts`），`send` 即本地分发，无持久化无重试，别当真队列用 |
| `src/lib/cache/`、`src/lib/constants.ts` | EdgeOne 只认 `Cache-Control`，`CDN-Cache-Control` 写了也白写 |
| `migrations/` | 只有 PG 基线，没有自动迁移执行器；线上不会在部署时跑迁移 |

## 提交与发版

- pre-commit 跑 `oxlint` 全仓；pre-push 跑 `typecheck` + `build` + `test:node`。别跳钩子。
- 推 `main` 会直接触发 EdgeOne 构建并上线。
- 发版：改 `package.json` 的 `version` → 在 `CHANGELOG.md` 开一节 `## [X.Y.Z] - 日期` → 推 `main`。`.github/workflows/release.yml` 发现该版本还没有 tag，就打 `vX.Y.Z` 并按 CHANGELOG 建 Release；**CHANGELOG 缺条目或那节为空会让发版失败**，这是故意的。
- 架构层面的取舍写进 `docs/adr/`，编号递增不复用。

## 本机环境的坑（Windows）

- pre-push 里的 `bun run build` 会改写 `.edgeone/`，WorkBuddy 的批量删除保护可能拦下来，表现为 `SAFE_DELETE_BULK_CONFIRM_REQUIRED`。处理办法是在干净的 Node 环境里推送：PowerShell 先 `$env:NODE_OPTIONS=''` 再 `git push`。这不是代码问题，别去改构建脚本。
- `typecheck` / `build` 之后 `src/paraglide/runtime.js` 会被改写，提交前 `git checkout -- src/paraglide/runtime.js`。
- 有几个用例要真等 3.5 秒（自动保存时序），机器同时在跑构建时容易超时抖动；单独重跑一次通常就过。

## 不做的事

- 不引入 Redis、消息队列、独立 API 服务：现在的外部依赖只有数据库、对象存储、统计三样。
- 不回 Cloudflare Workers / D1 运行时，也不再追上游的 merge。
- 不为「看起来更现代」重构目录；这个仓库的价值在于能跑、能修、能发版。

# 砂墨博客 · EdgeOne 版

线上地址：<https://blog.765528.xyz>

这是 [du2333/flare-stack-blog](https://github.com/du2333/flare-stack-blog) **3.10.0** 的个人部署版：运行时从 Cloudflare Workers 整体搬到**腾讯云 EdgeOne Makers**，数据库换成**国内 PostgreSQL**，其余（React 19 + TanStack Start 的界面、TipTap 编辑器、i18n、整套 CMS 业务逻辑）都还是上游那一套。

需要先说明一件事：**本仓库与上游没有共同提交历史**。初始提交就是移植版快照，`git merge upstream/main` 不可能成功，上游的 D1 迁移与 Workers 绑定在这里全是死代码。怎么从上游取新东西，见文末「从上游取改动」。

## 与上游的差异

| 层 | 上游 | 这里 |
| --- | --- | --- |
| 运行时 | Cloudflare Workers | EdgeOne Makers，SSR 跑在云函数 |
| 数据库 | D1（SQLite） | PostgreSQL 17（阿里云），`pg` + drizzle |
| KV | Workers KV | EdgeOne Blob 之上的一层 KV 语义（带 TTL 信封） |
| 文件存储 | R2 | EdgeOne Blob（`blog-media`、`blog-kv` 两个命名空间） |
| 限流 | Durable Object | 进程内令牌桶（单实例有效） |
| 缓存 | `CDN-Cache-Control` + Cache-Tag 清除 | `Cache-Control: s-maxage`，靠短 TTL 自然过期 |
| 搜索 | D1 FTS5 + 预分词列 | 进程内索引 + 子串匹配，见下文 |
| 队列 | Queues | 无对应物，`src/lib/queue` 保留但未接线 |

`docs/adr/` 保留了上游的架构决策记录，其中 `0001`、`0009`、`0023` 描述的是 Cloudflare 时代的设计，读的时候当作历史背景，别当现状。

## 技术栈

- 前端：React 19、TanStack Start 1.169（文件路由 + SSR）、Tailwind CSS 4、TipTap 3、Shiki
- 后端：TanStack Start server routes + oRPC（OpenAPI 契约自动生成）、better-auth（GitHub OAuth）
- 数据：PostgreSQL + drizzle-orm/pg；`db.batch()` 是按 D1 语义手写的 BEGIN/COMMIT 实现
- i18n：Paraglide（`messages/` 里是 zh/en 两份文案）
- 工具链：bun、Vite 8、oxlint、oxfmt、vitest（node 环境）

## 目录地图

```
src/routes/        页面与 API 路由（_public 是读者侧，admin 是后台）
src/features/      按业务切分的模块，每个含 data / service / server / components
src/features/search/  搜索：进程内索引与匹配（engine.ts）
src/lib/           基础设施：db、env、auth、orpc、cache、queue、mail
src/paraglide/     生成产物，勿手改
migrations/        PostgreSQL 迁移（0000_pg_baseline.sql 是整库基线）
scripts/           生成与运维脚本（orpc 契约、i18n 校验、整库克隆）
docs/adr/          架构决策记录
```

## 本地开发

```bash
bun install
cp .env.example .env.local     # 按注释填，至少 DATABASE_URL 与 BETTER_AUTH_*
bun dev                        # http://localhost:3000
```

提交前会自动跑 `oxlint`（pre-commit）与 `typecheck` + `build` + `test:node`（pre-push）。想手动验证：

```bash
bun run typecheck     # cf workers types + tsc --noEmit
bun run lint
bun run test:node     # 1683 个用例，纯 node 环境，不碰数据库
bun run build         # EdgeOne 适配器产物
```

`bun run test` 已经不存在：上游那批 `*.integration.test.ts` 依赖 miniflare + D1，在这个仓库里跑不起来，已整体删除（需要时从 git 历史取）。

## 部署

EdgeOne Makers 与 Git 仓库直连，推到 `main` 即触发构建，构建命令 `bun run build`，产物由 `@edgeone/tanstack-start` 适配器生成。

环境变量填在 EdgeOne 控制台的**构建环境变量**里。构建期会把下面这批有值变量烘焙进 SSR 包（`vite.config.ts` 的 `bake-secrets-for-ssr`），运行时改它们不生效，必须重新构建：

| 变量 | 用途 |
| --- | --- |
| `DATABASE_URL` | PG 连接串。留空或仍指向 neon 时，构建期自动换成内置的阿里云地址 |
| `DATABASE_URL_DIRECT` | drizzle-kit 迁移用，直连不走池化 |
| `BETTER_AUTH_SECRET` / `BETTER_AUTH_URL` | better-auth，URL 必须是完整地址 |
| `DOMAIN` | 站点域名，用于 cookie 与 canonical |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | 唯一的登录方式 |
| `UMAMI_SRC` / `UMAMI_WEBSITE_ID` / `UMAMI_USERNAME` / `UMAMI_PASSWORD` | 自托管 umami：`/stats.js` 与 `/api/send` 反代到它，文章热度也从它同步 |
| `VITE_UMAMI_WEBSITE_ID` | 前端埋点开关。不填，页面里根本不会有统计脚本 |
| `PG_POOL_MAX` | 连接池上限，默认 5 |

部署完先开 `https://<域名>/diag?k=smo-diag-2026`：它只报「有没有值、长度多少、URL 的 host」，不打印密钥，能一眼看出哪个变量没进构建。

`EO_BLOB_PROJECT_ID` / `EO_BLOB_TOKEN` 只在 EdgeOne 之外（本地 Node）需要，线上由平台自行鉴权。

## 数据库

```bash
bun run db:generate   # 改完 src/lib/db/schema 后生成迁移
bun run db:push       # 直接推 schema（开发时用）
bun run db:studio     # 可视化
```

线上以 `migrations/` 为准。要从别的 PG 整库搬过来，用 `scripts/pg-clone.mjs`：它读源库的 DDL、按依赖顺序建表、分批导数据，可重复执行（已存在的约束和索引会跳过）。

## 搜索

`src/features/search/engine.ts`，一句话：**进程内索引 + 子串匹配**。

- 进程里缓存全部已发布文章的标题、标签、摘要、正文；只在 `search_index_meta.version` 变化时重读一遍，所以刚发布的文章下一次搜索就能搜到
- 匹配用大小写不敏感的子串比对，不切词。这是被 `tsvector` 和 Orama 各坑一次之后的选择：`tsvector` 以「词」为单位，「中行」永远搜不到「中国银行」；Orama 把查询词按 OR 拼，会返回根本不含该词的文章
- 排序：先按整串命中的字段分层（标题 > 标签 > 摘要 > 正文 > 散词），同层再按命中次数乘字段权重
- 实测 10 篇文章：单次查询 0.02～1.5ms；冷启动首次约 2.7s（含建索引与建连）

代价是每个实例存一份全文（另加一份小写副本）。文章到几百篇、正文几十万字时该换成 `pg_trgm` 索引，现在这个量级不值得。

## 从上游取改动

```bash
git remote add upstream https://github.com/du2333/flare-stack-blog.git
git fetch upstream --tags
git diff v3.10.0 v3.11.0 --stat          # 新版出来时把 tag 换掉
git checkout v3.11.0 -- src/features/posts/components/...
```

规则只有一条：diff 落在 `src/features/**/components`、`src/components`、`messages/`、`src/routes/_public` 这类表现层，直接取；一旦碰到 `src/lib/db`、`migrations*`、`cloudflare.config.ts`、`src/lib/queue`、`src/lib/env`，**不要取**——那里是 D1 方言和 Workers 绑定，取回来整个运行时会被打回 Cloudflare。

## 已知限制

- Queues 在 EdgeOne 上没有对应服务，`handleQueueBatch` 未接线，依赖队列的邮件与 Webhook 派发在当前部署里不生效；登录只有 GitHub OAuth 一条路
- 缓存 TTL 只有 60 秒，改完文章后大约一分钟才在全站生效（EdgeOne 没有 Cache-Tag 清除）
- 限流是进程内的，多实例冷启动后各自从零开始计数
- 没有 Cloudflare Image Resizing 的等价物，图片尺寸变体在上传阶段生成

## 许可

GPL-3.0-only，fork 自 [du2333/flare-stack-blog](https://github.com/du2333/flare-stack-blog)，原作者 akuang。上游的 `docs/adr/`、`GLOSSARY.md` 与业务代码一并保留。

# Flare-Stack-Blog-EO

线上站：<https://blog.765528.xyz>

[Flare-Stack-Blog](https://github.com/du2333/flare-stack-blog) 的 EdgeOne 运行时版本。领域模型、后台功能、HTTP API 契约都沿用上游，换掉的是跑在哪、数据存哪：Cloudflare Workers → 腾讯云 EdgeOne Makers，D1 → PostgreSQL。这个仓库就是线上站的全部源码，推 `main` 就构建上线。

本仓库有自己的版本线与 [CHANGELOG](./CHANGELOG.md)，与上游没有共同提交历史。如果上游有改动，您想第一时间体验的话，可以按照下文「跟进上游」自行移植；我们也会在稍后进行跟进。

## 功能

**读者侧**

| 模块 | 说明 |
| --- | --- |
| 文章 | 列表、分类、标签、单篇详情。线上展示走「已发布快照」，后台改稿不会立刻影响读者看到的内容 |
| 搜索 | 标题、标签、摘要、正文一起检索；中文按子串命中，不依赖分词 |
| 评论 | GitHub 登录后发表，作者可审核、静音；被删除的评论留占位不让对话断链 |
| 友链 | 登录后自助申请，后台审核后展示 |
| 订阅与索引 | RSS 2.0、Atom、JSON Feed、`sitemap.xml`、`robots.txt`、web manifest |
| 阅读体验 | 浅色/深色切换、中英双语、代码高亮、Mermaid、表格、封面图 |

**作者侧**

- TipTap 富文本编辑器：代码块实时高亮、图片上传、封面选择，正文以 JSON 存储
- 草稿 → 发布 → 公开快照三段式流程，发布冲突由 `saveToken` 把关
- 媒体库：附件放 EdgeOne Blob，替换资源不重写正文
- 站点设置：标题、描述、社交链接、导航、主题色、站点图标
- API Key 与通知 Webhook：外部脚本能以 Markdown 读写文章，事件可推到自己的服务
- umami 访问统计：遵循上游，功能相同，配置环境变量后即可使用
- 维护页：版本检查（默认关闭，见「环境变量」）

## 与上游的关系

| 层 | 上游 | 这里 |
| --- | --- | --- |
| 运行时 | Cloudflare Workers | EdgeOne Makers，SSR 跑在 `ssr-node` 云函数 |
| 数据库 | D1（SQLite） | PostgreSQL 17（阿里云），`pg` + drizzle |
| KV | Workers KV | EdgeOne Blob 之上的一层 KV 语义（带 TTL 信封） |
| 文件存储 | R2 | EdgeOne Blob（`blog-media`、`blog-kv`） |
| 限流 | Durable Object | 进程内令牌桶（单实例有效） |
| 缓存 | `CDN-Cache-Control` + Cache-Tag 清除 | `Cache-Control: s-maxage`，靠短 TTL 自然过期 |
| 搜索 | D1 FTS5 + 预分词列 | 进程内索引 + 子串匹配，见下文 |
| 队列 | Queues | 进程内替身（`env.QUEUE.send` 即本地分发，无持久化） |

业务层（`src/features/**/components`、`src/routes/_public`、`messages/`）与上游基本一致，差别集中在 `src/lib/db`、`src/lib/env`、`migrations/`、`cloudflare.config.ts` 这些贴着运行时的地方。

`docs/adr/` 里 `0001`、`0009`、`0023`、`0024` 描述的是 Cloudflare 时代的设计，读的时候当历史背景，别当现状；`0037` 是本仓库自己的决定。

## 架构

```
                     ┌──────────────────────────────┐
  浏览器 ───────────▶│ EdgeOne 边缘缓存              │
                     └───────────────┬──────────────┘
                                     │ 未命中
                     ┌───────────────▼──────────────┐
                     │ ssr-node 云函数               │
                     │ TanStack Start + oRPC        │
                     │  ├ 页面 SSR                   │
                     │  ├ /api/*、/api.auth/*        │
                     │  └ 进程内搜索索引、限流令牌桶   │
                     └──┬────────────┬──────────┬───┘
                        │            │          │
          ┌─────────────▼──┐  ┌──────▼───────┐  │  ┌──────────────────┐
          │ PostgreSQL 17  │  │ EdgeOne Blob │  └─▶│ 自托管 umami      │
          │ 业务数据        │  │ 媒体 / KV    │     │ 统计、文章热度     │
          └────────────────┘  └──────────────┘     └──────────────────┘
```

核心依赖就这三个，外加 GitHub OAuth 负责登录、SMTP 与 Webhook 负责可选的通知。没有 Redis，没有独立 API 服务，没有消息队列。

## 技术栈

- 前端：React 19、TanStack Start（文件路由 + SSR）、Tailwind CSS 4、TipTap 3、Shiki
- 后端：TanStack Start server routes + oRPC（OpenAPI 契约自动生成）、better-auth（GitHub OAuth 是唯一登录方式）
- 数据：PostgreSQL 17 + `drizzle-orm/pg`；`db.batch()` 是手写的 BEGIN/COMMIT，按 D1 语义对齐
- i18n：Paraglide，文案在 `messages/zh.json` 与 `messages/en.json`
- 工具链：bun、Vite 8、oxlint、oxfmt、vitest（纯 node 环境）

## 目录地图

```
src/routes/          页面与 API 路由（_public 是读者侧，admin 是后台）
src/features/        按业务切分的模块，各自含 data / service / server / components
src/features/search/ 搜索：进程内索引与匹配
src/lib/             基础设施：db、env、auth、orpc、cache、queue、mail
src/paraglide/       生成产物，勿手改
migrations/          PostgreSQL 迁移（0000_pg_baseline.sql 是整库基线）
scripts/             生成与运维脚本（oRPC 契约、i18n 校验、整库克隆）
docs/adr/            架构决策记录
```

改代码前先读 [AGENTS.md](./AGENTS.md)：里面列了「动之前先停一下」的几处坑。仓库里的文档各管一段：

| 文件 | 作用 |
| --- | --- |
| `README.md` | 项目全貌：能做什么、怎么跑、怎么上线 |
| `docs/deployment.md` | 部署指南：数据库、环境变量、域名、发布、回滚、排查手册 |
| `CHANGELOG.md` | 版本线：每个版本改了什么，以及对应上游哪个版本 |
| `AGENTS.md` | 给 AI/协作者的项目指令：边界、禁区、验证顺序、改动入口 |
| `docs/adr/` | 架构决策的来龙去脉 |
| `GLOSSARY.md` | 领域词表：文章、快照、修订、静音这些词的确切含义 |

## 本地开发

```bash
bun install
cp .env.example .env.local     # 按注释填，至少 DATABASE_URL 与 BETTER_AUTH_*
bun dev                        # http://localhost:3000
```

提交前会自动跑 `oxlint`（pre-commit）与 `typecheck` + `build` + `test:node`（pre-push）。手动验证：

```bash
bun run lint
bun run typecheck    # 先生成 oRPC 契约与 Workers 类型，再 tsc --noEmit
bun run test:node    # 1683 个单元用例，不连数据库
bun run build        # EdgeOne 适配器产物
```

`bun run test` 不存在：依赖 miniflare + D1 的集成测试与这套运行时无关，已整体移除。

## 环境变量

线上填在 EdgeOne 控制台的构建环境变量里。**构建期会把下面这批有值的变量烘焙进 SSR 包**（`vite.config.ts` 的 `bake-secrets-for-ssr`），所以改完必须重新构建，运行时改不生效。

| 变量 | 必填 | 用途 |
| --- | --- | --- |
| `DATABASE_URL` | 是 | PG 连接串。密码里的 `$ @ ! #` 要 URL 编码 |
| `DATABASE_URL_DIRECT` | 迁移时 | 直连端点，drizzle-kit 用，池化端点扛不住会话级状态 |
| `BETTER_AUTH_SECRET` | 是 | 至少 32 字符；换掉会让所有登录会话失效 |
| `BETTER_AUTH_URL` | 是 | 完整地址，带协议、不带尾斜杠 |
| `DOMAIN` | 是 | 站点域名，用于 cookie 与 canonical |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | 是 | 唯一的登录方式 |
| `VITE_UMAMI_WEBSITE_ID` | 否 | 前端埋点开关。不填，页面里不会有统计脚本 |
| `UMAMI_SRC` | 否 | umami 站点根地址，`/stats.js` 与 `/api/send` 靠它反代 |
| `UMAMI_WEBSITE_ID` | 否 | 服务端查热度用，值与上面那个相同 |
| `UMAMI_USERNAME` / `UMAMI_PASSWORD` | 否 | 自托管走账号密码换 token，不需要 API key |
| `UMAMI_API_KEY` | 否 | umami Cloud 模式才需要；自托管用账号密码 |
| `TURNSTILE_SECRET_KEY` / `VITE_TURNSTILE_SITE_KEY` | 否 | 评论等人机验证，两个要一起配；都不填则静默放行 |
| `PG_POOL_MAX` | 否 | 连接池上限，默认 5。实例多时别调高，PG 侧连接数是硬上限 |
| `UPDATE_CHECK_REPO` | 否 | `owner/repo`，维护页据此比对 release。不填即关闭更新检查 |
| `EO_BLOB_PROJECT_ID` / `EO_BLOB_TOKEN` | 否 | 只在 EdgeOne 之外（本地 Node）跑时需要，线上由平台鉴权 |

排查环境变量看构建日志：`[bake-probe]` 一行会列出哪些变量进了烘焙、哪些缺失，改完必须重新构建。

## 部署

EdgeOne Makers 直连 Git 仓库，推到 `main` 触发构建，构建命令 `bun run build`，产物由 `@edgeone/tanstack-start` 适配器生成并跑在 `ssr-node` 云函数里。

改动环境变量后要手动重新构建一次，否则 SSR 包里的还是旧值——这是烘焙机制带来的唯一操作负担。

从零搭一套（建库、建表、OAuth App、域名、验证、回滚、排错）的完整步骤见 [docs/deployment.md](./docs/deployment.md)。

## 数据库

```bash
bun run db:generate   # 改完 src/lib/db/schema 后生成迁移
bun run db:push       # 直接推 schema（只在本地开发用）
bun run db:studio     # 可视化
```

线上以 `migrations/` 为准。要从别的 PG 整库搬过来，用 `scripts/pg-clone.mjs`：读源库 DDL、按依赖顺序建表、分批导数据，可重复执行（已存在的约束和索引会跳过）。

## 搜索

`src/features/search/engine.ts`，一句话：**进程内索引 + 子串匹配**。

- 进程里缓存全部已发布文章的标题、标签、摘要、正文，只在 `search_index_meta.version` 变化时重读，所以刚发布的文章下一次搜索就能命中
- 匹配用大小写不敏感的子串比对，不切词。`tsvector` 以「词」为单位，「中行」永远搜不到「中国银行」；Orama 把查询词按 OR 拼，会返回根本不含该词的文章。两个都试过，都不适合中文博客这种查询
- 排序：先按整串命中的字段分层（标题 > 标签 > 摘要 > 正文 > 仅含散词），同层再按命中次数乘字段权重（标题 40、标签 20、摘要 8、正文 4，单字段最多计 3 次）
- 实测 10 篇：单次查询 0.02～1.5ms；冷启动首次约 2.7s（建索引与建连）

代价是每个实例存一份全文加一份小写副本。文章到几百篇、正文几十万字时应换成 `pg_trgm` 索引，现在这个量级不值得。设计取舍见 [ADR 0037](./docs/adr/0037-search-index-in-process.md)。

## 跟进上游

```bash
git remote add upstream https://github.com/du2333/flare-stack-blog.git
git fetch upstream --tags
git diff v3.10.0 v3.11.0 --stat          # 新版出来时把 tag 换掉
git checkout v3.11.0 -- src/features/posts/components/...
```

规则只有一条：diff 落在 `src/features/**/components`、`src/components`、`messages/`、`src/routes/_public` 这类表现层，直接取；一旦碰到 `src/lib/db`、`migrations*`、`cloudflare.config.ts`、`src/lib/queue`、`src/lib/env`，**不要取**——那里是 D1 方言和 Workers 绑定，取回来整个运行时会被打回 Cloudflare，得照着 PostgreSQL 重写一遍。

移植完在 [CHANGELOG](./CHANGELOG.md) 记一条「对应上游 vX.Y.Z 的哪个改动」，下次算差异时（`git diff` 也能）对得上。

## 版本与发布

- 本仓库独立发版，当前 `1.0.0`，对应上游 `3.10.0`。版本号唯一来源是 `package.json`，构建时注入为 `__APP_VERSION__`（后台页脚、OpenAPI 文档、更新检查都读它）
- 版本号只表示这套部署自身的变化幅度：换运行时或改数据层是大版本，加功能是次版本，修 bug 是补丁版本；与上游版本号的对应关系写在 CHANGELOG 里
- 节奏：修 bug 当天发 patch，功能攒到手头这一批做完就发 minor，不排固定档期，也不攒大版本
- 每次上线：改 `package.json` 版本 → 在 [CHANGELOG.md](./CHANGELOG.md) 开一节（`## [X.Y.Z] - 日期`）→ 提交 → 推 `main`
- 推到 `main` 会同时触发两件事：EdgeOne 自动构建上线；[`.github/workflows/release.yml`](./.github/workflows/release.yml) 发现该版本还没有 tag，就打 `vX.Y.Z` 并把 CHANGELOG 那一节原样作为 Release 正文。只改代码没动版本号时 tag 已存在，发版任务直接跳过
- CHANGELOG 缺条目、或者那一节是空的，发版会失败。这是故意的：宁可红一次，也不发一个没有内容的 Release
- 补发或重发旧版本：Actions 里手动跑 `Release`，填 tag 即可；版本号带 `-`（如 `1.1.0-rc.1`）会自动标为 Pre-release
- 单人项目，`main` 直推，不设长期分支；钩子会拦住 lint、类型、构建、单测四道关
- 架构层面的决定写进 `docs/adr/`，编号递增，不复用

## 路线图

按需推进，不是承诺清单：

- **缓存主动失效**：现在靠 60 秒 TTL 自然过期，改完文章要等一下才全站生效。做法是 Blob 存一个代际键，SSR 读代际拼缓存键，发版或改稿时递增
- **限流跨实例**：进程内令牌桶在冷启动后各算各的，量起来之后挪到 PG 计数
- **通知派发**：进程内队列没有持久化与重试，容器重启就丢，需要补一条可靠重试
- **搜索换引擎**：文章量级上来后切 `pg_trgm`，接口保持不变
- **后台 Agent Skill 页**：现在指向的安装地址还属于上游仓库，要改成对本仓库的发布物，或者先隐藏
- **更新检查的未启用提示**：没配 `UPDATE_CHECK_REPO` 时，维护页点「检查」只报一句「检查失败」，应该直接说没启用
- **图片变体**：按需裁剪，替代上传期预生成

## 已知限制

- 队列是进程内替身：`env.QUEUE.send` 在本进程直接分发邮件与 Webhook（无持久化、无重试，容器重启即丢）
- 缓存只有 60 秒粒度，EdgeOne 没有 Cache-Tag 清除能力
- 限流是进程内的，多实例之间不共享计数
- 没有 Cloudflare Image Resizing 的等价物，图片尺寸变体在上传阶段生成
- 每个实例持有一份全文搜索索引，内存随文章总量线性增长

## 许可

GPL-3.0-only。原始版权归 du2333（[du2333/flare-stack-blog](https://github.com/du2333/flare-stack-blog)），本仓库的修改同样以 GPL-3.0 发布。

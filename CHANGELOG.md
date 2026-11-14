# 更新记录

本文件只记录本仓库自己的版本线，从 1.0.0 起算。移植上游改动时，条目里会注明对应上游哪个版本。

版本号语义化：`MAJOR` 表示数据层或运行时换了（需要迁移/重新配置），`MINOR` 表示加功能，`PATCH` 表示修 bug 与内部整理。

## [未发布]

### 变更

- 内存全面收紧（云函数只有 1 GB）：
  - 搜索索引去掉第三份全文拷贝（原 `haystack` 拼接串），每篇约省 1/3；跨字段拼合本就匹配不到，逐字段判定语义不变
  - 索引装载从全表一次拉回改为按 `post_id` 分页（200/页），重建时的瞬态峰值少掉一整份原始结果集
  - Better Auth 实例从每请求 / 每个 auth 路由重建改为进程单例（`db` 与 `env` 本就是进程单例）——每个请求省掉一次毫秒级的实例构建与随之产生的整块垃圾
  - 限流桶清扫从「达到 1 万个才扫」改为 5 分钟节律兜底，IP 洪峰下内存有界

## [1.1.1] - 2026-11-14

### 变更

- 修订快照滚动保留（`docs/tasks/revision-retention.md`）：`post_revisions` 每篇文章每类 reason 只留最近 2 条，且单篇单类累计超过 256 KB 后继续从最旧的删，永远至少保留 1 条——publish 的最新一条是「未发布改动」的对比基线。auto 的上限从 30 收紧到 2；裁剪挂在三个写入点（自动快照、发布、恢复备份）插入之后，单条 DELETE 自算保留集，没有「先查再删」的并发窗口，恢复备份的裁剪与其备份插入同事务。删修订随之 cascade 清掉 `post_revision_media` 关联行，媒体文件本体不受影响

### 新增

- `scripts/trim-revisions-once.mjs`：存量修订一次性清理脚本。默认只读摸底（库总量、post_revisions 体积、按 reason 的条数与快照大小、将被删的条数），加 `--yes` 才执行删除。注意删除后空间由 autovacuum 回收，`pg_database_size` 不会立刻下降，验收看 `pg_total_relation_size('post_revisions')`

## [1.1.0] - 2026-11-14

### 新增

- GitHub Actions 自动发版（`.github/workflows/release.yml`）：推 `main` 时若 `package.json` 的版本还没有对应 tag，自动打 `vX.Y.Z` 并按本文件创建 Release；只改代码不动版本号不会重复发版
- `scripts/release-notes.mjs`：从本文件截取某一版作为发行说明，缺条目或条目为空时直接失败，不会发出空白 Release
- `docs/deployment.md` 部署指南：数据库两条连接串、建表、Makers 项目配置、环境变量与烘焙、GitHub OAuth、域名、上线自检、回滚、排查手册
- `AGENTS.md` 重写为项目指令入口（ZCode 只读 `AGENTS.md` 与 `~/.zcode/AGENTS.md`，不读 `CLAUDE.md`）：命令表、目录地图、常见改动入口、硬性约束、本机环境的坑
- `env.QUEUE` 进程内替身（`src/lib/env/queue.ts`）：EdgeOne 没有 Queues，此前所有 `QUEUE.send` 直接 TypeError——游客评论、友链提交/审核在主操作落库后报 500，邮箱验证码登录整体不可用。现在 `send` 即本地分发到邮件/Webhook 消费者（无持久化无重试，容器重启即丢），评论/友链/OTP 五个调用点再加 try/catch 兜底

### 变更

- `bun run build` 现在自带 EdgeOne 产物补丁，`build:eo` 保留为别名。此前只有 `build:eo` 会跑 `patch-eo-handler.mjs`，控制台若填的是 `build`，`handler.js` 就少了 env 注入与 pg-pool 修复
- 限流键的取 IP 来源改为 `EO-Connecting-IP` → `cf-connecting-ip` → `X-Forwarded-For` 最后一跳：此前只读 Cloudflare 专有头，EdgeOne 上取不到，全站匿名访客共享同一个 `"unknown"` 桶（登录接口全站 5 次/分钟即拒）
- `/stats.js` 与 `/api/send` 反代改为响应头白名单并加 10 秒超时：此前整体透传上游头，undici 透明解压后 `content-encoding` 与明文体错配会让统计脚本解码失败；`/api/send` 也不再把访客 Cookie、API Key 等转发给 umami，`UMAMI_SRC` 带子路径时不再被丢掉
- 发布/删除/下架/置顶后的搜索索引与缓存失效改为尽力而为（失败记日志），不再让已成功的主操作报 500
- `DATABASE_URL` 缺失不再兜底任何硬编码连接串（该串含生产库凭据且已随仓库泄露，密码应轮换）：运行时启动直接报错，`resolveDatabaseUrl` 同步删掉「指向 Neon 就换国内库」的静默替换
- `TURNSTILE_SECRET_KEY` 补进构建期烘焙名单；`.env.example` 补上 `UMAMI_API_KEY`、`VITE_TURNSTILE_SITE_KEY`、Turnstile 两个 key
- `patch-eo-handler.mjs` 的 pg-pool 补丁从「告警但继续构建」改为 FATAL 中止：缺了它产物全站 500，静默放行等于带病上线
- Release 工作流把「生成发行说明」挪到「打 tag」之前：CHANGELOG 缺条目时不再留下一个指向未发布提交的 tag

### 修复

- `UPDATE_CHECK_REPO` / `GITHUB_TOKEN` 之前没进构建期烘焙名单，在 EdgeOne 控制台配了也可能读不到（容器启动时 `process.env` 为空），维护页只会报检查失败
- `/diag?k=` 的键名清单补上这两个变量，方便排查
- PG 错误映射补齐：唯一键冲突（SQLSTATE 23505）、NOT NULL（23502）、外键（23503）此前按 SQLite 文案匹配、永不命中——并发建稿/改名/发布撞 slug 或重名时一律 500，而不是约定的 409 或自动重试
- `post_revision_media` 重新接线：PG 基线丢了上游 D1 触发器，该表永远没有新行，「仅被历史版本引用」的媒体会被 `deleteMediaIfUnused` 当成未引用删掉，恢复旧版本后正文全是死链；改由 `insertPostRevision` 与 `restorePostSnapshot` 在写路径登记正文图片与封面
- 搜索写入事务化：文档写入与版本号 bump 合进同一事务，全量重建原子化——此前重建失败会留下空表/残表加旧版本号的组合，新实例把空索引缓存住，全站搜索返回 0 结果
- 搜索引擎并发重载的覆盖竞态：慢的旧版本加载完成后会把新索引覆盖回旧值（能自愈，但会瞬时服务旧索引）
- `search.utils.ts` 的 `snippetContext` 自定义选项此前从未被读取，命中路径一直用模块常量
- 令牌桶对时钟回拨（NTP 校准、容器迁移）不再扣币；`cost > capacity` 死路径不再返回负的 `retryAfterMs`
- 站点文档响应删掉硬编码的 `CDN-Cache-Control`（值固定为 HTML 档，与各文档实际 `Cache-Control` 漂移；EdgeOne 不读它）
- `theme-provider` 测试在 Node 24 下因内置 `localStorage` 访问器压住 jsdom 实现而失败，改用内存桩
- 回复通知不再发给已删除评论的作者，也不发给被静音的用户：此前回复一条已删除的评论仍会给其作者发「有人回复了你」，被静音用户同样照收不误
- `auth:generate-schema` 的 better-auth 适配器从 sqlite 方言改为 pg：此前谁跑一次就会把 `auth.table.ts` 重写回 sqliteTable

### 移除

- `/diag` 诊断路由删除：访问令牌硬编码在公开源码里，等于人人可看（环境变量有无/长度、数据库 host、错误原文、触发缓存失效）；环境变量排查改看构建日志的 `[bake-probe]` 行
- 数据库连接串的硬编码兜底与 Neon 静默替换逻辑（`src/lib/db/connection-target.ts`）

## [1.0.0] - 2026-11-08

独立发行线的起点，对应上游 `3.10.0`。相对上游：运行时与数据层整体替换，中文搜索重写，并清掉只对 Cloudflare 有意义的产物。

### 新增

- 部署到腾讯云 EdgeOne Makers：`ssr-node` 云函数 + `@edgeone/tanstack-start` 适配器，推 `main` 自动构建
- PostgreSQL 17 数据层：`pg` + `drizzle-orm/pg`，`db.batch()` 以 BEGIN/COMMIT 复刻 D1 的批处理语义
- EdgeOne Blob 之上的 KV 语义（带 TTL 信封）与媒体存储，替代 Workers KV / R2
- 搜索重写为进程内索引 + 子串匹配（`src/features/search/engine.ts`），并补 ADR 0037
- umami 接入：`/stats.js` 与 `/api/send` 反代，文章热度由 umami 派生
- 发布超时后的状态重同步：云函数超时但服务端已发布时，前端重拉 `saveToken`/`publishedAt`，按成功处理
- `/diag?k=` 诊断路由：只报环境变量有没有值、长度、URL host，用于排查烘焙漏项

### 变更

- 缓存头改为 `Cache-Control: s-maxage`：EdgeOne 不认 `CDN-Cache-Control`，也没有 Cache-Tag 清除
- 环境变量改为构建期烘焙进 SSR 包；`serverEnv` 同时合并 `process.env`，兼容容器启动时 `process.env` 为空的情况
- 更新检查改为可选：`UPDATE_CHECK_REPO` 不填即关闭，不再默认去比对上游 release
- 站点图标改为栅格版（ICO 内嵌 16/32/48 + 高清 PNG）加矢量描摹版
- `typecheck` / `check` 改用 `node` 调 tsc，绕开 bun shell 在 Windows 上无法执行无扩展名脚本的问题

### 修复

- 中文搜索 500：`to_tsquery` 不接受空格分隔的多词查询
- 后台概览与文章列表在 PG 下 500：`unixepoch()`、`sum(bool)`、`IS NOT` 等 SQLite 方言残留
- 媒体删除失败：外键与删除顺序
- 版本恢复写入了不存在的 `id` 列，改为事务内只更新版本字段
- 构建期 `data/` 忽略规则误伤 `src/features/*/data`
- `src/routes/diag.ts` 的类型断言在 `cf workers types` 下报 `TS2352`

### 移除

- Cloudflare 专有基建：Durable Object 限流（`src/lib/do/rate-limiter.ts`）、`post-publisher.ts`；`handleQueueBatch` 保留但无调用方
- 46 个 `*.integration.test.ts` 与 miniflare / vitest 集成配置、`tests/` 基建
- `migrations-sqlite/`、`.github/`、`docs/deployment.md`、`CONTRIBUTING.md`、`DEPLOY.md`、上游截图
- 依赖 `@cloudflare/vite-plugin`、`@cloudflare/vitest-plugin`、`release-it`、`fallow`、`@types/better-sqlite3`
- 一次性迁移脚本与两个 `.cf-bak` 备份文件；仓库跟踪文件 2205 → 2061

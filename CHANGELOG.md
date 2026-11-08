# 更新记录

本文件只记录本仓库自己的版本线，从 1.0.0 起算。移植上游改动时，条目里会注明对应上游哪个版本。

版本号语义化：`MAJOR` 表示数据层或运行时换了（需要迁移/重新配置），`MINOR` 表示加功能，`PATCH` 表示修 bug 与内部整理。

## [未发布]

### 新增

- GitHub Actions 自动发版（`.github/workflows/release.yml`）：推 `main` 时若 `package.json` 的版本还没有对应 tag，自动打 `vX.Y.Z` 并按本文件创建 Release；只改代码不动版本号不会重复发版
- `scripts/release-notes.mjs`：从本文件截取某一版作为发行说明，缺条目或条目为空时直接失败，不会发出空白 Release
- `docs/deployment.md` 部署指南：数据库两条连接串、建表、Makers 项目配置、环境变量与烘焙、GitHub OAuth、域名、上线自检、回滚、排查手册
- `AGENTS.md` 重写为项目指令入口（ZCode 只读 `AGENTS.md` 与 `~/.zcode/AGENTS.md`，不读 `CLAUDE.md`）：命令表、目录地图、常见改动入口、硬性约束、本机环境的坑

### 变更

- `bun run build` 现在自带 EdgeOne 产物补丁，`build:eo` 保留为别名。此前只有 `build:eo` 会跑 `patch-eo-handler.mjs`，控制台若填的是 `build`，`handler.js` 就少了 env 注入与 pg-pool 修复

### 修复

- `UPDATE_CHECK_REPO` / `GITHUB_TOKEN` 之前没进构建期烘焙名单，在 EdgeOne 控制台配了也可能读不到（容器启动时 `process.env` 为空），维护页只会报检查失败
- `/diag?k=` 的键名清单补上这两个变量，方便排查

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

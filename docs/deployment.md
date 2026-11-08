# 部署指南

本文只讲**把这套代码跑起来并上线**要做什么，不讲功能。功能与架构见 [README](../README.md)，改代码前先读 [AGENTS.md](../AGENTS.md)。

线上实际形态：腾讯云 EdgeOne Makers（`ssr-node` 云函数，加速区域为**全球可用区，不含中国大陆**）+ 阿里云杭州的 PostgreSQL 17 + EdgeOne Blob（KV 与媒体）。没有 Redis、没有独立 API 服务、没有消息队列。

---

## 0. 需要准备好的东西

| 东西 | 说明 |
| --- | --- |
| Git 仓库 | 本仓库，EdgeOne 直连它构建 |
| EdgeOne 账号 | 用 Makers（Pages/函数）那一套，不需要 EdgeOne 的 CDN 套餐 |
| PostgreSQL | 阿里云 RDS 或 Supabase 等托管版都行，要能拿到**直连**连接串（迁移用） |
| 域名 | 绑到 EdgeOne 上的自定义域名。**没备案只能用「全球可用区（不含中国大陆）」** |
| GitHub OAuth App | 唯一的登录方式，见 3.4 |
| 本地环境 | Node 24（`.node-version`）+ bun；Windows 下用 PowerShell 或 Git Bash 均可 |

> 中国大陆加速不在本文范围：它要求域名完成 ICP 备案，且接入主体与 EdgeOne 账号一致。没备案就只能选「全球可用区（不含中国大陆）」，中国大陆用户走境外节点（目前落在腾讯云新加坡），这是合规的前提，不是配置项。

---

## 1. 先在本机跑通

```bash
git clone <你的仓库地址> && cd flare-stack-blog-main
bun install
cp .env.example .env.local     # 填下面 3.4 里的变量
bun run dev                    # http://localhost:3000
```

本地起不来通常是 `.env.local` 缺 `DATABASE_URL`。**别把生产库直接当本地库用**：`db.batch()`、媒体删除这些会真的写进去。

常用命令：

| 命令 | 作用 |
| --- | --- |
| `bun run dev` | 本地开发服务器（3000 端口） |
| `bun run lint` | oxlint 全仓 |
| `bun run typecheck` | 生成 oRPC 契约 + `cf workers types` + tsc |
| `bun run test:node` | 全部单元测试。**没有 `bun run test`**（集成测试已删） |
| `bun run build` | 生产构建，产出 `.edgeone/`（含云函数与静态资源） |
| `bun run db:push` | 把 schema 同步到数据库（首次建表、或加字段后） |
| `bun run db:generate` | 生成迁移 SQL 到 `migrations/` |

---

## 2. 数据库

### 2.1 两条连接串，别混用

| 变量 | 谁在用 | 说明 |
| --- | --- | --- |
| `DATABASE_URL` | 运行中的应用 | 走连接池。云函数实例多，PG 连接数是硬上限，池化端点更稳 |
| `DATABASE_URL_DIRECT` | 迁移、`drizzle-kit` | 直连端点。事务级池化受不了会话级状态，迁移必须用它 |

只拿到一条连接串时，`DATABASE_URL_DIRECT` 留空、回落到 `DATABASE_URL` 也能用。

**密码里的 `$ @ ! # :` 必须百分号编码**，否则 `@` 会被当成主机分隔符，报「主机不存在」。例：密码 `a$b@c` 写成 `a%24b%40c`。

### 2.2 建表

```bash
DATABASE_URL_DIRECT='postgresql://...' bun run db:push
```

`migrations/0000_pg_baseline.sql` 是基线。**本项目没有自动迁移执行器**：线上不会在部署时跑迁移，schema 变更靠 `db:generate` 出 SQL、自己审一遍再执行（或对库直接 `db:push`）。改表之前先备份。

---

## 3. EdgeOne Makers 部署

### 3.1 建项目

Makers 控制台 → 新建项目 → 导入 Git 仓库 → 选本仓库的 `main` 分支。构建相关填：

| 项 | 值 |
| --- | --- |
| 安装命令 | `bun install` |
| 构建命令 | `bun run build` |
| 构建产物 | `.edgeone`（由 `@edgeone/tanstack-start` 适配器自动生成，控制台里一般无需填写） |
| Node 版本 | 24.x（`package.json` 的 `engines` 与 `.node-version` 都写着 24） |

`bun run build` 内部依次做：i18n 编译 → 生成 oRPC 契约 → `vite build` → `node scripts/patch-eo-handler.mjs`。**最后这一步不能少**，它给 `.edgeone/cloud-functions/ssr-node/handler.js` 打两个补丁：

1. 把 EdgeOne 调用时传进来的 `context.env` 合并进 `process.env`。适配器只转发 Request，不转发上下文，不打这个补丁，运行时读不到环境变量。
2. 修 `pg-pool` 的 ESM 互操作：esbuild 打包后把命名空间对象当成类来继承，容器加载 `handler.js` 时直接抛 `Class extends value #<Object> is not a constructor`，全站 500。

补丁是幂等的，重复跑只会打印「already present」。

### 3.2 环境变量（关键）

**这批变量是构建期烘焙进 SSR 包的**（`vite.config.ts` 的 `bake-secrets-for-ssr`），所以：

- 填在 EdgeOne 控制台的**构建环境变量**里，不是运行时变量；
- **改完必须重新构建一次**，否则线上跑的还是旧值；
- 运行时改不生效，这是烘焙机制的唯一操作负担。

| 变量 | 必填 | 用途与注意 |
| --- | --- | --- |
| `DATABASE_URL` | 是 | 运行时的 PG 连接串，密码要 URL 编码 |
| `DATABASE_URL_DIRECT` | 迁移时 | 直连端点，只给 drizzle-kit 用 |
| `BETTER_AUTH_SECRET` | 是 | 至少 32 字符。换掉会让所有登录会话失效 |
| `BETTER_AUTH_URL` | 是 | 完整地址，带 `https://`，**不带尾斜杠**，如 `https://blog.example.com` |
| `DOMAIN` | 是 | 站点域名，不带协议，用于 cookie 与 canonical |
| `GITHUB_CLIENT_ID` | 是 | 见 3.4 |
| `GITHUB_CLIENT_SECRET` | 是 | 见 3.4 |
| `VITE_UMAMI_WEBSITE_ID` | 否 | 前端埋点开关。不填则页面里没有统计脚本 |
| `UMAMI_SRC` | 否 | umami 站点根地址；`/stats.js` 与 `/api/send` 靠它反代 |
| `UMAMI_WEBSITE_ID` | 否 | 服务端查文章热度用，值同上 |
| `UMAMI_USERNAME` / `UMAMI_PASSWORD` | 否 | 自托管 umami 用账号密码换 token，不需要 API key |
| `PG_POOL_MAX` | 否 | 连接池上限，默认 5。实例多时别调高 |
| `UPDATE_CHECK_REPO` | 否 | `owner/repo`，后台维护页据此比对 release；不填即关闭更新检查 |
| `EO_BLOB_PROJECT_ID` / `EO_BLOB_TOKEN` | 否 | **只在 EdgeOne 之外**（本地 Node、脚本）需要；线上由平台自己鉴权 |

### 3.3 部署后先验这五条

```bash
curl -sI https://<域名>/ | head -1                     # 200，且带 Cache-Control: s-maxage
curl -s  https://<域名>/api/spec.json | head -c 120    # OpenAPI，info.version 应与 package.json 一致
curl -sI https://<域名>/rss.xml | head -1              # 200
```

浏览器里再开：

1. `https://<域名>/diag?k=smo-diag-2026` — 只报「有没有值、长度多少、URL 的 host」，不打印密钥。`processEnv` 与 `contextEnv` 两栏对照，一眼看出哪个变量没进构建。
2. 首页能出文章列表 → 说明数据库通了。
3. 点登录 → GitHub 授权 → 回到 `/admin`。**第一个登录成功的账号自动成为管理员**（`databaseHooks.user.create.before` 里有这段逻辑），后面的人只能是普通用户。

### 3.4 GitHub OAuth

GitHub → Settings → Developer settings → OAuth Apps → New OAuth App：

| 字段 | 值 |
| --- | --- |
| Homepage URL | `https://<域名>` |
| Authorization callback URL | `https://<域名>/api/auth/callback/github` |

回调路径由 better-auth 的默认 `basePath`（`/api/auth`）决定，不要自己改。生成的 Client ID / Secret 填进控制台的两个变量，然后重新构建。

### 3.5 域名

1. Makers 控制台 → 域名管理 → 添加自定义域名，拿到要 CNAME 过去的目标地址。
2. 去 DNS 服务商加 CNAME，等生效，回控制台点验证，证书自动签发。
3. **不要做「优选 IP」**：EdgeOne 会校验域名解析到的必须是它分配的节点，指向别的 IP 会直接报错（和 Cloudflare 的 1034 同类）。平台分给你的解析结果就是最优路径，改它没有收益。

### 3.6 首次上线后的收尾

- 后台「设置」里填站点名、描述、作者、社交链接——RSS、sitemap、Open Graph 都读它。
- 发一篇测试文章，确认详情页、RSS、`/sitemap.xml` 都更新了。
- `UPDATE_CHECK_REPO` 填本仓库（如 `snsmacher/flare-stack-blog-EO`）后，维护页才能检查版本；不填就当作没有这个功能。

---

## 4. 日常发布

```bash
# 改 package.json 的 version → 在 CHANGELOG.md 开一节 → 提交 → 推 main
git push origin main
```

推 `main` 会同时触发两件事：

1. EdgeOne 自动构建上线（构建失败则线上保持上一版，旧版本不会被删）。
2. GitHub Actions 的 `Release` 工作流：若 `package.json` 的版本还没有对应 tag，就打 `vX.Y.Z` 并把 CHANGELOG 那一节原样作为 Release 正文。只改代码不动版本号时 tag 已存在，这一步直接跳过。

发版细节见 README 的「版本与发布」，工作流本体在 `.github/workflows/release.yml`。

**只改环境变量时不需要改代码**：控制台改完 → 手动触发一次「重新构建」→ 生效。

---

## 5. 回滚

| 场景 | 做法 |
| --- | --- |
| 代码有问题 | `git revert <commit>` → 推 `main` → EdgeOne 重新构建 |
| 想发旧版本 | 在 EdgeOne 的部署历史里选中上一版回滚（不经过 Git） |
| 环境变量填错 | 控制台改回 → 重新构建 |
| 数据库 schema 改坏 | 没有自动回滚。先恢复备份，再执行手写的反向 SQL。改表前务必先备份 |

EdgeOne 的构建产物不留在仓库里（`.edgeone/`、`dist/` 都被忽略），回滚靠平台侧版本，不是靠 Git 里的产物。

---

## 6. 排查手册

| 症状 | 大概率原因 | 处理 |
| --- | --- | --- |
| 全站 500，日志里有 `Class extends value #<Object> is not a constructor` | `handler.js` 没打 pg-pool 补丁 | 确认构建命令是 `bun run build`（含补丁），看构建日志里有没有 `[eo-env-patch]` 两行 |
| 全站 500，日志里是 `Invalid environment variables` | 烘焙漏了变量（常见于 `BETTER_AUTH_SECRET`、`DOMAIN`） | 开 `/diag?k=smo-diag-2026` 对照，补齐后重新构建 |
| 页面能开但没数据 | `DATABASE_URL` 指错库、或连到了没建表的库 | `/diag` 看 host；本地用同一条串跑 `bun run db:push` 复查 |
| 登录后回到首页但仍是未登录 | `BETTER_AUTH_URL` 带尾斜杠、或与 `DOMAIN` 不一致 | 两者改成同一域名，重新构建；浏览器清 cookie 再试 |
| GitHub 回调报 `redirect_uri_mismatch` | 回调地址与实际域名不符 | OAuth App 里改成 `https://<域名>/api/auth/callback/github` |
| `https://<域名>/stats.js` 404 | `UMAMI_SRC` 没进构建 | 填好后重新构建，`/diag` 里应能看到有值 |
| 搜索报「搜索功能暂不可用」 | 进程内索引读库失败 | 看函数日志的 SQL 报错；搜索走的是 `src/features/search/engine.ts`，不是 PG 全文检索 |
| 上传图片失败 | Blob 命名空间问题 | 线上靠平台鉴权，本地才需要 `EO_BLOB_PROJECT_ID` / `EO_BLOB_TOKEN` |
| 改了文章要等一会才生效 | 页面缓存 60 秒自然过期，EdgeOne 没有 Cache-Tag 清除 | 等 TTL，或按路线图做「缓存主动失效」 |
| 域名访问报错说解析不是平台节点 | 用了第三方优选 IP | 改回平台给的 CNAME |

看日志：EdgeOne 控制台 → 项目 → 函数日志（`ssr-node`）。应用层错误一般带 `JSON.stringify({message, error})` 的结构。

---

## 7. 备份与成本

- **数据库**：托管版开自动备份，保留 ≥7 天。文章是纯文本，导出一份 SQL 也就几 MB，可以定期拉着存。
- **媒体**：存在 EdgeOne Blob 的 `blog-media` 命名空间，不会过期，也不会被 `db:push` 影响。换平台前记得导出。
- **KV**：`blog-kv` 是缓存与短期数据，丢了会自动重建，不用备份。
- **成本**：Makers 免费额度 + 一台最小规格 PG + 域名。流量上来了先看 PG 连接数（`PG_POOL_MAX`）与云函数执行时长，再看带宽。

---

## 8. 相关文档

- [README](../README.md)：功能、架构、目录、搜索设计、路线图
- [AGENTS.md](../AGENTS.md)：改代码前的边界与禁区，AI 协作者也读这一份
- [CHANGELOG.md](../CHANGELOG.md)：本仓库自己的版本线
- [docs/adr](./adr)：架构决策记录
- [docs/webhook.md](./webhook.md)：Webhook 相关说明

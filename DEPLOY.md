# EdgeOne Makers 部署文档

本项目是 [flare-stack-blog](https://github.com/du2333/flare-stack-blog) 的 **EdgeOne Makers 移植版**：数据库 D1→Neon Postgres，KV→EO Blob（带 TTL 信封），R2→EO Blob，邮件→nodemailer，并移除全部 Cloudflare 专有依赖。

## 一、技术栈（移植后）

| 组件 | 原 Cloudflare 版 | 本版（EdgeOne） |
|---|---|---|
| 框架 | TanStack Start 1.169.2 + Vite 8 | 同左 |
| SSR 运行时 | CF Workers | **EO 云函数**（Node 20，Makers 的 SSR 只能跑云函数形态） |
| 数据库 | D1 (SQLite) | **Neon Postgres**（ap-southeast-1 新加坡，pooled 连接串） |
| KV | Workers KV | **EO Pages Blob**（`blog-kv` store，上层包 TTL 信封 `{__kv,exp,v}`） |
| 对象存储 | R2 | **EO Pages Blob**（`blog-media`，图片直接回原图） |
| 邮件 | CF Email Workers | nodemailer（SMTP） |
| 适配器 | `@cloudflare/vite-plugin` | `@edgeone/tanstack-start@1.1.0` |

构建产物结构（适配器固定输出）：

```
.edgeone/
├── assets/                      # 静态资源
└── cloud-functions/
    └── ssr-node/{handler.js, config.json, assets/}   # 云函数形态的 SSR 入口
```

## 二、从 GitHub 部署到 EdgeOne Makers

### 1. 推送代码到 GitHub

解压本包后，把**包内全部内容**推到一个 GitHub 仓库（私有即可）：

```bash
git init
git add -A
git commit -m "EdgeOne Makers 移植版"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

> `.gitignore` 已配好，`node_modules`、`.env*` 密钥、构建产物都不会进仓库。

### 2. EO 控制台创建项目

1. 打开 [EdgeOne 控制台](https://console.cloud.tencent.com/edgeone) → 站点加速/Makers（Pages）→ **创建项目**
2. 选择 **导入 Git 仓库**，授权 GitHub 后选中刚才的仓库，分支 `main`
3. 构建配置：

| 配置项 | 值 |
|---|---|
| 框架预设 | 无 / 自定义（Node.js） |
| Node 版本 | ≥22.12（有 24 选 24；仓库 engines 声明 `>=24`） |
| 安装命令 | `npm install`（`.npmrc` 已带 `legacy-peer-deps=true`，绕过适配器的 vite peer 限制） |
| **构建命令** | **`npm run build:eo`**（即 `vite build`，勿用 `npm run build`——那条链依赖 bun） |
| **输出目录** | **`.edgeone`** |

### 3. 配置环境变量（EO 控制台 → 项目设置 → 环境变量）

| 变量名 | 说明 |
|---|---|
| `DATABASE_URL` | Neon **pooled** 连接串（带 `-pooler`，带 `?sslmode=require`；不要带 `channel_binding`，node-postgres 不认） |
| `DATABASE_URL_DIRECT` | Neon **direct** 连接串（不带 `-pooler`，跑迁移用） |
| `BETTER_AUTH_SECRET` | better-auth 密钥（`openssl rand -base64 32` 生成） |
| `BETTER_AUTH_URL` | 站点最终访问地址（如 `https://你的域名`） |
| `DOMAIN` | 同上，站点域名 |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | GitHub OAuth App（回调地址填 `<BETTER_AUTH_URL>/api/auth/callback/github`） |

> KV / Blob 在 Pages Functions 内**自动认证，零配置**。只有本地开发才需要 `EO_BLOB_PROJECT_ID` + `EO_BLOB_TOKEN`。

### 4. 初始化数据库（如换新 Neon 项目才需要）

```bash
# .env 里配 DATABASE_URL_DIRECT 后：
npx drizzle-kit migrate
```

当前绑定的 Neon 库（新加坡）已建好 21 张表 + GIN 全文索引，**无需重复执行**。

### 5. 部署后验证

- `/` 首页 200、文章可打开
- `/login` GitHub 登录流程通
- `/rss`、`/sitemap.xml` 200
- 后台图片上传后走 `/images/*` 路由可访问（Blob 读取，国内速度快）

## 三、本地开发

```bash
npm install          # 或 bun install
cp .env.example .env.local   # 填入上面表格里的密钥
npm run dev          # http://localhost:3000

# 本地构建（完整链路，需要 bun）
bun run build
# 本地构建（EO 同款，跳过契约/翻译重编，产物已在仓库里）
npm run build:eo
```

本地 Blob 会兜底落到 `.data/blob-media/`，KV 无凭据时用内存实现。

## 四、已知限制与注意事项

1. **SSR 走云函数**：Makers 上 TanStack Start 这类 Node 框架只能跑云函数形态（Node 20，包 ≤128MB），不是边缘函数。本包 `handler.js` 当前约几 MB，余量充足。
2. **KV TTL 是模拟的**：Blob 无原生 TTL，过期数据靠信封字段惰性判断。Blob 总量 1GB，KV 缓存占不大，但**没有清理 cron**，长期跑可手动 `list(prefix)` + `delete` 清理 `blog-kv`。
3. **全文搜索用 PG `simple` 分词**：对中文是按空格/标点切词，中文召回率一般（原版 FTS5 同样如此），够用但不完美。
4. **图片处理已移除**：EO 图片处理已下架公告，上传什么尺寸就返回什么尺寸，`/images/*` 只做转发。
5. **`npm run build`（非 :eo）需要 bun**：那条链要重编 i18n + orpc 契约，`postinstall` 已删除，EO 上永远用 `npm run build:eo`。改了 `messages/*.json` 或 orpc 契约后，在本地跑 `bun run build` 重新生成产物再提交。
6. **适配器 peer 冲突**：`@edgeone/tanstack-start@1.1.0` 声明 vite `^5||^6||^7`，本项目用 Vite 8 + Start 1.169（保留路由 `server:` API）。已实测适配器只是读 `dist/server/server.js` 的 closeBundle 钩子，Vite 8 下工作正常；`.npmrc` 的 `legacy-peer-deps` 不能删。
7. **Windows 本地开发**：`@edgeone/vite-core` 有个 Windows 路径反斜杠的 bug，本仓库 `node_modules` 内已打补丁；如果重装依赖后构建报 `Invalid escape sequence` 类错误，见 `scripts/`（补丁说明在仓库内 `patches/`）。

## 五、与原版的关键差异（代码层面）

- `src/server.ts`：纯 Node `{ fetch }` 入口，注入 Blob 版 KV/媒体实现
- `src/lib/env/kv.ts`：Blob KV + TTL 信封，热门计数等 key 走 strong 一致性
- `src/features/media/`：R2→Blob，删掉 CF 图片处理分支（120 行）
- `src/lib/db/`：pg Pool + drizzle node-postgres，`batch()` 改真事务
- `migrations/`：PG 基线（21 表），`migrations-sqlite/` 是原版留档
- `src/lib/mail/worker-mailer-compat.ts`：nodemailer 实现 WorkerMailer 同签名
- `vite.config.ts`：`cloudflare()` → `edgeoneTanStackStartAdapter()`（原配置备份在 `vite.config.ts.cf-bak`）

<div align="center">

# Flare-Stack-Blog-EO

[Flare Stack Blog](https://github.com/du2333/flare-stack-blog) 的 **EdgeOne 运行时版本**<br>
基于 **腾讯云 EdgeOne Makers + PostgreSQL 17** 打造的全栈博客与 CMS 系统<br>
TanStack Start 服务端渲染

[![License](https://img.shields.io/github/license/snsmacher/flare-stack-blog-EO?style=flat-square)](https://github.com/snsmacher/flare-stack-blog-EO/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/snsmacher/flare-stack-blog-EO?style=flat-square)](https://github.com/snsmacher/flare-stack-blog-EO/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/snsmacher/flare-stack-blog-EO?style=flat-square)](https://github.com/snsmacher/flare-stack-blog-EO/network/members)
[![React](https://img.shields.io/badge/React-19-blue?logo=react&style=flat-square)](https://react.dev)
[![TanStack Start](https://img.shields.io/badge/TanStack%20Start-black?logo=tanstack&style=flat-square)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css&style=flat-square)](https://tailwindcss.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-4169E1?logo=postgresql&style=flat-square)](https://www.postgresql.org)

[在线站](https://blog.765528.xyz) · [部署指南](./docs/deployment.md) · [本地开发](#本地开发) · [跟进上游](#跟进上游) · [上游项目](https://github.com/du2333/flare-stack-blog)

</div>

---

Flare-Stack-Blog-EO 是一个独立发版的博客系统：领域模型、后台功能与 HTTP API 契约沿用上游 Flare Stack Blog，换掉的只是跑在哪、数据存哪——Cloudflare Workers → EdgeOne Makers（SSR 跑在 `ssr-node` 云函数），D1 → PostgreSQL 17。前端 React 19 + TanStack Start，界面承袭 [Fuwari](https://github.com/saicaca/fuwari) 的清新简约，浅色 / 深色主题与中英双语开箱即用。

> [!NOTE]
> 本仓库与上游**没有共同提交历史**，不追上游 merge，版本线从自己的 `1.0.0` 起算。本项目专为 EdgeOne Makers + PostgreSQL 运行时设计

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
                     │  └ 进程内搜索索引、限流、队列   │
                     └──┬────────────┬──────────┬───┘
                        │            │          │
          ┌─────────────▼──┐  ┌──────▼───────┐  │  ┌──────────────────┐
          │ PostgreSQL 17  │  │ EdgeOne Blob │  └─▶│ 自托管 umami      │
          │ 业务数据        │  │ 媒体 / KV    │     │ 统计、文章热度     │
          └────────────────┘  └──────────────┘     └──────────────────┘
```

核心依赖就这三个，外加 GitHub OAuth 负责登录、SMTP 与 Webhook 负责通知。

## 与上游的关系

| 层 | 上游 | 这里 |
| :--- | :--- | :--- |
| 运行时 | Cloudflare Workers | EdgeOne Makers，SSR 跑在 `ssr-node` 云函数 |
| 数据库 | D1（SQLite） | PostgreSQL 17，`pg` + Drizzle |
| KV | Workers KV | EdgeOne Blob 之上的 KV 语义（带 TTL 信封） |
| 文件存储 | R2 | EdgeOne Blob |
| 限流 | Durable Object | 进程内令牌桶（按真实访客 IP，单实例有效） |
| 缓存 | `CDN-Cache-Control` + Cache-Tag 清除 | `Cache-Control: s-maxage`，靠短 TTL 自然过期 |
| 搜索 | D1 FTS5 + 预分词列 | 进程内索引 + 子串匹配 |
| 队列 | Queues | 进程内替身，`send` 即本地分发 |

业务层（`src/features/**/components`、`src/routes/_public`、`messages/`）与上游基本一致，差别集中在贴着运行时的地方，见 [AGENTS.md](./AGENTS.md) 的目录地图。

## 功能特性

- 📝 **创作与内容管理**
  - **现代化富文本编辑器**：基于 TipTap 与 Shiki，代码语法高亮、数学公式、表格、图片上传与封面选择，正文以 JSON 存储。
  - **三段式发布流程**：草稿 → 发布 → 公开快照，读者看到的永远是已发布快照，改稿不影响线上；`saveToken` 把关发布冲突，支持一键恢复任意历史版本。
  - **修订快照滚动保留**：每篇文章每类快照只留最近 2 份，单类累计 256 KB 起继续从最旧的删——存储不再无限增长。
  - **站内全文搜索**：进程内索引 + 子串匹配，中文不依赖分词，「中行」也能搜到「中国银行」；标题、标签、摘要、正文一起检索。

- 💬 **互动与读者体验**
  - **评论系统**：GitHub 登录后发表，嵌套回复、作者审核与静音、删除留占位让对话不断链；回复通知不会打扰已删评或被静音的用户。
  - **友情链接**：前台自助申请，后台审核、驳回与邮件联动。
  - **国际化多语言**：公开阅读界面与管理后台均完整支持中英文切换。
  - **订阅与索引**：RSS 2.0 / Atom / JSON Feed、`sitemap.xml`、`robots.txt`、web manifest，全部走发布快照。

- 🛠️ **系统与扩展能力**
  - **安全身份认证**：Better Auth 集成 GitHub OAuth 快捷登录，以及发送到邮箱的 6 位登录码（需在后台配置邮件发送）。
  - **通知推送**：邮件，以及 Telegram、Discord、飞书、钉钉、企业微信、Bark、ntfy 与带签名的通用 Webhook，详见 [Webhook 推送](./docs/webhook.md)。
  - **开放 API**：后台签发 API Key，oRPC 契约自动生成 OpenAPI 文档，可对接第三方自动化脚本以 Markdown 读写文章。
  - **访问分析与 SEO**：umami 统计反代与文章热度自动同步；Canonical、Schema.org、RSS 全家桶。
  - **站点设置与维护页**：标题、描述、导航、社交链接、主题色全后台可配；可选的版本更新检查。

## 技术栈

| 模块 | 选型 | 说明 |
| :--- | :--- | :--- |
| **托管与运行时** | EdgeOne Makers + Node 24 | 云函数托管与服务端渲染，推 `main` 自动构建 |
| **数据库** | PostgreSQL 17 + Drizzle ORM | 关系型数据层；`db.batch()` 手写事务对齐 D1 语义 |
| **全栈框架** | TanStack Start + Router + Query | 文件路由、SSR、服务端数据预取与水合 |
| **前端** | React 19 + Tailwind CSS 4 | 现代化组件开发与主题样式系统 |
| **API** | oRPC | 端到端类型安全，OpenAPI 契约自动生成 |
| **身份认证** | Better Auth | GitHub OAuth 与邮箱登录码 |
| **富文本** | TipTap + Shiki | 可扩展的所见即所得编辑器与代码高亮引擎 |
| **国际化** | Paraglide | 中英双语，词条在 `messages/` |

## 部署指南

EdgeOne Makers 直连 Git 仓库，推 `main` 触发构建并上线。从零搭建（建库、建表、OAuth App、域名、验证、回滚、排错）的完整步骤见 [图文部署指南](./docs/deployment.md)。

> [!IMPORTANT]
> 环境变量在构建期烘焙进 SSR 包，填在 EdgeOne 控制台的**构建环境变量**里，改完必须重新构建一次才生效。烘焙命中情况看构建日志的 `[bake-probe]` 一行。

## 本地开发

环境要求：[Bun](https://bun.sh) >= 1.3，Node >= 24（见 `.node-version`）。

```bash
bun install
cp .env.example .env.local     # 按注释填写，至少 DATABASE_URL 与 BETTER_AUTH_*
bun dev                        # http://localhost:3000
```

> [!TIP]
> 本地第一个注册的用户自动成为管理员；未配置邮件服务时，登录码会连同邮件内容打印在终端控制台。

### 常用脚本

| 命令 | 说明 |
| :--- | :--- |
| `bun dev` | 启动本地开发服务（3000 端口） |
| `bun run lint` | oxlint 全仓检查 |
| `bun run typecheck` | 生成 oRPC 契约与 Workers 类型后跑 tsc |
| `bun run test:node` | 全量单元测试（不连数据库） |
| `bun run build` | 生产构建，产出 `.edgeone/` 产物 |
| `bun run db:push` / `db:generate` | schema 同步 / 生成迁移 SQL |
| `bun run db:studio` | Drizzle Studio 可视化数据库 |
| `bun run i18n:verify` | 校验中英词条键值完整性 |

提交前验证链：`bun run lint && bun run typecheck && bun run test:node`。线上以 `migrations/` 为准，没有自动迁移执行器，schema 变更自己审 SQL 再执行；从别的 PostgreSQL 整库搬迁用 `scripts/pg-clone.mjs`。

## 跟进上游

上游出新版时可以按需移植：

```bash
git remote add upstream https://github.com/du2333/flare-stack-blog.git
git fetch upstream --tags
git diff v3.10.0 v3.11.0 --stat
```

规则只有一条：改动落在表现层（`src/features/**/components`、`src/components`、`messages/`、`src/routes/_public`）可以直接取；一旦碰到 `src/lib/db`、`migrations`、`cloudflare.config.ts`、`src/lib/queue`、`src/lib/env` 就**不要取**——那里是 D1 方言和 Workers 绑定，得照着 PostgreSQL 重写。移植完在 [CHANGELOG](./CHANGELOG.md) 记一条对应关系。

## 版本与发布

版本号唯一来源是 `package.json`，语义化：换运行时或数据层是大版本，加功能是次版本，修 bug 是补丁版本。推 `main` 会同时触发两件事：EdgeOne 自动构建上线；GitHub Actions 发现该版本还没有 tag 就打 `vX.Y.Z`，并把 CHANGELOG 对应一节原样作为 Release 正文——缺条目或空节会让发版失败，这是故意的。

## 已知限制

- **队列是进程内替身**：邮件与 Webhook 在本进程直接分发，无持久化、无重试，容器重启即丢。
- **页面缓存只有 60 秒粒度**：EdgeOne 不认 `CDN-Cache-Control`，也没有 Cache-Tag 清除能力，改完文章要等 TTL 自然过期。
- **限流是进程内令牌桶**：多实例之间不共享计数，冷启动后各算各的。
- **没有 Cloudflare Image Resizing 的等价物**：图片尺寸变体在上传阶段生成。
- **搜索索引驻留内存**：每个实例一份全文索引，正文按前 1 万字符计，约 40 KB/篇（原文 + 小写副本），随文章总量线性增长，重建瞬间有 2 倍峰值；文章到几千篇应换 `pg_trgm`。

## 路线图

按需推进，不是承诺清单：

- **缓存主动失效**：Blob 存一个代际键，SSR 读代际拼缓存键，发版或改稿时递增
- **限流跨实例**：进程内令牌桶挪到 PG 计数
- **通知可靠派发**：进程内队列补持久化与重试
- **搜索换 `pg_trgm`**：文章量级上来后切换，接口保持不变
- **图片变体**：按需裁剪，替代上传期预生成

## 致谢

- **[Flare Stack Blog](https://github.com/du2333/flare-stack-blog)**：本仓库的领域模型、后台功能与界面设计全部源自 [@du2333](https://github.com/du2333) 的优秀开源项目。
- **[Fuwari](https://github.com/saicaca/fuwari)**：清新简约的界面与动效设计灵感来源，来自 [@saicaca](https://github.com/saicaca)。

## 开源协议

本项目采用 [GPL-3.0](https://github.com/snsmacher/flare-stack-blog-EO/blob/main/LICENSE) 协议开源。原始版权归 du2333（[du2333/flare-stack-blog](https://github.com/du2333/flare-stack-blog)），本仓库的修改同样以 GPL-3.0 发布。

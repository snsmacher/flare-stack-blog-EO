# AGENTS.md

给接手的 AI/协作者看的边界说明。改代码前先读这一页，比读上游文档有用。

## 这个仓库是什么

[du2333/flare-stack-blog](https://github.com/du2333/flare-stack-blog) 3.10.0 的移植版，跑在 EdgeOne Makers + PostgreSQL 上。**与上游没有共同提交历史**，`git merge upstream` 必然失败；取上游改动的方式见 `README.md` 的「从上游取改动」。

## 动这些地方之前先停一下

| 位置 | 特殊之处 |
| --- | --- |
| `src/lib/db/` | `pg` + drizzle(PostgreSQL)。`db.batch()` 是手写的 BEGIN/COMMIT，别换成 `Promise.all` |
| `src/lib/db/**` 里的 SQL | 只认 PostgreSQL 方言。`instr`→`strpos`、`IS NOT`→`IS DISTINCT FROM`、`unixepoch()`→`now()`、`sum(bool)`→`count(*) filter`、区分大小写用 `strpos(lower(..))` |
| `src/features/search/engine.ts` | 自建进程内索引，不是 `tsvector` 也不是 FTS5。文件头注释解释了为什么 |
| `src/lib/env/` | `nodeEnv` 用进程内替身模拟 Workers 绑定；`serverEnv` 会合并 `process.env`，因为 EdgeOne 容器启动时 `process.env` 是空的 |
| `cloudflare.config.ts` | 名字骗人：它是 `cf workers types` 生成 `Env` 类型的输入，删掉整个 `src/` 都编不过 |
| `src/lib/queue/` | `handleQueueBatch` 没有调用方，Queues 在 EdgeOne 上不存在 |
| `src/lib/cache/`、`src/lib/constants.ts` | EdgeOne 只认 `Cache-Control`，`CDN-Cache-Control` 写了也白写 |

## 验证顺序

```bash
bun run lint && bun run typecheck && bun run test:node
```

`bun run test` 不存在（集成测试已删，它们要 miniflare + D1）。只改表现层时可以只跑 lint + typecheck。

## 提交

pre-commit 跑 `oxlint` 全仓，pre-push 跑 `typecheck` + `build` + `test:node`。别跳钩子，钩子挂掉通常是真问题（例如缓存头断言、类型漂移）。

推到 `main` 会直接触发 EdgeOne 构建并上线。

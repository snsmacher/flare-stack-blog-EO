# 任务：修订快照滚动保留（只留最近 N 份）

> 交给编码 Agent 执行。读完本文再动手，里面的「坑」都是已核实的代码事实，不是猜测。

## 一、背景

`post_revisions` 表把整篇文章的 TipTap JSON 塞进 `snapshot_json`（jsonb）。一篇 5 万字的文章，一条修订就是几十到上百 KB，而且**每张插图只存 URL 文本，图片本体在对象存储**——所以表体积几乎全由 `snapshot_json` 撑起来。

目前只有 `auto` 这一类修订会被裁剪，`publish` 和 `restore_backup` 会无限累积。目标是让每篇文章的修订数量有上界，超出的按时间倒序丢弃，被最新版本覆盖。

**存储是硬约束：线上用的是阿里云 PostgreSQL 免费版，总额度只有 1 GB，且这个 1 GB 是所有表共享的**（文章、评论、媒体元数据、鉴权表全在里面）。PostgreSQL 的 `jsonb` 还会因为 TOAST 压缩、页填充等原因占用比原始字节更多的空间，实际膨胀通常是 1.5～2 倍。所以这里的目标不是「省一点」，是**不让单一表把整库额度吃掉**。

## 二、现状（已核实的代码事实）

| 项 | 位置 | 现在的行为 |
| --- | --- | --- |
| 表定义 | `src/lib/db/schema/post-revisions.table.ts` | `snapshot_json` jsonb + `snapshot_hash` 去重 |
| 三类原因 | 同上 `POST_REVISION_REASONS` | `auto` / `publish` / `restore_backup` |
| `auto` 写入 | `src/features/posts/services/post-revisions.service.ts:130-170` | 同 hash 跳过；距上次 auto 不足 2 分钟跳过；插入后立刻裁剪 |
| `auto` 裁剪 | `src/features/posts/data/post-revisions.data.ts:144-172`（`trimAutoRevisions`） | 每篇保留最近 `MAX_AUTO_REVISIONS_PER_POST = 30` 条 |
| `publish` 写入 | `src/features/posts/services/posts.service.ts:260-283` | hash 相同则不写；**写完不裁剪** |
| `restore_backup` 写入 | `src/features/posts/services/post-revisions.service.ts:245`、`:343` | 两处入口，**写完都不裁剪** |
| 媒体关联 | `src/lib/db/schema/media.table.ts:41-55` | `revision_id` 是 `onDelete: cascade`，删修订自动清关联行 |
| 发布快照 | `posts.public_snapshot_json` | 单列覆盖写，不累积，**本任务不要动** |

一句话结论：**要治的是 `publish` 和 `restore_backup` 无上限增长**，`auto` 只是上限偏大。

### 动手前先摸底

先连生产库（阿里云控制台的数据管理 DMS 或 `psql`，用 `DATABASE_URL_DIRECT`），跑这三条，把数字记下来：

```sql
-- 1. 总共用了多少，离 1 GB 还有多远
select pg_size_pretty(pg_database_size(current_database())) as db_total;

-- 2. 谁在吃空间，按体积倒序
select relname as table_name,
       pg_size_pretty(pg_total_relation_size(c.oid)) as total_size,
       pg_total_relation_size(c.oid) as bytes
  from pg_class c
  join pg_namespace n on n.oid = c.relnamespace
 where n.nspname = 'public' and c.relkind = 'r'
 order by bytes desc
 limit 10;

-- 3. post_revisions 的内部构成：条数、平均体积、最大体积
select reason,
       count(*) as rows,
       pg_size_pretty(avg(octet_length(snapshot_json::text))::bigint) as avg_snapshot,
       pg_size_pretty(max(octet_length(snapshot_json::text))::bigint) as max_snapshot
  from post_revisions
 group by reason;
```

第 2 条如果显示 `post_revisions` 不是第一名，先别急着改代码——先看第一名是谁（很可能是 `posts` 自身的 `content_json`，或者 `comments`）。这三个数字写进提交信息，作为改动前后的对照。



## 三、要做什么

### 1. 把裁剪泛化成按 reason 分组，并且**双阈值**

在 `src/features/posts/data/post-revisions.data.ts` 里，用新函数替换（或包住）现有的 `trimAutoRevisions`：

```ts
export const REVISION_RETENTION = {
  // 条数上限
  count: {
    auto: 2,
    publish: 2,
    restore_backup: 2,
  },
  // 单篇同一 reason 的 snapshot_json 总字节上限
  bytesPerPostReason: 256 * 1024,
} satisfies { count: Record<PostRevisionReason, number>; bytesPerPostReason: number };
```

**为什么要字节上限**：ProseMirror 的 JSON 比等价 HTML 冗长约 3～5 倍，一篇带大量代码块和表格的长文，单条快照能到几百 KB。只按条数裁，遇到这种文章照样会爆。所以裁剪逻辑要跑两轮：

1. 先按 `count` 裁条数
2. 再算剩下这些的 `octet_length(snapshot_json::text)` 累计和，超 `bytesPerPostReason` 就继续从最旧的删，**但至少保留 1 条**

常量放在**一个地方**，注释写清「改这里就能调保留份数和字节上限」。默认按上面的值来。

### 2. 裁剪用一条 SQL，天然原子

不要「先查 id 再 delete」，中间会有并发窗口。每个 reason 一条：

```sql
delete from post_revisions
 where post_id = $1
   and reason = $2
   and id not in (
     select id from post_revisions
      where post_id = $1 and reason = $2
      order by created_at desc, id desc
      limit $3
   )
```

`order by created_at desc, id desc` 里 **`id desc` 不能省**：同一毫秒写入的多条，只按时间排序结果不稳定。

### 3. 三个写入点都要裁

- `post-revisions.service.ts` 的 `createPostRevision`：现在只在 `reason === "auto"` 时裁，改成**任何 reason 插入后都裁一次**。
- `posts.service.ts` 的发布路径（`:260` 附近）：`insertPostRevision` 之后补一次裁剪。
- `post-revisions.data.ts` 的 `restorePostSnapshot`：它在事务里直接写 SQL（`:253-262`），把裁剪放进**同一个事务**的最后，别放事务外。

### 4. 存量数据一次性清理

代码只保证「以后不再涨」。已经积累的数据要么给一条 SQL 让运维手动跑，要么写个一次性脚本放 `scripts/`：

```sql
-- 每个 post 的每类 reason 只留最近 2 条
delete from post_revisions r
 using (
   select id, row_number() over (
     partition by post_id, reason order by created_at desc, id desc
   ) as rn
   from post_revisions
 ) t
 where r.id = t.id and t.rn > 2;
```

跑完用 `select pg_size_pretty(pg_total_relation_size('post_revisions'));` 对比前后体积，把数字记进提交信息。

注意这条只按条数裁。如果摸底时发现**单篇就有超过 500 KB 的快照**，说明光靠条数不够，需要把第 1 节的双阈值逻辑也跑一遍——那种情况手工再补一条按字节删的 SQL。

## 四、坑（这几条会直接把功能弄坏）

1. **`publish` 绝对不能裁到 0 条。** `findLatestPublishRevisions`（`post-revisions.data.ts:122-142`）用 `max(id) group by post_id` 找每篇最新那条 publish 修订，作为「未发布改动」的对比基线。基线没了，编辑器会把整篇都标成改动。所以 `publish` 的配额硬下限是 1，默认给 2。
2. **`restored_from_revision_id` 没有外键约束**（`post-revisions.table.ts:40` 是裸 `integer`）。裁掉被引用的来源行不会报错，但会留下悬空 id，DTO 里仍会带出去。当前 UI 没有读它，所以**可以接受悬空**，但要在代码注释里写明，别后来的人以为出 bug。
3. **删修订会 cascade 删 `post_revision_media`，但不会删媒体文件本体。** 别在这里顺手调 `deleteMediaIfUnused`——媒体清理是另一条独立路径，混进来会让「图片突然消失」难以归因。
4. **别把 `db.batch()` 换成 `Promise.all()`**，这是本仓库的硬约束（见 `AGENTS.md`）。
5. **裁剪必须在插入之后**，且同一 post 的插入与裁剪不能并发。`restorePostSnapshot` 已经在一个 `db.transaction` 里，把裁剪追加到事务末尾即可；另外两个入口是顺序 await，天然安全。
6. **只按 `post_id` 维度裁，不要全表扫。** 发布和恢复都是低频操作，单篇裁剪足够。
7. **`delete` 之后空间不会立刻还给操作系统。** PostgreSQL 只是把页标记为可复用，`pg_database_size` 可能不降。要真回收得靠 `vacuum full`（会锁表）或者等 `autovacuum`。所以验收时看 `pg_total_relation_size('post_revisions')` 和 `pg_stat_user_tables.n_dead_tup`，别拿 `pg_database_size` 当唯一指标，否则会误以为没生效。

## 五、验收

跑得通才算完：

- [ ] 单测：连续插入 5 条 `auto` → 该 post 的 `auto` 只剩 2 条
- [ ] 单测：连续插入 3 条 `publish` → 只剩 2 条，且**最新那条还在**
- [ ] 单测：单篇同一 reason 的累计字节超 `bytesPerPostReason` 时，继续从最旧的删，且**至少保留 1 条**
- [ ] 单测：裁剪后 `findLatestPublishRevisions` 仍返回每篇的最新 publish 修订
- [ ] 单测：被删修订的 `post_revision_media` 行随 cascade 消失
- [ ] 单测：配额设为 1 时不会把表清空（边界）
- [ ] `bun run test:node` 全过（现有 1689 例，不许减少）
- [ ] `bun run typecheck` 0 错
- [ ] `bun run lint` 0 警告
- [ ] 线上手工：连发三次「发布」，`select reason, count(*) from post_revisions group by reason` 里 publish 稳定为 2
- [ ] 线上摸底三条 SQL 前后对比，把体积数字写进提交信息

## 六、不做的事

- 不动 `posts.public_snapshot_json`（单列覆盖，本来就不累积）
- 不改 `post_revisions` 表结构，不加新列
- 不引入定时任务或后台清理任务：裁剪挂在写入路径上就够了
- 不删媒体文件，不碰对象存储
- 不改编辑器「历史版本」列表的 UI（条数变少是预期结果）

---

## 附录：关于「改环境变量要重新部署」（本次不要动，仅作背景）

这不是 EdgeOne 的要求，是本仓库构建期烘焙（bake）留下的机制：

- Vite 在 SSR 构建时把 `process.env.X` **静态替换成字面量**（`bake-secrets-for-ssr` 插件）。产物里已经没有属性读取了，运行时再注入也没用——所以只能重新构建。
- 烘焙是给 Cloudflare Workers 那套「没有 Node 环境变量」的运行时准备的。迁到 EdgeOne 之后，平台变量其实通过 `context.env` 到达，`scripts/patch-eo-handler.mjs` 也在把它合并进 `process.env`，**理论上运行时读取是可行的**。
- 现在两套机制并存：`node-bindings.ts` 里的 lazy getter 读 `process.env.X`（会被 define 替换），`serverEnv()` 又从 `{...process.env, ...held}` 里取。这就是「有时改完不重建也生效、有时必须重建」这种诡异感的来源。

**本次任务不碰它。** 要改就是一次独立重构：把非公开变量从 define 名单里摘掉，全部走 `context.env`，风险是变量读不到会静默变成 `undefined`（比构建失败更难排查）。等真有需要再说。

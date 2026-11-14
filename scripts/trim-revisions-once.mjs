/**
 * 一次性清理：存量 post_revisions 按 docs/tasks/revision-retention.md 的
 * 规则裁掉（每个 post_id + reason 只留最近 REVISION_RETENTION.count 条）。
 * 代码里的滚动裁剪只保证「以后不再涨」，这份历史积累要跑一次本脚本。
 *
 * 默认只读：打印摸底数字（库总量、post_revisions 体积、按 reason 的条数
 * 与平均/最大快照体积、将被删掉的条数）。加 `--yes` 才真正执行删除。
 *
 *   node scripts/trim-revisions-once.mjs            # 只摸底
 *   node scripts/trim-revisions-once.mjs --yes      # 删除
 *
 * 连接串读 DATABASE_URL_DIRECT（迁移用直连端点），缺了回落 DATABASE_URL。
 *
 * 注意（任务书坑 7）：DELETE 之后空间不会立刻还给操作系统，PostgreSQL 只
 * 把页标记为可复用，pg_database_size 可能不降。验收看
 * pg_total_relation_size('post_revisions') 与 pg_stat_user_tables 的
 * n_dead_tup；要立即回收得 vacuum full（会锁表）或等 autovacuum。
 */
import { readFileSync } from "node:fs";
import pg from "pg";

const args = process.argv.slice(2);
const applyChanges = args.includes("--yes");

function loadEnvFile() {
  // drizzle-kit 用 DATABASE_URL_DIRECT；脚本与它同环境，自己读一遍
  // .env.local（bun 会自动加载，node 不会）。
  try {
    for (const line of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
      const match = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
      if (match && process.env[match[1]] === undefined) {
        process.env[match[1]] = match[2];
      }
    }
  } catch {
    // 没有 .env.local 就只看环境变量。
  }
}

const KEEP = { auto: 2, publish: 2, restore_backup: 2 };

loadEnvFile();
const connectionString =
  process.env.DATABASE_URL_DIRECT?.trim() || process.env.DATABASE_URL?.trim();
if (!connectionString) {
  console.error("缺少 DATABASE_URL_DIRECT（或 DATABASE_URL），没法连库。");
  process.exit(1);
}

const client = new pg.Client({ connectionString });
await client.connect();

const total = await client.query(
  "select pg_size_pretty(pg_database_size(current_database())) as db_total",
);
const sizeBefore = await client.query(
  "select pg_size_pretty(pg_total_relation_size('post_revisions')) as size, pg_total_relation_size('post_revisions') as bytes",
);
const breakdown = await client.query(`
  select reason,
         count(*) as rows,
         pg_size_pretty(avg(octet_length(snapshot_json::text))::bigint) as avg_snapshot,
         pg_size_pretty(max(octet_length(snapshot_json::text))::bigint) as max_snapshot
    from post_revisions
   group by reason
   order by reason
`);

console.log("== 摸底 ==");
console.log("库总量:", total.rows[0].db_total);
console.log(
  "post_revisions:",
  sizeBefore.rows[0].size,
  `(${sizeBefore.rows[0].bytes} bytes)`,
);
for (const row of breakdown.rows) {
  console.log(
    `  ${row.reason}: ${row.rows} 条, 平均 ${row.avg_snapshot}, 最大 ${row.max_snapshot}`,
  );
}

const wouldDelete = await client.query(`
  select reason, count(*) as to_delete
    from (
      select id, reason, row_number() over (
        partition by post_id, reason order by created_at desc, id desc
      ) as rn
        from post_revisions
    ) ranked
   where rn > case reason
     when 'auto' then ${KEEP.auto}
     when 'publish' then ${KEEP.publish}
     when 'restore_backup' then ${KEEP.restore_backup}
   end
   group by reason
`);
console.log("== 将删除（每个 post + reason 只留最新 2 条） ==");
if (wouldDelete.rows.length === 0) {
  console.log("  无：存量已经在配额内，不需要清理。");
}
for (const row of wouldDelete.rows) {
  console.log(`  ${row.reason}: ${row.to_delete} 条`);
}

if (!applyChanges) {
  console.log("== 只读摸底结束，未做任何改动。加 --yes 执行删除。 ==");
  await client.end();
  process.exit(0);
}

const deleted = await client.query(`
  with ranked as (
    select id, row_number() over (
      partition by post_id, reason order by created_at desc, id desc
    ) as rn
      from post_revisions
  )
  delete from post_revisions r
   using ranked t
   where r.id = t.id and t.rn > case r.reason
     when 'auto' then ${KEEP.auto}
     when 'publish' then ${KEEP.publish}
     when 'restore_backup' then ${KEEP.restore_backup}
   end
   returning r.id
`);

const sizeAfter = await client.query(
  "select pg_size_pretty(pg_total_relation_size('post_revisions')) as size, pg_total_relation_size('post_revisions') as bytes",
);
const deadTuples = await client.query(
  "select n_dead_tup from pg_stat_user_tables where relname = 'post_revisions'",
);

console.log("== 已删除 ==");
console.log(`  共 ${deleted.rowCount} 条`);
console.log(
  `  post_revisions: ${sizeBefore.rows[0].size} -> ${sizeAfter.rows[0].size}`,
);
console.log(
  `  n_dead_tup: ${deadTuples.rows[0]?.n_dead_tup ?? "?"}（空间由 autovacuum 回收，pg_database_size 不会立刻下降）`,
);

await client.end();

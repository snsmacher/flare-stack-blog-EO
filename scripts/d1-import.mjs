/**
 * Import the legacy Cloudflare D1 (SQLite) blog content into the Neon
 * PostgreSQL database used by the EdgeOne port.
 *
 * Run scripts/d1-pull.mjs first; this reads .d1-export/*.json.
 *
 * Usage:
 *   node scripts/d1-import.mjs            # real import
 *   node scripts/d1-import.mjs --dry      # report only, no writes
 *
 * Auth tables (user/account/session/verification) are intentionally NOT
 * imported: the account on Neon is the one created by the current GitHub
 * login. Rows that referenced the old user id are remapped to it.
 */
import { existsSync, readFileSync } from "node:fs";
import { Client } from "pg";

const DRY = process.argv.includes("--dry");
const OUT = ".d1-export";

function readEnvLocal(key) {
  const text = readFileSync(".env.local", "utf8");
  const m = text.match(new RegExp(`^${key}=(.*)$`, "m"));
  return m ? m[1].trim().replace(/^["']|["']$/g, "") : undefined;
}

const client = new Client({
  connectionString: readEnvLocal("DATABASE_URL"),
  ssl: { rejectUnauthorized: false },
});

const load = (table) => {
  const p = `${OUT}/${table}.json`;
  if (!existsSync(p)) return [];
  return JSON.parse(readFileSync(p, "utf8"));
};

const snakeToCamel = (s) => s.replace(/_([a-z])/g, (_, c) => c.toUpperCase());

/** Column metadata straight from Postgres, so no type guessing. */
async function tableColumns(table) {
  const { rows } = await client.query(
    `select column_name, data_type, is_nullable
       from information_schema.columns
      where table_schema = 'public' and table_name = $1
      order by ordinal_position`,
    [table],
  );
  return new Map(rows.map((r) => [r.column_name, r]));
}

const isJsonType = (t) => t === "jsonb" || t === "json";
const isTimeType = (t) => t.startsWith("timestamp") || t === "date";
const isBoolType = (t) => t === "boolean";
const isNumType = (t) =>
  ["integer", "bigint", "smallint", "numeric", "double precision", "real"].includes(t);

/** Convert one D1 (SQLite) value into what node-postgres expects. */
function convert(value, dataType) {
  if (value === null || value === undefined) return null;
  if (isJsonType(dataType)) {
    if (typeof value === "string") {
      try {
        return JSON.stringify(JSON.parse(value));
      } catch {
        return JSON.stringify(value);
      }
    }
    return JSON.stringify(value);
  }
  if (isTimeType(dataType)) {
    if (typeof value === "number") return new Date(value * 1000);
    if (typeof value === "string") {
      const asNum = Number(value);
      if (Number.isFinite(asNum) && /^\d+$/.test(value)) {
        return new Date(asNum * 1000);
      }
      return new Date(value);
    }
    return value;
  }
  if (isBoolType(dataType)) {
    if (typeof value === "boolean") return value;
    return value === 1 || value === "1" || value === "true";
  }
  if (isNumType(dataType)) {
    if (typeof value === "number") return value;
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }
  if (typeof value === "object") return JSON.stringify(value);
  return value;
}

async function importTable(table, rows, { remap = {}, transform } = {}) {
  if (!rows.length) {
    console.log(`  ${table.padEnd(22)} 0 rows, skipped`);
    return 0;
  }
  const columns = await tableColumns(table);
  if (!columns.size) {
    console.log(`  ${table.padEnd(22)} !! table missing in Postgres, skipped`);
    return 0;
  }

  const usable = Object.keys(rows[0]).filter((k) => columns.has(k));
  const dropped = Object.keys(rows[0]).filter((k) => !columns.has(k));
  if (dropped.length) {
    console.log(`  ${table.padEnd(22)} (columns not in PG, ignored: ${dropped.join(", ")})`);
  }

  let inserted = 0;
  for (const original of rows) {
    let row = { ...original };
    for (const [from, to] of Object.entries(remap)) {
      if (row[from] !== undefined && row[from] !== null) row[from] = to;
    }
    if (transform) row = transform(row) ?? row;

    const cols = [];
    const placeholders = [];
    const values = [];
    for (const col of usable) {
      const meta = columns.get(col);
      cols.push(`"${col}"`);
      values.push(convert(row[col], meta.data_type));
      placeholders.push(`$${values.length}`);
    }
    if (DRY) {
      inserted++;
      continue;
    }
    const sql = `insert into "${table}" (${cols.join(",")})
                 values (${placeholders.join(",")})
                 on conflict do nothing`;
    try {
      await client.query(sql, values);
      inserted++;
    } catch (err) {
      console.log(`  ${table.padEnd(22)} !! row failed: ${err.message}`);
      console.log(`     row: ${JSON.stringify(original).slice(0, 300)}`);
      throw err;
    }
  }
  console.log(`  ${table.padEnd(22)} ${inserted} rows ${DRY ? "(dry)" : "inserted"}`);
  return inserted;
}

async function main() {
  await client.connect();
  console.log(`target: ${new URL(readEnvLocal("DATABASE_URL")).host}`);
  console.log(DRY ? "MODE: dry run\n" : "MODE: real import\n");

  // The account that exists on Neon (created by the current GitHub login).
  const { rows: users } = await client.query(
    `select id, email from "user" order by created_at limit 1`,
  );
  const neonUser = users[0];
  console.log(`Neon user: ${neonUser ? `${neonUser.id} <${neonUser.email}>` : "(none)"}\n`);

  const remapFor = (isApiKey) =>
    isApiKey && neonUser ? { reference_id: neonUser.id } : neonUser ? { user_id: neonUser.id } : {};

  await importTable("categories", load("categories"));
  await importTable("tags", load("tags"));
  await importTable("posts", load("posts"));
  await importTable("post_tags", load("post_tags"));
  await importTable("post_public_tags", load("post_public_tags"));
  await importTable("post_revisions", load("post_revisions"));
  await importTable("search_documents", load("search_documents"));
  await importTable("search_index_meta", load("search_index_meta"));
  await importTable("system_config", load("system_config"));
  await importTable("comments", load("comments"), { remap: remapFor(false) });
  await importTable("friend_links", load("friend_links"), { remap: remapFor(false) });
  await importTable("email_unsubscriptions", load("email_unsubscriptions"), {
    remap: remapFor(false),
  });
  await importTable("apikey", load("apikey"), { remap: remapFor(true) });

  if (!DRY) {
    console.log("\nresetting sequences…");
    for (const t of ["posts", "tags", "categories", "post_revisions"]) {
      const { rows } = await client.query(
        `select setval(pg_get_serial_sequence('${t}','id'),
                coalesce((select max(id) from "${t}"), 1)) as v`,
      );
      console.log(`  ${t.padEnd(22)} next id base = ${rows[0].v}`);
    }
  }

  await client.end();
  console.log("\ndone.");
}

main().catch(async (err) => {
  console.error("FAILED:", err.message);
  try {
    await client.end();
  } catch {}
  process.exit(1);
});

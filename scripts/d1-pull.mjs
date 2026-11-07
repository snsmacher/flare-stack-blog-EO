/**
 * Pull every content table out of the legacy Cloudflare D1 blog database
 * and cache it as JSON under .d1-export/ so the importer can run offline.
 *
 * Usage:
 *   CF_TOKEN=... CF_ACC=... CF_DB=... node scripts/d1-pull.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";

const TOKEN = process.env.CF_TOKEN;
const ACC = process.env.CF_ACC;
const DB = process.env.CF_DB;
if (!TOKEN || !ACC || !DB) {
  console.error("missing CF_TOKEN / CF_ACC / CF_DB");
  process.exit(1);
}

const OUT = ".d1-export";
const CHUNK = 200;

const TABLES = [
  "posts",
  "categories",
  "tags",
  "post_tags",
  "post_public_tags",
  "media",
  "post_media",
  "post_revisions",
  "post_revision_media",
  "comments",
  "friend_links",
  "system_config",
  "search_documents",
  "email_unsubscriptions",
  "pairing_codes",
  "apikey",
];

async function query(sql) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACC}/d1/database/${DB}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sql }),
    },
  );
  const json = await res.json();
  if (!json.success) {
    throw new Error(`D1 query failed: ${JSON.stringify(json.errors)} :: ${sql}`);
  }
  return json.result[0].results;
}

async function pullTable(table) {
  const rows = [];
  for (let offset = 0; ; offset += CHUNK) {
    const page = await query(
      `SELECT * FROM "${table}" ORDER BY rowid LIMIT ${CHUNK} OFFSET ${offset}`,
    );
    rows.push(...page);
    if (page.length < CHUNK) break;
  }
  return rows;
}

mkdirSync(OUT, { recursive: true });
const summary = [];
for (const table of TABLES) {
  try {
    const rows = await pullTable(table);
    writeFileSync(`${OUT}/${table}.json`, JSON.stringify(rows, null, 2));
    summary.push(`${table.padEnd(24)} ${rows.length}`);
  } catch (err) {
    summary.push(`${table.padEnd(24)} SKIP (${String(err.message).slice(0, 60)})`);
  }
}
console.log(summary.join("\n"));
console.log(`\nSaved to ${OUT}/`);

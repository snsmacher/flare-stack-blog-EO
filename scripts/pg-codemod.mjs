import fs from "node:fs";
import path from "node:path";

const dir = "src/lib/db/schema";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".ts"));
const changed = [];
const counts = {
  table: 0,
  jsonb: 0,
  timestamp: 0,
  boolean: 0,
  defaults: 0,
  checks: 0,
};

for (const file of files) {
  const p = path.join(dir, file);
  const before = fs.readFileSync(p, "utf8");
  let s = before;

  s = s.replace(/drizzle-orm\/sqlite-core/g, "drizzle-orm/pg-core");
  s = s.replace(/\bAnySQLiteColumn\b/g, "AnyPgColumn");
  s = s.replace(/\bsqliteTable\(/g, () => {
    counts.table += 1;
    return "pgTable(";
  });

  s = s.replace(
    /text\(\s*"([^"]+)"\s*,\s*\{\s*mode:\s*"json"\s*,?\s*\}\s*\)/g,
    (_m, name) => {
      counts.jsonb += 1;
      return `jsonb("${name}")`;
    },
  );
  s = s.replace(/text\(\s*\{\s*mode:\s*"json"\s*,?\s*\}\s*\)/g, () => {
    counts.jsonb += 1;
    return "jsonb()";
  });

  s = s.replace(
    /integer\(\s*"([^"]+)"\s*,\s*\{\s*mode:\s*"timestamp(?:_ms)?"\s*,?\s*\}\s*\)/g,
    (_m, name) => {
      counts.timestamp += 1;
      return `timestamp("${name}", { withTimezone: true, mode: "date" })`;
    },
  );

  s = s.replace(
    /integer\(\s*"([^"]+)"\s*,\s*\{\s*mode:\s*"boolean"\s*,?\s*\}\s*\)/g,
    (_m, name) => {
      counts.boolean += 1;
      return `boolean("${name}")`;
    },
  );

  s = s.replace(/sql`\(unixepoch\(\)\)`/g, () => {
    counts.defaults += 1;
    return "sql`now()`";
  });
  s = s.replace(
    /sql`\(cast\(unixepoch\('subsecond'\) \* 1000 as integer\)\)`/g,
    () => {
      counts.defaults += 1;
      return "sql`now()`";
    },
  );

  s = s.replace(/^[ \t]*check\([^\n]*json_valid[^\n]*\n/gm, () => {
    counts.checks += 1;
    return "";
  });

  if (s !== before) {
    fs.writeFileSync(p, s);
    changed.push(file);
  }
}

console.log("changed files:", changed.join(", "));
console.log("replacements:", JSON.stringify(counts));

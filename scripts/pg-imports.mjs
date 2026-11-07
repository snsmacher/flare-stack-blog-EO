import fs from "node:fs";
import path from "node:path";

const dir = "src/lib/db/schema";
const VALUE_SYMBOLS = [
  "pgTable",
  "text",
  "integer",
  "boolean",
  "timestamp",
  "jsonb",
  "serial",
  "index",
  "uniqueIndex",
  "primaryKey",
  "check",
];

let touched = 0;
const report = [];

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
  const p = path.join(dir, file);
  const before = fs.readFileSync(p, "utf8");
  let s = before;

  // Drop every existing import from pg-core (value and type forms, single or multi line).
  s = s.replace(
    /import\s+type\s+\{[^}]*\}\s+from\s+"drizzle-orm\/pg-core";\n/g,
    "",
  );
  s = s.replace(/import\s+\{[^}]*\}\s+from\s+"drizzle-orm\/pg-core";\n/g, "");

  const used = VALUE_SYMBOLS.filter((sym) =>
    new RegExp(`\\b${sym}\\(`).test(s),
  );
  const needsType = /\bAnyPgColumn\b/.test(s);

  if (used.length === 0 && !needsType) continue;

  // Insert after the last top-of-file import so the ordering stays conventional.
  const importLines = [...s.matchAll(/^import .*?;$/gm)];
  let insertAt = 0;
  if (importLines.length > 0) {
    const last = importLines[importLines.length - 1];
    insertAt = last.index + last[0].length + 1;
  }

  const block = [];
  if (needsType) {
    block.push(`import type { AnyPgColumn } from "drizzle-orm/pg-core";`);
  }
  if (used.length > 0) {
    const oneLine = `import { ${used.join(", ")} } from "drizzle-orm/pg-core";`;
    if (oneLine.length <= 80) {
      block.push(oneLine);
    } else {
      block.push(
        `import {\n${used.map((u) => `  ${u},`).join("\n")}\n} from "drizzle-orm/pg-core";`,
      );
    }
  }

  s = s.slice(0, insertAt) + block.join("\n") + "\n" + s.slice(insertAt);

  if (s !== before) {
    fs.writeFileSync(p, s);
    touched += 1;
    report.push(`${file}: ${used.join(",")}${needsType ? " +type" : ""}`);
  }
}

console.log(`fixed ${touched} files`);
for (const r of report) console.log("  " + r);

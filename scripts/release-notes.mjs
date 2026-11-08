#!/usr/bin/env node
/**
 * 从 CHANGELOG.md 抽出某个版本的条目，作为 GitHub Release 的正文。
 *
 * 用法：
 *   node scripts/release-notes.mjs 1.0.0
 *   node scripts/release-notes.mjs v1.0.0 --out release-notes.md
 *   node scripts/release-notes.mjs 1.0.0 --changelog ./CHANGELOG.md
 *
 * 找不到对应版本时以非零码退出，并列出文件里现有的版本号。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { argv, exit } from "node:process";

const DEFAULT_CHANGELOG = fileURLToPath(
  new URL("../CHANGELOG.md", import.meta.url),
);
const H2 = /^##\s+(.+?)\s*$/;

/** 去掉 `v` 前缀与方括号：`v1.0.0` / `[1.0.0]` → `1.0.0` */
export function normalizeVersion(input) {
  return String(input)
    .trim()
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .replace(/^v/, "");
}

/** 从 `## [1.0.0] - 2026-11-08` 这类二级标题里取出版本号 */
function headingVersion(line) {
  const match = line.match(H2);
  if (!match) return null;
  const token = match[1].match(/^\[?([^\]\s]+)\]?/);
  return token ? normalizeVersion(token[1]) : null;
}

/**
 * 截取某个版本的正文（标题行之后、下一个二级标题之前）。
 * 抛错时带上文件里现有的版本号，方便发现「忘了在 CHANGELOG 里开一节」。
 */
export function extractReleaseNotes(changelog, version) {
  const target = normalizeVersion(version);
  const lines = changelog.split(/\r?\n/);
  const versions = [];

  let start = -1;
  let end = lines.length;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.startsWith("## ")) continue;

    const found = headingVersion(line);
    if (found) versions.push(found);

    if (start === -1) {
      if (found === target) start = i + 1;
      continue;
    }
    end = i;
    break;
  }

  if (start === -1) {
    throw new Error(
      `CHANGELOG.md 里没有 ${target} 这一节，现有版本：${versions.join("、") || "（无）"}`,
    );
  }

  const body = lines
    .slice(start, end)
    .join("\n")
    .replace(/\n+---\s*$/, "")
    .trim();

  if (!body) {
    throw new Error(`CHANGELOG.md 的 ${target} 一节是空的`);
  }
  return body;
}

function parseArgs(argvList) {
  const options = { version: "", changelog: DEFAULT_CHANGELOG, out: "" };
  for (let i = 0; i < argvList.length; i += 1) {
    const arg = argvList[i];
    if (arg === "--changelog") {
      options.changelog = argvList[i + 1];
      i += 1;
    } else if (arg === "--out") {
      options.out = argvList[i + 1];
      i += 1;
    } else if (!arg.startsWith("--") && !options.version) {
      options.version = arg;
    }
  }
  return options;
}

function main() {
  const options = parseArgs(argv.slice(2));
  if (!options.version) {
    console.error(
      "用法：node scripts/release-notes.mjs <version> [--out <file>]",
    );
    exit(1);
  }

  try {
    const notes = extractReleaseNotes(
      readFileSync(options.changelog, "utf8"),
      options.version,
    );
    if (options.out) {
      writeFileSync(options.out, `${notes}\n`, "utf8");
      console.error(`已写入 ${options.out}（${notes.length} 字符）`);
    } else {
      process.stdout.write(`${notes}\n`);
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    exit(1);
  }
}

const entry = argv[1];
if (entry && import.meta.url === pathToFileURL(entry).href) {
  main();
}

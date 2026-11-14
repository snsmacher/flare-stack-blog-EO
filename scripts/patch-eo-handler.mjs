/**
 * Post-build patch for the EdgeOne TanStack Start cloud function artifact
 * (.edgeone/cloud-functions/ssr-node/handler.js).
 *
 * Fix 1 — runtime env injection:
 *   The adapter wrapper (`nodeRequestHandler`) forwards only the Request to
 *   the app and drops the EdgeOne invocation context, which is the ONLY place
 *   Makers exposes env vars at runtime (`context.env` per official docs).
 *   TanStack Start's entry reads `process.env` (Workers-style), so we merge
 *   any `{ env }` found in the invocation args into `process.env` first.
 *
 * Fix 2 — pg-pool interop:
 *   esbuild bundles pg-pool's ESM build and hands the namespace OBJECT to
 *   `class BoundPool extends Pool`, which throws
 *   "Class extends value #<Object> is not a constructor" the moment the
 *   container loads handler.js — every request 500s regardless of env.
 *   We take `.default` (the real Pool class) instead.
 *
 * Run after `vite build` (see package.json `build:eo`). Idempotent.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const HANDLER = join(process.cwd(), ".edgeone", "cloud-functions", "ssr-node", "handler.js");

if (!existsSync(HANDLER)) {
  console.error("[eo-env-patch] FATAL: handler.js not found at", HANDLER);
  console.error("[eo-env-patch] Did the EdgeOne adapter emit cloud-functions? Aborting.");
  process.exit(1);
}

let src = readFileSync(HANDLER, "utf8");

const ENV_ANCHOR = "async function nodeRequestHandler(nodeReq, ...args) {";
const ENV_INJECTION = `${ENV_ANCHOR}
  try {
    const cand = [nodeReq, ...args];
    for (const c of cand) {
      if (c && typeof c === "object") {
        const e = (c.env && typeof c.env === "object" && c.env) || (c.vars && typeof c.vars === "object" && c.vars) || null;
        if (e) { Object.assign(process.env, e); break; }
      }
    }
  } catch (_eoEnvPatchError) {}
`;

const POOL_RE = /var (Pool\d+) = \(init_esm(\d+)\(\), __toCommonJS\(esm_exports(\d+)\)\);/;
const POOL_FIXED_RE = /var (Pool\d+) = \(init_esm(\d+)\(\), __toCommonJS\(esm_exports(\d+)\)\.default\);/;

let envApplied = src.includes(ENV_INJECTION);
if (!envApplied) {
  if (!src.includes(ENV_ANCHOR)) {
    console.error("[eo-env-patch] FATAL: env anchor not found — adapter template changed?");
    process.exit(1);
  }
  src = src.replace(ENV_ANCHOR, ENV_INJECTION);
  console.log("[eo-env-patch] (1) context.env -> process.env injection: applied");
} else {
  console.log("[eo-env-patch] (1) context.env -> process.env injection: already present");
}

if (POOL_FIXED_RE.test(src)) {
  console.log("[eo-env-patch] (2) pg-pool class-extends fix: already present");
} else {
  const m = src.match(POOL_RE);
  if (m) {
    src = src.replace(POOL_RE, "var $1 = (init_esm$2(), __toCommonJS(esm_exports$3).default);");
    console.log("[eo-env-patch] (2) pg-pool class-extends fix: applied ->", m[0].slice(0, 60) + "...");
  } else {
    // Not a maybe: without this fix the container 500s every request the
    // moment it loads handler.js. A missing pattern means the adapter or
    // esbuild changed — fail the build rather than ship a broken artifact.
    console.error("[eo-env-patch] FATAL: pg-pool pattern not found — adapter template changed?");
    console.error("[eo-env-patch] Without the fix the container 500s every request. Aborting.");
    process.exit(1);
  }
}

writeFileSync(HANDLER, src);
console.log("[eo-env-patch] Done.");

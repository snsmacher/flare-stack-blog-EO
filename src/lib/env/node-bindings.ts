/**
 * Node stand-ins for the Cloudflare bindings this app was written against.
 *
 * `KV` is the only binding wired so far; see `lib/env/kv.ts` for how it is
 * backed by EdgeOne Blob (with an in-process fallback off-platform).
 */

import { kv } from "./kv";

// Explicit (dotted) reads so the `bake-secrets-for-ssr` Vite define can
// replace them with build-time literals. A bare `...process.env` spread is
// opaque to define and stays empty on platforms that don't inject runtime
// env into the process (EdgeOne Node cloud functions).
const bakedEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_URL_DIRECT: process.env.DATABASE_URL_DIRECT,
  PG_POOL_MAX: process.env.PG_POOL_MAX,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  DOMAIN: process.env.DOMAIN,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
};

/**
 * The single `env` object the whole app reads from. Built once so that the
 * request entry and the background helpers share the same bindings.
 */
export const nodeEnv = {
  ...process.env,
  ...bakedEnv,
  KV: kv,
} as unknown as Env;

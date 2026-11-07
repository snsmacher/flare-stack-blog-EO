/**
 * Node stand-ins for the Cloudflare bindings this app was written against.
 *
 * `KV` is the only binding wired so far; see `lib/env/kv.ts` for how it is
 * backed by EdgeOne Blob (with an in-process fallback off-platform).
 */

import { kv } from "./kv";

/**
 * The single `env` object the whole app reads from. Built once so that the
 * request entry and the background helpers share the same bindings.
 */
export const nodeEnv = {
  ...process.env,
  KV: kv,
} as unknown as Env;

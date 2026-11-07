/**
 * Node stand-ins for the Cloudflare bindings this app was written against.
 *
 * `KV` is the only binding wired so far; see `lib/env/kv.ts` for how it is
 * backed by EdgeOne Blob (with an in-process fallback off-platform).
 */

import { kv } from "./kv";

// Lazy getters (NOT eager values) so reads happen at request time, AFTER the
// EdgeOne wrapper patch has merged `context.env` into process.env. Module
// load time is too early: the cloud-function container boots with an empty
// process.env and only receives Makers variables with the first invocation.
// Dotted reads also let the `bake-secrets-for-ssr` Vite define replace them
// with build-time literals when baking is available.
const bakedEnv = {
  get DATABASE_URL() {
    return process.env.DATABASE_URL;
  },
  get DATABASE_URL_DIRECT() {
    return process.env.DATABASE_URL_DIRECT;
  },
  get PG_POOL_MAX() {
    return process.env.PG_POOL_MAX;
  },
  get BETTER_AUTH_SECRET() {
    return process.env.BETTER_AUTH_SECRET;
  },
  get BETTER_AUTH_URL() {
    return process.env.BETTER_AUTH_URL;
  },
  get DOMAIN() {
    return process.env.DOMAIN;
  },
  get GITHUB_CLIENT_ID() {
    return process.env.GITHUB_CLIENT_ID;
  },
  get GITHUB_CLIENT_SECRET() {
    return process.env.GITHUB_CLIENT_SECRET;
  },
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

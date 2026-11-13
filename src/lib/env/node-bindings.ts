/**
 * Node stand-ins for the Cloudflare bindings this app was written against.
 *
 * `KV` is backed by EdgeOne Blob (see `lib/env/kv.ts`), `QUEUE` is an
 * in-process stand-in (see `./queue.ts` — EdgeOne has no Queues); the rest
 * of the keys are environment variables.
 */

import { kv } from "./kv";
import { createInProcessQueue } from "./queue";

// Lazy getters (NOT eager values) so reads happen at request time, AFTER the
// EdgeOne wrapper patch has merged `context.env` into process.env. Module
// load time is too early: the cloud-function container boots with an empty
// process.env and only receives Makers variables with the first invocation.
// Dotted reads also let the `bake-secrets-for-ssr` Vite define replace them
// with build-time literals when baking is available.
const envGetters: Record<string, () => string | undefined> = {
  DATABASE_URL: () => process.env.DATABASE_URL,
  DATABASE_URL_DIRECT: () => process.env.DATABASE_URL_DIRECT,
  PG_POOL_MAX: () => process.env.PG_POOL_MAX,
  BETTER_AUTH_SECRET: () => process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: () => process.env.BETTER_AUTH_URL,
  DOMAIN: () => process.env.DOMAIN,
  GITHUB_CLIENT_ID: () => process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: () => process.env.GITHUB_CLIENT_SECRET,
  // Umami. `/stats.js` and `/api/send` read UMAMI_SRC off the env object to
  // proxy the statistics script; the post-heat sync reads the rest. Baked like
  // the variables above, since the container boots with an empty process.env.
  UMAMI_WEBSITE_ID: () => process.env.UMAMI_WEBSITE_ID,
  UMAMI_SRC: () => process.env.UMAMI_SRC,
  UMAMI_API_URL: () => process.env.UMAMI_API_URL,
  UMAMI_API_KEY: () => process.env.UMAMI_API_KEY,
  UMAMI_USERNAME: () => process.env.UMAMI_USERNAME,
  UMAMI_PASSWORD: () => process.env.UMAMI_PASSWORD,
};

/**
 * The single `env` object the whole app reads from. Built once so that the
 * request entry and the background helpers share the same bindings.
 */
export const nodeEnv = {
  ...process.env,
  KV: kv,
  QUEUE: createInProcessQueue(() => nodeEnv),
} as unknown as Env;

// Getters go on last so they win over the `...process.env` snapshot above —
// and stay lazy. A spread of `envGetters` would have evaluated each getter
// once at module load, freezing the (still empty) boot-time values forever.
for (const [name, get] of Object.entries(envGetters)) {
  Object.defineProperty(nodeEnv, name, { get, enumerable: true });
}

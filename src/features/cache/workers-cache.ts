import type { WorkersCachePurgeTarget } from "./workers-cache-policy";

const TAGS_PER_PURGE = 100;

/**
 * `ctx.exports` is a Workers-only RPC handle: the app calls into its own
 * entrypoint to purge the CDN by Cache-Tag. Node has no such thing, so the
 * field is typed loosely and the purge silently does nothing there — the KV
 * generation bump in `public-cache.ts` is what invalidates entries off-platform.
 */
export type WorkersCachePurgeContext = {
  exports?: unknown;
};

type CachePurgeRpc = {
  App?: {
    purgeCache?: (target: WorkersCachePurgeTarget) => Promise<void>;
  };
};

export function hasWorkersCachePurge(cache: { purge?: unknown }): cache is {
  purge: (options: CachePurgeOptions) => Promise<CachePurgeResult>;
} {
  return typeof cache.purge === "function";
}

async function assertPurge(result: CachePurgeResult) {
  if (result.success) return;
  throw new Error(
    JSON.stringify({
      message: "workers cache purge failed",
      errors: result.errors,
    }),
  );
}

export async function applyWorkersCachePurge(
  cache: { purge?: unknown } | undefined,
  target: WorkersCachePurgeTarget,
) {
  if (!cache || !hasWorkersCachePurge(cache)) return;

  if ("purgeEverything" in target) {
    await assertPurge(await cache.purge(target));
    return;
  }

  const tags = [...new Set(target.tags)];
  if (tags.length === 0) return;

  for (let i = 0; i < tags.length; i += TAGS_PER_PURGE) {
    await assertPurge(
      await cache.purge({ tags: tags.slice(i, i + TAGS_PER_PURGE) }),
    );
  }
}

export async function purgeWorkersCache(
  ctx: WorkersCachePurgeContext,
  target: WorkersCachePurgeTarget,
) {
  const rpc = ctx.exports as CachePurgeRpc | undefined;
  await rpc?.App?.purgeCache?.(target);
}

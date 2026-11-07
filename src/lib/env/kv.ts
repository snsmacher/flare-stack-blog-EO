/**
 * KV on top of EdgeOne Blob.
 *
 * Blob is `set / get / delete / list(prefix)` over string keys — which is what
 * this app actually asks of KV, so the mapping is direct. Two things Blob does
 * not give us have to be covered here:
 *
 * 1. No TTL. `SetOptions` has no expiry field, so values written with a TTL are
 *    wrapped in a `{__kv, exp, v}` envelope and treated as absent once `exp`
 *    passes. Expiry is checked on read, best-effort deleted on read, and a cron
 *    sweep is still needed to reclaim storage for keys nobody reads again.
 * 2. Eventual reads by default. That is exactly right for a page cache, but the
 *    popularity counters are read-modify-write, so those keys read with
 *    `consistency: "strong"`. See `STRONG_READ_PREFIXES`.
 *
 * Outside Makers Functions `getStore()` cannot authenticate (it wants a project
 * id and token), so an in-process map takes over. That keeps `vite dev` and the
 * `srvx` runtime working without any EdgeOne credentials.
 */

import type { ConsistencyMode } from "@edgeone/pages-blob";
import { blobStore, KV_STORE } from "./blob";

/**
 * Keys whose reads must see the latest write.
 *
 * - `post-popularity:` holds a snapshot that is read, incremented and written
 *   back; a stale read there silently drops views.
 * - `ver:` gates every cached page render. A stale read serves content the
 *   editor just invalidated (up to the entry TTL), which is more visible than
 *   the few ms a strong read costs.
 *
 * If TTFB turns out to matter more than instant invalidation, drop `"ver:"`
 * from this list — nothing else changes.
 */
const STRONG_READ_PREFIXES = ["post-popularity:", "ver:"];

type Envelope = { __kv: 1; exp: number | null; v: string };

function consistencyFor(key: string): ConsistencyMode {
  return STRONG_READ_PREFIXES.some((prefix) => key.startsWith(prefix))
    ? "strong"
    : "eventual";
}

// ── fallback store (no EdgeOne runtime) ─────────────────────────────────────

type MemoryEntry = { value: string; expiresAt: number | null };
const memory = new Map<string, MemoryEntry>();
const SWEEP_THRESHOLD = 5_000;

function memorySweep(now: number) {
  if (memory.size < SWEEP_THRESHOLD) return;
  for (const [key, entry] of memory) {
    if (entry.expiresAt !== null && entry.expiresAt <= now) memory.delete(key);
  }
}

// ── Blob handle ─────────────────────────────────────────────────────────────

/**
 * `null` when there is no Pages project to bind to — the signal that we are
 * not on EdgeOne, so cache work falls back to the in-process map instead of
 * failing every request.
 */
function resolveStore() {
  return blobStore(KV_STORE);
}

// ── envelope ────────────────────────────────────────────────────────────────

function encode(value: string, ttlSeconds?: number): string {
  if (typeof ttlSeconds !== "number" || !Number.isFinite(ttlSeconds)) {
    return value;
  }
  const envelope: Envelope = {
    __kv: 1,
    exp: Date.now() + ttlSeconds * 1000,
    v: value,
  };
  return JSON.stringify(envelope);
}

function decode(raw: string | null): { value: string | null; expired: boolean } {
  if (raw === null) return { value: null, expired: false };

  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      parsed !== null &&
      typeof parsed === "object" &&
      (parsed as Envelope).__kv === 1
    ) {
      const envelope = parsed as Envelope;
      if (envelope.exp !== null && envelope.exp <= Date.now()) {
        return { value: null, expired: true };
      }
      return { value: envelope.v, expired: false };
    }
  } catch {
    // Not JSON: a plain value written without a TTL.
  }

  return { value: raw, expired: false };
}

// ── KVNamespace-shaped surface ──────────────────────────────────────────────

/**
 * The subset of `KVNamespace` the app touches: `get`, `put`, `delete` (and
 * `list`, unused today but part of the shape). Call sites already `.catch()`
 * their failures, so a broken cache degrades to a cache miss, never a 500.
 */
export const kv = {
  async get(key: string, type?: "text" | "json"): Promise<unknown> {
    const store = resolveStore();
    const now = Date.now();

    let raw: string | null;
    if (store) {
      raw = await store.get(key, { consistency: consistencyFor(key) });
    } else {
      const entry = memory.get(key);
      if (!entry) return null;
      if (entry.expiresAt !== null && entry.expiresAt <= now) {
        memory.delete(key);
        return null;
      }
      raw = entry.value;
    }

    const { value, expired } = decode(raw);
    if (expired && store) {
      // Best effort: the read path should not wait on cleanup.
      void store.delete(key).catch(() => undefined);
    }
    if (value === null) return null;

    if (type === "json") {
      try {
        return JSON.parse(value);
      } catch (error) {
        console.error(
          JSON.stringify({
            message: "kv value is not valid json",
            key,
            error: String(error),
          }),
        );
        return null;
      }
    }

    return value;
  },

  async put(
    key: string,
    value: string,
    options?: { expirationTtl?: number },
  ): Promise<void> {
    const ttl = options?.expirationTtl;
    const body = encode(value, ttl);
    const store = resolveStore();

    if (store) {
      await store.set(key, body);
      return;
    }

    const now = Date.now();
    memorySweep(now);
    memory.set(key, {
      value: body,
      expiresAt: typeof ttl === "number" ? now + ttl * 1000 : null,
    });
  },

  async delete(key: string): Promise<void> {
    const store = resolveStore();
    if (store) {
      await store.delete(key);
      return;
    }
    memory.delete(key);
  },

  async list(options?: { prefix?: string; limit?: number }) {
    const prefix = options?.prefix ?? "";
    const store = resolveStore();

    if (store) {
      const result = await store.list({
        prefix,
        limit: options?.limit,
        paginate: false,
        consistency: consistencyFor(prefix),
      });
      return {
        keys: result.blobs.map((blob) => ({ name: blob.key })),
        list_complete: result.cursor === undefined,
        cursor: result.cursor ?? "",
      };
    }

    const keys = [...memory.keys()]
      .filter((key) => key.startsWith(prefix))
      .slice(0, options?.limit ?? 1000)
      .map((name) => ({ name }));
    return { keys, list_complete: true, cursor: "" };
  },
};

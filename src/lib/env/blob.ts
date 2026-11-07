/**
 * EdgeOne Blob store resolution.
 *
 * Inside Pages Functions the SDK authenticates on its own, so a namespace name
 * is all it needs. Everywhere else it throws, which is how we detect that we
 * are running on plain Node — callers then fall back to their own stand-in.
 */

import { getStore, type Store } from "@edgeone/pages-blob";

/** Cache entries. Expiring, disposable, rewritten constantly. */
export const KV_STORE = "blog-kv";

/** Uploaded images. Never expires, must survive. */
export const MEDIA_STORE = "blog-media";

const resolved = new Map<string, Store | null>();

export function blobStore(name: string): Store | null {
  const cached = resolved.get(name);
  if (cached !== undefined) return cached;

  let store: Store | null = null;
  try {
    // Project id + token are only needed off-platform (local scripts, tests).
    const projectId = process.env.EO_BLOB_PROJECT_ID;
    const token = process.env.EO_BLOB_TOKEN;
    store =
      projectId && token
        ? getStore({ name, projectId, token })
        : getStore(name);
  } catch {
    store = null;
  }

  resolved.set(name, store);
  return store;
}

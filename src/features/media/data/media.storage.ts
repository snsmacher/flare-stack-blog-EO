/**
 * Media objects, stored in EdgeOne Blob.
 *
 * This used to be R2 with `httpMetadata`, so the surface is kept deliberately
 * narrow: write bytes at a key, read them back with their version, delete.
 * Content type is not stored — every key carries its extension and the read
 * path already derives the type from it, which is one less thing to migrate.
 *
 * Off EdgeOne (local dev, tests) objects land in `.data/blob-media` so the
 * upload → serve loop can be exercised without any cloud credentials.
 */

import { blobStore, MEDIA_STORE } from "@/lib/env/blob";
import { generateKey } from "@/features/media/utils/media.utils";

const LOCAL_ROOT = ".data/blob-media";

export type StoredObject = {
  body: ReadableStream<Uint8Array> | Uint8Array;
  contentType?: string;
  etag?: string;
};

/**
 * Keys arrive from the request path, and the local fallback turns them into
 * filesystem paths — so a traversal segment must never get that far.
 */
function assertSafeKey(key: string) {
  const unsafe = key
    .split("/")
    .some((segment) => segment === ".." || segment === "");
  if (unsafe) throw new Error(`unsafe media key: ${key}`);
}

async function localPath(key: string) {
  assertSafeKey(key);
  const path = await import("node:path");
  return path.join(process.cwd(), LOCAL_ROOT, key);
}

async function localWrite(key: string, bytes: ArrayBuffer) {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const file = await localPath(key);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, new Uint8Array(bytes));
}

async function localRead(key: string): Promise<StoredObject | null> {
  const fs = await import("node:fs/promises");
  try {
    const file = await localPath(key);
    const [bytes, info] = await Promise.all([
      fs.readFile(file),
      fs.stat(file),
    ]);
    return {
      body: new Uint8Array(bytes),
      etag: `${info.mtimeMs.toString(16)}-${info.size.toString(16)}`,
    };
  } catch {
    return null;
  }
}

export async function putObject(file: File, key = generateKey(file.name)) {
  const bytes = await file.arrayBuffer();
  const store = blobStore(MEDIA_STORE);

  if (store) {
    await store.set(key, bytes);
  } else {
    await localWrite(key, bytes);
  }

  return {
    key,
    url: `/images/${key}`,
    fileName: file.name,
    mimeType: file.type,
    sizeInBytes: file.size,
  };
}

export async function getObject(key: string): Promise<StoredObject | null> {
  const store = blobStore(MEDIA_STORE);
  if (!store) return localRead(key);

  // Two reads, issued together: the body and the version tag the browser
  // revalidates against.
  const [body, meta] = await Promise.all([
    store.get(key, { type: "stream" }),
    store.getMetadata(key),
  ]);
  if (!body) return null;

  return { body, contentType: meta?.contentType, etag: meta?.etag };
}

export async function deleteObject(key: string) {
  const store = blobStore(MEDIA_STORE);
  if (store) {
    await store.delete(key);
    return;
  }

  const fs = await import("node:fs/promises");
  const file = await localPath(key).catch(() => null);
  if (file) await fs.rm(file, { force: true }).catch(() => undefined);
}

/**
 * Upload a site asset (favicon, theme images) at a fixed key. No DB record;
 * overwrites in place on re-upload.
 */
export async function putSiteAsset(
  file: File,
  assetPath: string,
): Promise<{ key: string; url: string }> {
  const key = `asset/${assetPath}`;
  const bytes = await file.arrayBuffer();
  const store = blobStore(MEDIA_STORE);

  if (store) {
    await store.set(key, bytes);
  } else {
    await localWrite(key, bytes);
  }

  return { key, url: `/images/${key}` };
}

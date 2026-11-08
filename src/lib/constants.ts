/**
 * Cache headers.
 *
 * Two audiences read these: the browser (private cache) and the edge (shared
 * cache). `max-age=0` keeps browsers revalidating so a reader never sits on a
 * stale page, while `s-maxage` is what the edge honours.
 *
 * EdgeOne ignores `CDN-Cache-Control` — that header is Cloudflare's, and it is
 * kept only so a move back stays declarative. The edge reads `s-maxage` from
 * `Cache-Control` itself, so both carry the same window. Without it every
 * request reached the cloud function and cost a database round trip.
 *
 * `must-revalidate` is deliberately absent: it forbids serving a stale copy,
 * which would cancel `stale-while-revalidate`. With SWR an expired entry is
 * served immediately while the edge refreshes it behind the reader's back, so
 * the first view after expiry is still fast.
 */
export const CACHE_CONTROL = {
  public: {
    "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    "CDN-Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
  },
  // Public HTML and site documents. Kept short because EdgeOne has no
  // Cache-Tag purge here: a published edit has to show up on its own.
  html: {
    "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=1800",
    "CDN-Cache-Control": "public, max-age=60, stale-while-revalidate=1800",
  },
  swr: {
    "Cache-Control": "public, max-age=0, s-maxage=1, stale-while-revalidate=604800",
    "CDN-Cache-Control": "public, s-maxage=1, stale-while-revalidate=604800",
  },
  // Media keeps its address when its file is replaced, so browsers revalidate
  // every time; the edge keeps a copy for a day.
  media: {
    "Cache-Control": "public, max-age=0, s-maxage=86400",
    "CDN-Cache-Control": "public, max-age=86400",
  },
  immutable: {
    "Cache-Control": "public, max-age=31536000, immutable",
    "CDN-Cache-Control": "public, max-age=31536000, immutable",
  },
  forbidden: {
    "Cache-Control": "public, max-age=0, s-maxage=3600",
    "CDN-Cache-Control": "public, s-maxage=3600",
  },
  notFound: {
    "Cache-Control": "public, max-age=0, s-maxage=10",
    "CDN-Cache-Control": "public, s-maxage=10",
  },
  serverError: {
    "Cache-Control": "public, max-age=0, s-maxage=10",
    "CDN-Cache-Control": "public, s-maxage=10",
  },
  private: {
    "Cache-Control": "private, no-store, no-cache, must-revalidate",
    "CDN-Cache-Control": "private, no-store",
  },
} as const;

export const ADMIN_ITEMS_PER_PAGE = 12;

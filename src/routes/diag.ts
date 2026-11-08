import { createFileRoute } from "@tanstack/react-router";
import { sql } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { getHomePosts } from "@/features/posts/data/posts.data";
import { invalidate } from "@/features/cache/public-cache";

/**
 * Temporary production diagnostic endpoint: /diag?k=<TOKEN>
 *
 * Reports, without leaking secret values:
 *  - which env keys the runtime actually exposes (both process.env and context.env)
 *  - whether the baked-in values made it into the SSR bundle
 *  - live Postgres connectivity + the exact error when it fails
 *  - whether the real posts query path works
 *
 * Removed once the EdgeOne deployment is verified healthy.
 */
const TOKEN = "smo-diag-2026";

const ENV_KEYS = [
  "DATABASE_URL",
  "DATABASE_URL_DIRECT",
  "PG_POOL_MAX",
  "BETTER_AUTH_SECRET",
  "BETTER_AUTH_URL",
  "DOMAIN",
  "GITHUB_CLIENT_ID",
  "GITHUB_CLIENT_SECRET",
  "UMAMI_SRC",
  "UMAMI_WEBSITE_ID",
  "UMAMI_API_URL",
  "UMAMI_API_KEY",
  "UMAMI_USERNAME",
  "UMAMI_PASSWORD",
  "NODE_ENV",
] as const;

function describe(value: unknown): string {
  if (value === undefined || value === null || value === "") return "MISSING";
  const s = String(value);
  // Never echo values; only length + a safe host hint for URLs.
  if (s.startsWith("postgres")) {
    try {
      const u = new URL(s);
      return `set(len=${s.length}, host=${u.host}, user=${u.username})`;
    } catch {
      return `set(len=${s.length}, unparseable)`;
    }
  }
  if (s.startsWith("http")) return `set(len=${s.length}, value=${s})`;
  return `set(len=${s.length})`;
}

export const Route = createFileRoute("/diag")({
  server: {
    handlers: {
      GET: async ({ request, context }) => {
        const url = new URL(request.url);
        if (url.searchParams.get("k") !== TOKEN) {
          return new Response("Not Found", { status: 404 });
        }

        const out: Record<string, unknown> = {
          ts: new Date().toISOString(),
          node: process.version,
          url: request.url,
          host: request.headers.get("host"),
          xfh: request.headers.get("x-forwarded-host"),
          xfp: request.headers.get("x-forwarded-proto"),
        };

        // 1) process.env view (baked values are substituted at build time)
        const fromProcess: Record<string, string> = {};
        for (const k of ENV_KEYS) fromProcess[k] = describe(process.env[k]);
        out.processEnv = fromProcess;

        // 2) context.env view (the official Makers runtime channel)
        const ctxEnv = (
          context as unknown as { env?: Record<string, string> } | undefined
        )?.env;
        if (ctxEnv) {
          const fromCtx: Record<string, string> = {};
          for (const k of ENV_KEYS) fromCtx[k] = describe(ctxEnv[k]);
          out.contextEnv = fromCtx;
          out.contextEnvKeyCount = Object.keys(ctxEnv).length;
          out.contextEnvSample = Object.keys(ctxEnv).slice(0, 25);
        } else {
          out.contextEnv = "NO context.env";
        }

        // 3) live Postgres round-trip
        try {
          const db = getDb(context.env as Env);
          const r = await db.execute(
            sql`select 1 as ok, current_database() as db`,
          );
          out.dbPing = "ok";
          out.dbPingRows = (r as { rows?: unknown }).rows ?? r;
        } catch (e) {
          const err = e as { message?: string; code?: string; cause?: unknown };
          out.dbPing = "FAIL";
          out.dbError = String(err?.message ?? e).slice(0, 800);
          out.dbErrorCode = err?.code;
          out.dbErrorCause = String(
            (err?.cause as { message?: string } | undefined)?.message ?? "",
          ).slice(0, 400);
        }

        // 4) real post query path (what the homepage loader runs)
        try {
          const db = getDb(context.env as Env);
          const home = await getHomePosts(db, 1);
          out.postsQuery = "ok";
          out.homePostCount = Array.isArray(home) ? home.length : typeof home;
          out.homePostTitles = Array.isArray(home)
            ? home.map(
                (p) =>
                  (p.publicSnapshotJson as { title?: string } | null)?.title ??
                  p.id,
              )
            : undefined;
        } catch (e) {
          const err = e as { message?: string; code?: string };
          out.postsQuery = "FAIL";
          out.postsError = String(err?.message ?? e).slice(0, 800);
          out.postsErrorCode = err?.code;
        }

        // 5) bust every public cache generation (same KV `ver:<ns>` keys the
        // admin mutations bump). Used once after the D1 → Neon import, since
        // raw SQL writes never emitted invalidation events.
        if (url.searchParams.get("bust") === "1") {
          try {
            await invalidate.all({
              env: context.env,
              executionCtx: {
                waitUntil: () => {},
                passThroughOnException: () => {},
              },
            } as never);
            out.cacheBust = "ok";
          } catch (e) {
            out.cacheBust = "FAIL";
            out.cacheBustError = String((e as Error)?.message ?? e).slice(
              0,
              500,
            );
          }
        }

        return new Response(JSON.stringify(out, null, 2), {
          status: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store",
          },
        });
      },
    },
  },
});

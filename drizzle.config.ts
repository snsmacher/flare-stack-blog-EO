import { defineConfig } from "drizzle-kit";

/**
 * Two connection strings, on purpose:
 *
 * - `DATABASE_URL` is what the running app uses, so Cloud Function instances
 *   share one pool instead of each pinning a server connection.
 * - `DATABASE_URL_DIRECT` is what migration uses, because a transaction-scoped
 *   pooler cannot carry session-level state. It falls back to `DATABASE_URL`
 *   when the provider exposes a single endpoint.
 *
 * `channel_binding` is a libpq parameter that node-postgres and drizzle-kit
 * both reject, so it is stripped instead of passed through.
 */
function connectionString(): string {
  const raw = process.env.DATABASE_URL_DIRECT ?? process.env.DATABASE_URL;
  if (!raw) {
    throw new Error(
      "Set DATABASE_URL (or DATABASE_URL_DIRECT) before running drizzle-kit.",
    );
  }
  return raw
    .replace(/([?&])channel_binding=[^&]*/g, "$1")
    .replace(/[?&]$/, "")
    .replace(/\?&/, "?");
}

export default defineConfig({
  out: "./migrations",
  schema: "./src/lib/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString(),
  },
  verbose: true,
  strict: true,
});

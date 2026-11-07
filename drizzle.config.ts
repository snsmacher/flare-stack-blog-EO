import { defineConfig } from "drizzle-kit";

/**
 * Two connection strings, on purpose:
 *
 * - `DATABASE_URL` points at the pooled endpoint (Neon's `-pooler` host) and is
 *   what the running app uses, so Cloud Function instances do not each pin a
 *   server connection.
 * - `DATABASE_URL_DIRECT` points at the direct endpoint and is what migration
 *   uses, because a transaction-scoped pooler cannot carry session-level state.
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

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool, type PoolClient } from "pg";
import * as schema from "./schema";

export type DB = ReturnType<typeof createDb>;

// One pool per process. Cloud Functions start one instance per container, so the
// pool stays small: Neon's pooled endpoint multiplexes the rest.
let instance: DB | null = null;

/**
 * `pg` reads the connection string with libpq semantics but rejects a few
 * parameters it does not model. `channel_binding` is one of them — Neon appends
 * it by default and node-postgres throws "invalid connection option" on it.
 */
function normalizeConnectionString(raw: string): string {
  return raw
    .replace(/([?&])channel_binding=[^&]*/g, "$1")
    .replace(/[?&]$/, "")
    .replace(/\?&/, "?");
}

function createDb() {
  const raw = process.env.DATABASE_URL;
  if (!raw) {
    throw new Error(
      "DATABASE_URL is not set. Point it at the Postgres connection string before starting the app.",
    );
  }

  const pool = new Pool({
    connectionString: normalizeConnectionString(raw),
    max: Number(process.env.PG_POOL_MAX ?? 5),
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });

  const db = drizzle(pool, { schema });

  /**
   * D1 ran `db.batch()` as one transaction over one connection and handed back
   * one result array per statement. node-postgres has no such method, so this
   * reimplements it: a single client, BEGIN/COMMIT, statements in order. Unlike
   * the better-sqlite3 shim this replaced, a failure midway really does roll
   * back — the callers rely on that.
   */
  const batch = async (queries: readonly unknown[]): Promise<any[]> => {
    const client: PoolClient = await pool.connect();
    try {
      await client.query("begin");
      const results: any[] = [];
      for (const query of queries as { toSQL: () => { sql: string; params: unknown[] } }[]) {
        const { sql: text, params } = query.toSQL();
        const result = await client.query(text, params);
        results.push(result.rows);
      }
      await client.query("commit");
      return results;
    } catch (error) {
      await client.query("rollback").catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  };

  return Object.assign(db, { batch });
}

export function getDb(_env: Env): DB {
  if (!instance) instance = createDb();
  return instance;
}

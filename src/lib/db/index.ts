import { drizzle } from "drizzle-orm/node-postgres";
import { Pool, type PoolClient } from "pg";
import { resolveDatabaseUrl } from "./connection-target";
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
  // DATABASE_URL 是唯一来源（见 ./connection-target.ts）：缺失就直接失败，
  // 而不是带着空配置继续启动、把第一个请求拖成莫名的连接错误。
  const raw = resolveDatabaseUrl(process.env.DATABASE_URL);
  if (!raw) {
    throw new Error(
      "DATABASE_URL is not set; fill it in the platform's build environment variables",
    );
  }

  const pool = new Pool({
    connectionString: normalizeConnectionString(raw),
    max: Number(process.env.PG_POOL_MAX ?? 5),
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });

  // 空闲连接被服务端断开时 Pool 会发出 'error'；没有监听器的话 Node 把它当
  // 未捕获异常，直接击穿云函数容器。
  pool.on("error", (error) => {
    console.error(
      JSON.stringify({
        message: "pg pool idle client error",
        error: error.message,
      }),
    );
  });

  const db = drizzle(pool, { schema });

  /**
   * D1 ran `db.batch()` as one transaction over one connection and handed back
   * one result array per statement. node-postgres has no such method, so this
   * reimplements it: a single client, BEGIN/COMMIT, statements in order. Unlike
   * the better-sqlite3 shim this replaced, a failure midway really does roll
   * back — the callers rely on that.
   */
  // oxlint-disable-next-line typescript/no-explicit-any -- D1 typed batch results `any[]`; callers still index into them.
  const batch = async (queries: readonly unknown[]): Promise<any[]> => {
    const client: PoolClient = await pool.connect();
    try {
      await client.query("begin");
      // oxlint-disable-next-line typescript/no-explicit-any -- one row array per statement, as D1 returned them.
      const results: any[] = [];
      for (const query of queries as {
        toSQL: () => { sql: string; params: unknown[] };
      }[]) {
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

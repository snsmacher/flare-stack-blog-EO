/**
 * The fields node-postgres puts on its errors: `code` is the SQLSTATE
 * (23505 unique, 23502 not-null, 23503 foreign key), `constraint`/`column`
 * name the violated constraint or column. drizzle wraps the driver error as
 * `cause`, so matchers walk the chain (see `isUniqueViolation` and friends);
 * the SQLite-era message matchers stay alongside as a fallback.
 */
export type PgError = Error & {
  code?: string;
  constraint?: string;
  column?: string;
};

/** Finds the first error in the `cause` chain carrying this SQLSTATE. */
export function findPgError(error: unknown, code: string): PgError | null {
  for (
    let current = error;
    current instanceof Error;
    current = current.cause
  ) {
    if ((current as PgError).code === code) return current as PgError;
  }
  return null;
}

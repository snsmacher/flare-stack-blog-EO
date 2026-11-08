import type { SQL, SQLWrapper } from "drizzle-orm";
import { sql } from "drizzle-orm";

/**
 * `column` contains `term`, ignoring the case of ASCII letters as LIKE does.
 *
 * A LIKE pattern was capped at 50 bytes back on D1, so a search word of about
 * seventeen Chinese characters failed with a 500; `strpos` takes any length
 * and needs no escaping of `%` and `_`. (PostgreSQL spells `instr` as
 * `strpos`, same argument order.)
 */
export function containsText(column: SQLWrapper, term: string): SQL<boolean> {
  return sql<boolean>`strpos(lower(${column}), lower(${term})) > 0`;
}

/**
 * `column` starts with `prefix`, ignoring the case of ASCII letters as LIKE
 * does, for a prefix of any length (see `containsText`).
 */
export function startsWithText(
  column: SQLWrapper,
  prefix: string,
): SQL<boolean> {
  const length = Array.from(prefix).length;
  return sql<boolean>`lower(substr(${column}, 1, ${length})) = lower(${prefix})`;
}

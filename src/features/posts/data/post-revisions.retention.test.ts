import {
  drizzle,
  type NodePgClient,
} from "drizzle-orm/node-postgres";
import { describe, expect, it } from "vitest";
import {
  countRevisionsToKeep,
  REVISION_RETENTION,
  trimPostRevisionStatement,
} from "./post-revisions.data";

/** 一个从不连库的 drizzle 实例：只用来产出删除语句的 SQL 与参数。 */
const statementDb = drizzle({
  query: () => {
    throw new Error("unit tests must not query the database");
  },
} as unknown as NodePgClient) as unknown as Parameters<
  typeof trimPostRevisionStatement
>[0];

describe("countRevisionsToKeep", () => {
  const limit = REVISION_RETENTION.bytesPerPostReason;

  it("keeps only the newest `count` rows when bytes never bind", () => {
    expect(countRevisionsToKeep([10, 10, 10, 10, 10], 2, limit)).toBe(2);
    expect(countRevisionsToKeep([10, 10, 10], 2, limit)).toBe(2);
  });

  it("always keeps the newest row — it is the unpublished-changes baseline", () => {
    // Even when one snapshot alone blows past the byte limit.
    expect(countRevisionsToKeep([limit + 1, 1, 1], 5, limit)).toBe(1);
    // Even with a quota of one (or zero) the table never empties.
    expect(countRevisionsToKeep([9, 9, 9], 1, limit)).toBe(1);
    expect(countRevisionsToKeep([9, 9, 9], 0, limit)).toBe(1);
  });

  it("trims by cumulative bytes, dropping the oldest first", () => {
    // Two rows that together cross the line: the older one goes.
    expect(countRevisionsToKeep([limit, limit], 2, limit)).toBe(1);
    expect(countRevisionsToKeep([limit / 2, limit / 2], 2, limit)).toBe(2);
    // Five small rows under one quota: cumulative crosses mid-way.
    const kb = 1024;
    expect(
      countRevisionsToKeep(
        [60 * kb, 60 * kb, 60 * kb, 60 * kb, 60 * kb],
        5,
        256 * kb,
      ),
    ).toBe(4);
  });
});

describe("trimPostRevisionStatement", () => {
  const { sql, params } = trimPostRevisionStatement(
    statementDb,
    7,
    "publish",
  ).toSQL();

  it("ranks by created_at desc, id desc — same-millisecond writes need the id tiebreak", () => {
    expect(sql).toContain("order by created_at desc, id desc");
  });

  it("never plans an empty keep-set: rn = 1 survives unconditionally", () => {
    expect(sql).toContain("rn = 1 or (rn <=");
  });

  it("scopes the delete to one post and one reason", () => {
    expect(sql).toContain('"post_revisions"');
    expect(sql).not.toContain("delete from \"post_revisions\" \"r\"");
  });

  it("binds post, reason, quota and byte limit as parameters", () => {
    expect(params).toEqual([
      7,
      "publish",
      7,
      "publish",
      REVISION_RETENTION.count.publish,
      REVISION_RETENTION.bytesPerPostReason,
    ]);
  });
});

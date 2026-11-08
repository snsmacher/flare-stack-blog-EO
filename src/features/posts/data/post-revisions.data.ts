import { and, desc, eq, inArray, max, sql } from "drizzle-orm";
import {
  type PostRevisionReason,
  type PostRevisionSnapshot,
  PostRevisionsTable,
  newSaveToken,
  PostsTable,
  PostTagsTable,
} from "@/lib/db/schema";
import { keyForWrite } from "@/lib/db/unique-keys";
import { findPostById } from "./posts.data";

function normalizeTagIds(tagIds: Array<number>) {
  return [...new Set(tagIds)].sort((a, b) => a - b);
}

export async function listPostRevisions(db: DB, postId: number) {
  return await db.query.PostRevisionsTable.findMany({
    where: eq(PostRevisionsTable.postId, postId),
    orderBy: [desc(PostRevisionsTable.createdAt), desc(PostRevisionsTable.id)],
  });
}

export async function findPostRevisionById(
  db: DB,
  postId: number,
  revisionId: number,
) {
  return await db.query.PostRevisionsTable.findFirst({
    where: and(
      eq(PostRevisionsTable.postId, postId),
      eq(PostRevisionsTable.id, revisionId),
    ),
  });
}

export async function insertPostRevision(
  db: DB,
  data: {
    postId: number;
    reason: PostRevisionReason;
    snapshotJson: PostRevisionSnapshot;
    snapshotHash: string;
    restoredFromRevisionId?: number | null;
  },
) {
  const [revision] = await db
    .insert(PostRevisionsTable)
    .values({
      postId: data.postId,
      reason: data.reason,
      snapshotJson: data.snapshotJson,
      snapshotHash: data.snapshotHash,
      restoredFromRevisionId: data.restoredFromRevisionId ?? null,
    })
    .returning();

  return revision;
}

export async function findLatestPostRevision(
  db: DB,
  postId: number,
  options: {
    reason?: PostRevisionReason;
  } = {},
) {
  return await db.query.PostRevisionsTable.findFirst({
    where: and(
      eq(PostRevisionsTable.postId, postId),
      options.reason
        ? eq(PostRevisionsTable.reason, options.reason)
        : undefined,
    ),
    orderBy: [desc(PostRevisionsTable.createdAt), desc(PostRevisionsTable.id)],
  });
}

/**
 * The latest publish revision of each Post, which holds the draft as it was
 * published. A Post that was never published through a revision has none.
 */
export async function findLatestPublishRevisions(
  db: DB,
  postIds: Array<number>,
) {
  if (postIds.length === 0) return [];
  return await db.query.PostRevisionsTable.findMany({
    where: inArray(
      PostRevisionsTable.id,
      db
        .select({ id: max(PostRevisionsTable.id) })
        .from(PostRevisionsTable)
        .where(
          and(
            eq(PostRevisionsTable.reason, "publish"),
            inArray(PostRevisionsTable.postId, postIds),
          ),
        )
        .groupBy(PostRevisionsTable.postId),
    ),
  });
}

export async function trimAutoRevisions(
  db: DB,
  postId: number,
  options: {
    keep: number;
  },
) {
  const revisions = await db.query.PostRevisionsTable.findMany({
    where: and(
      eq(PostRevisionsTable.postId, postId),
      eq(PostRevisionsTable.reason, "auto"),
    ),
    columns: {
      id: true,
    },
    orderBy: [desc(PostRevisionsTable.createdAt), desc(PostRevisionsTable.id)],
  });

  const staleRevisionIds = revisions
    .slice(options.keep)
    .map((revision) => revision.id);
  if (staleRevisionIds.length === 0) {
    return;
  }

  await db
    .delete(PostRevisionsTable)
    .where(inArray(PostRevisionsTable.id, staleRevisionIds));
}

/**
 * Writes `snapshot` into the draft after saving `backupRevision`, in one
 * batch. With `saveToken`, nothing is written unless the Post still carries
 * it: the update is conditional, and the other statements apply only once it
 * has replaced the token. A Tag or Category deleted since the snapshot was
 * taken is left out. Returns null when no Post was written.
 */
export async function restorePostSnapshot(
  db: DB,
  data: {
    postId: number;
    snapshot: PostRevisionSnapshot;
    backupRevision: {
      reason: PostRevisionReason;
      snapshotJson: PostRevisionSnapshot;
      snapshotHash: string;
      restoredFromRevisionId?: number | null;
    };
    /** Replaces the Post's published fingerprint, when given. */
    publishedFingerprint?: string;
    saveToken?: string;
  },
) {
  const tagIds = normalizeTagIds(data.snapshot.tagIds);
  // Set here rather than by $onUpdate so the restore hands out its own token,
  // even if another write lands before the Post is read back.
  const saveToken = newSaveToken();
  const restored = sql`EXISTS (SELECT 1 FROM posts WHERE id = ${data.postId} AND save_token = ${saveToken})`;

  /**
   * One transaction, in this order: update the draft, keep the previous draft
   * as a Revision, replace its Tags. Every later statement is gated on
   * `restored`, so nothing is written when the update matched no row.
   *
   * The backup insert names its columns instead of going through
   * `insert().select()`: that helper lists `id` too and passes NULL, which
   * SQLite's INTEGER PRIMARY KEY turns into an autoincrement but PostgreSQL
   * rejects as a NOT NULL violation. Leaving the column out lets the sequence
   * fill it.
   */
  const restoredRow = await db.transaction(async (tx) => {
    const updated = await tx
      .update(PostsTable)
      .set({
        title: data.snapshot.title,
        summary: data.snapshot.summary,
        slug: data.snapshot.slug,
        slugKey: keyForWrite(
          PostsTable.slug,
          PostsTable.slugKey,
          data.snapshot.slug,
        ),
        publishedAt: data.snapshot.publishedAt
          ? new Date(data.snapshot.publishedAt)
          : null,
        contentJson: data.snapshot.contentJson,
        coverMediaId: data.snapshot.coverMediaId ?? null,
        categoryId:
          data.snapshot.categoryId === null
            ? null
            : sql`(SELECT id FROM categories WHERE id = ${data.snapshot.categoryId})`,
        draftFingerprint: null,
        ...(data.publishedFingerprint !== undefined && {
          publishedFingerprint: data.publishedFingerprint,
        }),
        saveToken,
      })
      .where(
        and(
          eq(PostsTable.id, data.postId),
          data.saveToken === undefined
            ? undefined
            : eq(PostsTable.saveToken, data.saveToken),
        ),
      )
      .returning({ id: PostsTable.id });

    if (updated.length === 0) return null;

    await tx.execute(sql`
      insert into post_revisions (post_id, reason, snapshot_json, snapshot_hash, restored_from_revision_id, created_at)
      select ${data.postId}, ${data.backupRevision.reason},
             ${JSON.stringify(data.backupRevision.snapshotJson)}::jsonb,
             ${data.backupRevision.snapshotHash},
             ${data.backupRevision.restoredFromRevisionId ?? null}::integer,
             now()
       where ${restored}
    `);

    await tx
      .delete(PostTagsTable)
      .where(and(eq(PostTagsTable.postId, data.postId), restored));

    if (tagIds.length > 0) {
      await tx.execute(sql`
        insert into post_tags (post_id, tag_id)
        select ${data.postId}, id from tags
         where id in (${sql.join(
           tagIds.map((tagId) => sql`${tagId}`),
           sql`, `,
         )}) and ${restored}
      `);
    }

    return updated[0];
  });

  if (!restoredRow) return null;
  const post = await findPostById(db, data.postId);
  return post && { ...post, saveToken };
}

export async function deletePostRevisions(
  db: DB,
  postId: number,
  revisionIds: Array<number>,
) {
  if (revisionIds.length === 0) {
    return [];
  }

  return await db
    .delete(PostRevisionsTable)
    .where(
      and(
        eq(PostRevisionsTable.postId, postId),
        inArray(PostRevisionsTable.id, revisionIds),
      ),
    )
    .returning({
      id: PostRevisionsTable.id,
    });
}

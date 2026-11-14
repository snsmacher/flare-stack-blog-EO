import { and, desc, eq, inArray, max, sql } from "drizzle-orm";
import {
  MediaTable,
  POST_REVISION_REASONS,
  type PostRevisionReason,
  type PostRevisionSnapshot,
  PostRevisionMediaTable,
  PostRevisionsTable,
  newSaveToken,
  PostsTable,
  PostTagsTable,
} from "@/lib/db/schema";
import { keyForWrite } from "@/lib/db/unique-keys";
import { extractAllImageKeys } from "@/features/posts/utils/content";
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

  await linkRevisionMedia(db, revision.id, data.snapshotJson);
  return revision;
}

/**
 * Records which Media a revision's snapshot uses — body images and Cover
 * alike — the job a D1 trigger used to do until the PostgreSQL baseline
 * migration lost it. Without these rows, a Media only an older revision still
 * shows counts as unreferenced and `deleteMediaIfUnused` removes it.
 */
async function linkRevisionMedia(
  db: Pick<DB, "select" | "insert">,
  revisionId: number,
  snapshot: PostRevisionSnapshot,
) {
  const keys = extractAllImageKeys(snapshot.contentJson);
  const bodyMediaIds =
    keys.length > 0
      ? (
          await db
            .select({ id: MediaTable.id })
            .from(MediaTable)
            .where(inArray(MediaTable.key, keys))
        ).map((row) => row.id)
      : [];
  const mediaIds = [
    ...new Set([
      ...bodyMediaIds,
      ...(snapshot.coverMediaId != null ? [snapshot.coverMediaId] : []),
    ]),
  ];
  if (mediaIds.length === 0) return;

  await db
    .insert(PostRevisionMediaTable)
    .values(mediaIds.map((mediaId) => ({ revisionId, mediaId })))
    .onConflictDoNothing();
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

/**
 * 修订快照的滚动保留配额——改这里就能调保留份数与字节上限。
 *
 * `snapshot_json` 是整篇 TipTap JSON（jsonb），ProseMirror 比等价 HTML 冗长
 * 3～5 倍，一篇带大量代码块的长文单条就能几百 KB；免费版 PostgreSQL 总共
 * 1 GB 且全库共享，所以 publish / restore_backup 也要有上界，不能只裁 auto。
 * 每个写入点插入后按 (post_id, reason) 裁一轮：先按条数保留最新
 * `count[reason]` 条，再按「从最新到自己」的累计字节裁，超过
 * `bytesPerPostReason` 的更旧行继续删——但永远至少保留 1 条（publish 的
 * 最新一条是「未发布改动」的对比基线，见 `findLatestPublishRevisions`）。
 */
export const REVISION_RETENTION = {
  count: {
    auto: 2,
    publish: 2,
    restore_backup: 2,
  },
  bytesPerPostReason: 256 * 1024,
} satisfies {
  count: Record<PostRevisionReason, number>;
  bytesPerPostReason: number;
};

/**
 * 从新到旧走一遍保留规则，返回幸存的条数——裁剪 SQL 的可执行基准，单测
 * 按它断言；改 SQL 的保留谓词时先让这里的用例过。`bytes` 是每条快照的
 * octet_length，从最新一条开始排。
 */
export function countRevisionsToKeep(
  bytesNewestFirst: Array<number>,
  count: number,
  byteLimit: number,
): number {
  let kept = 0;
  let cumulative = 0;
  const quota = Math.max(1, count);
  for (let i = 0; i < bytesNewestFirst.length && kept < quota; i += 1) {
    cumulative += bytesNewestFirst[i]!;
    // 第 1 条无条件保留；其余在配额内且累计字节不超上限才留。
    // 累计和单调递增，一旦越界，更旧的只会更大，直接停。
    if (i === 0 || cumulative <= byteLimit) kept = i + 1;
    else break;
  }
  return kept;
}

/**
 * 一个 (post_id, reason) 的裁剪语句：单条 DELETE 自算保留集，没有
 * 「先查 id 再删」的并发窗口。保留谓词与 `countRevisionsToKeep` 一致：
 * 最新一条（rn = 1）无条件保留，其余在前 `count` 条里、且从最新到自己的
 * 累计字节不超过上限才留。`id desc` 兜底同一毫秒内的排序稳定性。
 */
export function trimPostRevisionStatement(
  db: Pick<DB, "delete">,
  postId: number,
  reason: PostRevisionReason,
  retention: typeof REVISION_RETENTION = REVISION_RETENTION,
) {
  return db
    .delete(PostRevisionsTable)
    .where(
      and(
        eq(PostRevisionsTable.postId, postId),
        eq(PostRevisionsTable.reason, reason),
        sql`id not in (
          select id from (
            select id,
                   row_number() over (order by created_at desc, id desc) as rn,
                   sum(octet_length(snapshot_json::text)) over (order by created_at desc, id desc) as bytes_from_newest
              from post_revisions
             where post_id = ${postId} and reason = ${reason}
          ) ranked
          where rn = 1 or (rn <= ${retention.count[reason]} and bytes_from_newest <= ${retention.bytesPerPostReason})
        )`,
      ),
    );
}

/** 插入后滚一轮：三个 reason 各一条 DELETE，放进 `db.batch` 的事务里跑完。 */
export async function trimPostRevisions(db: DB, postId: number) {
  await db.batch(
    POST_REVISION_REASONS.map((reason) =>
      trimPostRevisionStatement(db, postId, reason),
    ),
  );
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

    const backup = await tx.execute<{ id: number }>(sql`
      insert into post_revisions (post_id, reason, snapshot_json, snapshot_hash, restored_from_revision_id, created_at)
      select ${data.postId}, ${data.backupRevision.reason},
             ${JSON.stringify(data.backupRevision.snapshotJson)}::jsonb,
             ${data.backupRevision.snapshotHash},
             ${data.backupRevision.restoredFromRevisionId ?? null}::integer,
             now()
       where ${restored}
       returning id
    `);
    const backupRevisionId = backup.rows[0]?.id;
    if (backupRevisionId != null) {
      await linkRevisionMedia(tx, backupRevisionId, data.backupRevision.snapshotJson);
    }

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

    // 备份修订只在恢复/丢弃时增长，裁剪放在同一事务的最后。注意
    // restored_from_revision_id 没有外键约束：配额裁掉的来源行会留下悬空
    // id 且 DTO 照常带出——当前 UI 不读它，属已知取舍，别当 bug。
    await trimPostRevisionStatement(tx, data.postId, "restore_backup");

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

import { eq, gt, inArray } from "drizzle-orm";
import {
  SearchDocumentsTable,
  SearchIndexMetaTable,
} from "@/lib/db/schema/search.table";

export type SearchDocumentRow = {
  postId: number;
  slug: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
};

/** A statement that writes one document over whatever the Post already has. */
function upsertDocumentStatement(
  db: DB,
  document: SearchDocumentRow & { tokens: string },
) {
  return db
    .insert(SearchDocumentsTable)
    .values({
      postId: document.postId,
      slug: document.slug,
      title: document.title,
      summary: document.summary,
      content: document.content,
      tags: document.tags,
      tokens: document.tokens,
    })
    .onConflictDoUpdate({
      target: SearchDocumentsTable.postId,
      set: {
        slug: document.slug,
        title: document.title,
        summary: document.summary,
        content: document.content,
        tags: document.tags,
        tokens: document.tokens,
      },
    });
}

export async function upsertSearchDocument(
  db: DB,
  document: SearchDocumentRow & { tokens: string },
) {
  // The document and the version move in one transaction: written apart, a
  // failure between them leaves every instance serving the old index until
  // some later bump — a freshly published Post would stay unsearchable.
  await db.batch([
    upsertDocumentStatement(db, document),
    bumpSearchIndexVersionStatement(db, newSearchIndexVersion()),
  ]);
}

/**
 * Removes the Post's document and moves the index version in the same
 * transaction. The version moves even when nothing was indexed — one extra
 * reload costs less than a half-applied delete would.
 */
export async function deleteSearchDocument(db: DB, postId: number) {
  await db.batch([
    db.delete(SearchDocumentsTable).where(eq(SearchDocumentsTable.postId, postId)),
    bumpSearchIndexVersionStatement(db, newSearchIndexVersion()),
  ]);
}

// Each upsert carries 7 bound values; this size bounds one statement's
// parameter count, not the batch's — `db.batch` runs all its statements in
// one transaction, however many there are.
const WRITE_BATCH = 25;

/**
 * Writes the given documents over those already indexed and removes the
 * documents of `removedPostIds`, in one transaction. The index version moves
 * once, and only when something was given.
 */
export async function applySearchDocuments(
  db: DB,
  changes: {
    documents: Array<SearchDocumentRow & { tokens: string }>;
    removedPostIds: Array<number>;
  },
) {
  const { documents, removedPostIds } = changes;
  if (documents.length === 0 && removedPostIds.length === 0) return;

  const statements: Array<unknown> = [];
  for (let i = 0; i < documents.length; i += WRITE_BATCH) {
    for (const document of documents.slice(i, i + WRITE_BATCH)) {
      statements.push(upsertDocumentStatement(db, document));
    }
  }
  for (let i = 0; i < removedPostIds.length; i += WRITE_BATCH) {
    statements.push(
      db.delete(SearchDocumentsTable).where(
        inArray(
          SearchDocumentsTable.postId,
          removedPostIds.slice(i, i + WRITE_BATCH),
        ),
      ),
    );
  }
  // Documents, removals and the version bump all commit together: a failure
  // midway rolls the whole set back instead of leaving instances serving a
  // stale index over half-updated rows.
  statements.push(
    bumpSearchIndexVersionStatement(db, newSearchIndexVersion()),
  );
  await db.batch(statements);
}

const INSERT_BATCH = 10;

export async function replaceSearchDocuments(
  db: DB,
  documents: Array<SearchDocumentRow & { tokens: string }>,
) {
  const statements: Array<unknown> = [db.delete(SearchDocumentsTable)];
  for (let i = 0; i < documents.length; i += INSERT_BATCH) {
    for (const document of documents.slice(i, i + INSERT_BATCH)) {
      statements.push(upsertDocumentStatement(db, document));
    }
  }
  // The delete, every insert and the version bump share one transaction: a
  // concurrent rebuild or a failure midway can no longer leave an empty or
  // half-filled table under an unmoved version — that combination would make
  // fresh instances cache an empty index and site-wide search return nothing.
  statements.push(
    bumpSearchIndexVersionStatement(db, newSearchIndexVersion()),
  );
  await db.batch(statements);
}

/**
 * One page of index documents, in post_id order after `afterPostId`. The
 * engine loads the index page by page instead of one full-table query, so a
 * rebuild never holds the whole raw result set and the growing index at the
 * same time (see `search/engine.ts`).
 */
export async function readSearchDocumentPage(
  db: DB,
  afterPostId: number,
  limit: number,
): Promise<SearchDocumentRow[]> {
  const rows = await db
    .select({
      postId: SearchDocumentsTable.postId,
      slug: SearchDocumentsTable.slug,
      title: SearchDocumentsTable.title,
      summary: SearchDocumentsTable.summary,
      content: SearchDocumentsTable.content,
      tags: SearchDocumentsTable.tags,
    })
    .from(SearchDocumentsTable)
    .where(gt(SearchDocumentsTable.postId, afterPostId))
    .orderBy(SearchDocumentsTable.postId)
    .limit(limit);

  return rows.map((row) => ({
    ...row,
    tags: Array.isArray(row.tags) ? row.tags : [],
  }));
}

export async function readSearchIndexVersion(db: DB) {
  const [row] = await db
    .select({ version: SearchIndexMetaTable.version })
    .from(SearchIndexMetaTable)
    .where(eq(SearchIndexMetaTable.id, 1))
    .limit(1);
  return row?.version ?? "0";
}

/** The meta upsert that moves the version, as one `db.batch` statement. */
function bumpSearchIndexVersionStatement(db: DB, version: string) {
  return db
    .insert(SearchIndexMetaTable)
    .values({ id: 1, version })
    .onConflictDoUpdate({
      target: SearchIndexMetaTable.id,
      set: { version },
    });
}

function newSearchIndexVersion() {
  // Unique, not just a timestamp: the version is what tells a running instance
  // its in-memory index is stale, so two writes inside the same millisecond
  // must still produce two different versions — otherwise the second one
  // leaves every instance serving the index from before the first.
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

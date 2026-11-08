import { eq, inArray } from "drizzle-orm";
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

export async function upsertSearchDocument(
  db: DB,
  document: SearchDocumentRow & { tokens: string },
) {
  await db
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
  await bumpSearchIndexVersion(db);
}

/**
 * Removes the Post's document. The index version moves only when a document
 * was there, so deleting a Post that was never indexed leaves search caches be.
 */
export async function deleteSearchDocument(db: DB, postId: number) {
  const deleted = await db
    .delete(SearchDocumentsTable)
    .where(eq(SearchDocumentsTable.postId, postId))
    .returning({ postId: SearchDocumentsTable.postId });
  if (deleted.length > 0) await bumpSearchIndexVersion(db);
}

// Each upsert carries 7 bound values and D1 caps a query at 100, so a delete
// of this many ids is safe; the same size bounds one batch of upserts.
const WRITE_BATCH = 25;

/**
 * Writes the given documents over those already indexed and removes the
 * documents of `removedPostIds`, in batched D1 writes. The index version moves
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
  for (let i = 0; i < documents.length; i += WRITE_BATCH) {
    const [first, ...rest] = documents
      .slice(i, i + WRITE_BATCH)
      .map((document) =>
        db
          .insert(SearchDocumentsTable)
          .values(document)
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
          }),
      );
    await db.batch([first, ...rest]);
  }
  for (let i = 0; i < removedPostIds.length; i += WRITE_BATCH) {
    await db
      .delete(SearchDocumentsTable)
      .where(
        inArray(
          SearchDocumentsTable.postId,
          removedPostIds.slice(i, i + WRITE_BATCH),
        ),
      );
  }
  if (documents.length > 0 || removedPostIds.length > 0) {
    await bumpSearchIndexVersion(db);
  }
}

const INSERT_BATCH = 10;

export async function replaceSearchDocuments(
  db: DB,
  documents: Array<SearchDocumentRow & { tokens: string }>,
) {
  await db.delete(SearchDocumentsTable);
  for (let i = 0; i < documents.length; i += INSERT_BATCH) {
    await db
      .insert(SearchDocumentsTable)
      .values(documents.slice(i, i + INSERT_BATCH));
  }
  await bumpSearchIndexVersion(db);
}

/**
 * Every document in the index, oldest Post first. Read in one query, because
 * the search engine keeps them in memory and only reloads when the index
 * version moves (see `search/engine.ts`); searching narrows this set in the
 * process rather than in the database.
 */
export async function readSearchDocuments(
  db: DB,
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
    .orderBy(SearchDocumentsTable.postId);

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

async function bumpSearchIndexVersion(db: DB) {
  // Unique, not just a timestamp: the version is what tells a running instance
  // its in-memory index is stale, so two writes inside the same millisecond
  // must still produce two different versions — otherwise the second one
  // leaves every instance serving the index from before the first.
  const version = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  await db
    .insert(SearchIndexMetaTable)
    .values({ id: 1, version })
    .onConflictDoUpdate({
      target: SearchIndexMetaTable.id,
      set: { version },
    });
}

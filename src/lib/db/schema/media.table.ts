import { createdAt, id } from "./helper";
import { PostRevisionsTable } from "./post-revisions.table";
import { PostsTable } from "./posts.table";
import { pgTable, text, integer, index, primaryKey } from "drizzle-orm/pg-core";

export const MediaTable = pgTable(
  "media",
  {
    id,
    key: text().notNull().unique(),
    url: text().notNull(),
    fileName: text("file_name").notNull(),
    width: integer("width"),
    height: integer("height"),
    mimeType: text("mime_type").notNull(),
    sizeInBytes: integer("size_in_bytes").notNull(),
    createdAt,
  },
  (table) => [index("created_at_idx_media").on(table.createdAt)],
);

export const PostMediaTable = pgTable(
  "post_media",
  {
    postId: integer("post_id")
      .notNull()
      .references(() => PostsTable.id, { onDelete: "cascade" }),
    mediaId: integer("media_id")
      .notNull()
      .references(() => MediaTable.id, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.postId, table.mediaId] })],
);

/**
 * The Media each Post Revision uses, body images and Post Cover alike. The
 * write paths fill it themselves — `insertPostRevision` and the backup insert
 * inside `restorePostSnapshot` (the D1 trigger that did this was lost in the
 * PostgreSQL baseline migration); deleting the revision drops its rows.
 */
export const PostRevisionMediaTable = pgTable(
  "post_revision_media",
  {
    revisionId: integer("revision_id")
      .notNull()
      .references(() => PostRevisionsTable.id, { onDelete: "cascade" }),
    mediaId: integer("media_id")
      .notNull()
      .references(() => MediaTable.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({ columns: [table.revisionId, table.mediaId] }),
    index("post_revision_media_media_idx").on(table.mediaId),
  ],
);

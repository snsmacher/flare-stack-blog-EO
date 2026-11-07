import { user } from "./auth.table";
import { createdAt, id, updatedAt } from "./helper";
import { PostsTable } from "./posts.table";
import type { AnyPgColumn } from "drizzle-orm/pg-core";
import {
  pgTable,
  text,
  integer,
  timestamp,
  index,
  primaryKey,
} from "drizzle-orm/pg-core";

export const COMMENT_STATUSES = ["published", "deleted"] as const;

export const CommentsTable = pgTable(
  "comments",
  {
    id,
    content: text(),
    rootId: integer("root_id").references(
      (): AnyPgColumn => CommentsTable.id,
      {
        onDelete: "cascade",
      },
    ),
    replyToCommentId: integer("reply_to_comment_id").references(
      (): AnyPgColumn => CommentsTable.id,
      { onDelete: "set null" },
    ),
    status: text("status", { enum: COMMENT_STATUSES })
      .notNull()
      .default("published"),

    postId: integer("post_id")
      .notNull()
      .references(() => PostsTable.id, { onDelete: "cascade" }),
    userId: text("user_id").references(() => user.id, { onDelete: "set null" }),
    /**
     * When an Admin dealt with the Comment, by replying or by marking it
     * handled; it then no longer waits for a reply. Admin-only.
     */
    handledAt: timestamp("handled_at", { withTimezone: true, mode: "date" }),

    createdAt,
    updatedAt,
  },
  (table) => [
    index("comments_post_root_created_idx").on(
      table.postId,
      table.rootId,
      table.createdAt,
    ),
    index("comments_user_created_idx").on(table.userId, table.createdAt),
    index("comments_status_created_idx").on(table.status, table.createdAt),
    index("comments_global_created_idx").on(table.createdAt),
  ],
);

export const EMAIL_UNSUBSCRIBE_TYPES = ["reply_notification"] as const;

export const EmailUnsubscriptionsTable = pgTable(
  "email_unsubscriptions",
  {
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    type: text("type", { enum: EMAIL_UNSUBSCRIBE_TYPES }).notNull(),
    createdAt,
  },
  (table) => [primaryKey({ columns: [table.userId, table.type] })],
);

// ==================== types ====================
export type Comment = typeof CommentsTable.$inferSelect;
export type CommentStatus = (typeof COMMENT_STATUSES)[number];
export type EmailUnsubscription = typeof EmailUnsubscriptionsTable.$inferSelect;
export type EmailUnsubscribeType = (typeof EMAIL_UNSUBSCRIBE_TYPES)[number];

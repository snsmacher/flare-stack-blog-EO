import { pgTable, text, integer, jsonb } from "drizzle-orm/pg-core";

export const SearchDocumentsTable = pgTable("search_documents", {
  postId: integer("post_id").primaryKey(),
  slug: text().notNull(),
  title: text().notNull(),
  summary: text().notNull(),
  content: text().notNull(),
  tags: jsonb().$type<string[]>().notNull(),
  tokens: text().notNull(),
});

export const SearchIndexMetaTable = pgTable("search_index_meta", {
  id: integer().primaryKey(),
  version: text().notNull(),
});

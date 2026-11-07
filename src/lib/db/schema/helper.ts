import { sql } from "drizzle-orm";
import { timestamp, serial } from "drizzle-orm/pg-core";

export const createdAt = timestamp("created_at", {
  withTimezone: true,
  mode: "date",
})
  .notNull()
  .default(sql`now()`);

export const updatedAt = timestamp("updated_at", {
  withTimezone: true,
  mode: "date",
})
  .notNull()
  .default(sql`now()`)
  .$onUpdate(() => new Date());

export const id = serial("id").primaryKey();

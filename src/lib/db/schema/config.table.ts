import { sql } from "drizzle-orm";
import type { StoredSystemConfig } from "@/features/config/config.storage";
import { updatedAt } from "./helper";
import {
  pgTable,
  integer,
  jsonb,
  check,
} from "drizzle-orm/pg-core";

export const SystemConfigTable = pgTable(
  "system_config",
  {
    id: integer("id").primaryKey().notNull().default(1),
    configJson: jsonb("config_json")
      .$type<StoredSystemConfig>()
      .notNull(),
    siteRevision: integer("site_revision").notNull().default(0),
    notificationRevision: integer("notification_revision").notNull().default(0),
    updatedAt,
  },
  (table) => [
    check("system_config_singleton", sql`${table.id} = 1`),
    check(
      "system_config_revisions",
      sql`${table.siteRevision} >= 0 AND ${table.notificationRevision} >= 0`,
    ),
  ],
);

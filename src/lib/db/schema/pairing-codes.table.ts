import { user } from "./auth.table";
import { createdAt } from "./helper";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Each Admin's current Pairing Code, one row per Admin: generating a code
 * replaces the row, so an older code stops working. Only the code's hash is
 * stored. Once exchanged, the row records the agent and the API Key it got.
 */
export const PairingCodesTable = pgTable("pairing_codes", {
  userId: text("user_id")
    .primaryKey()
    .references(() => user.id, { onDelete: "cascade" }),
  codeHash: text("code_hash").notNull().unique(),
  expiresAt: timestamp("expires_at", { withTimezone: true, mode: "date" }).notNull(),
  cancelledAt: timestamp("cancelled_at", { withTimezone: true, mode: "date" }),
  pairedAt: timestamp("paired_at", { withTimezone: true, mode: "date" }),
  agentName: text("agent_name"),
  apiKeyId: text("api_key_id"),
  createdAt,
});

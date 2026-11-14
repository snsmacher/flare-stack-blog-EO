import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createAuthConfig } from "@/lib/auth/auth.config";

const baseURL = process.env.BETTER_AUTH_URL || "http://localhost:3000";

export const auth = betterAuth({
  ...createAuthConfig(),
  baseURL,
  secret: process.env.BETTER_AUTH_SECRET || "dev-secret-for-schema-generation",
  database: drizzleAdapter(
    {},
    {
      // The real runtime uses PostgreSQL (src/lib/auth/auth.server.ts);
      // generating with the sqlite dialect would overwrite auth.table.ts
      // with sqliteTable definitions.
      provider: "pg",
    },
  ),
});

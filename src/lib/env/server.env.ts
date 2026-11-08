import { z } from "zod";

const domainRegex = /^([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;
const localeSchema = z.enum(["zh", "en"]);
const domainSchema = z
  .string()
  .regex(domainRegex, "Must be a valid domain (e.g., www.example.com)");

const serverEnvSchema = z.object({
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url(),
  LOCALE: localeSchema.catch("zh"),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  DOMAIN: domainSchema,
  ENVIRONMENT: z.enum(["dev", "prod", "test"]).optional(),
  UMAMI_WEBSITE_ID: z.string().optional(),
  UMAMI_SRC: z.string().optional(),
  UMAMI_API_URL: z.string().optional(),
  UMAMI_API_KEY: z.string().optional(),
  UMAMI_USERNAME: z.string().optional(),
  UMAMI_PASSWORD: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  GITHUB_TOKEN: z.string().optional(),
  // "owner/repo"。填了才会去比对 release，不填就当作不做更新检查：
  // 本仓库独立发版，上游 3.x 与这里 1.x 的版本号没有可比性。
  UPDATE_CHECK_REPO: z.string().optional(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export function serverEnv(env: Env) {
  // `nodeEnv` snapshots `process.env` once, when its module loads, while the
  // EdgeOne container boots with an empty one and only receives the platform's
  // variables on the first invocation. Reading `process.env` again here keeps
  // optional settings such as UMAMI_SRC visible even when the build did not
  // bake them; keys the caller actually holds still win over it.
  const held = Object.fromEntries(
    Object.entries(env).filter(([, value]) => value !== undefined),
  );
  const result = serverEnvSchema.safeParse({ ...process.env, ...held });

  if (!result.success) {
    console.error(
      JSON.stringify({
        message: "Invalid environment variables",
        error: z.treeifyError(result.error),
      }),
    );
    throw new Error("Invalid environment variables");
  }

  return result.data;
}

export const isNotInProduction = (env: Env) =>
  serverEnv(env).ENVIRONMENT === "test" || serverEnv(env).ENVIRONMENT === "dev";

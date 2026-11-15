import { z } from "zod";
import type {
  PostPopularityMetric,
  PostPopularityWindow,
} from "@/features/post-popularity/post-popularity";
import { ms } from "@/lib/duration";
import type { ServerEnv } from "@/lib/env/server.env";

const CLOUD_API_URL = "https://api.umami.is/v1";
const REQUEST_TIMEOUT = ms("10s");
const DEFAULT_PAGE_SIZE = 500;

const LoginResponseSchema = z.object({ token: z.string().min(1) });
const PageviewsSchema = z
  .union([
    z.number(),
    z
      .string()
      .trim()
      .regex(/^\d+(?:\.\d+)?$/)
      .transform(Number),
  ])
  .pipe(z.number().nonnegative());
const ExpandedMetricSchema = z.object({
  name: z.string(),
  pageviews: PageviewsSchema,
});
const ExpandedMetricsSchema = z.array(ExpandedMetricSchema);

/**
 * Where the API is and how a request proves itself. Umami Cloud and, since
 * v3.4.0, a self-hosted instance take an account API key; a self-hosted
 * instance also takes the token of a login with user name and password, the
 * only way before v3.4.0.
 */
export type UmamiApiConfig =
  | {
      auth: "api-key";
      apiUrl: string;
      websiteId: string;
      apiKey: string;
    }
  | {
      auth: "password";
      apiUrl: string;
      websiteId: string;
      username: string;
      password: string;
    };

type UmamiEnv = Partial<
  Pick<
    ServerEnv,
    | "UMAMI_WEBSITE_ID"
    | "UMAMI_SRC"
    | "UMAMI_API_URL"
    | "UMAMI_API_KEY"
    | "UMAMI_USERNAME"
    | "UMAMI_PASSWORD"
  >
>;

function required(value: string | undefined, name: string): string {
  const normalized = value?.trim();
  if (!normalized) throw new Error(`Missing ${name}`);
  return normalized;
}

function normalizeApiUrl(value: string): string {
  const url = new URL(value);
  return url.toString().replace(/\/$/, "");
}

/** The API a self-hosted instance serves under its own address. */
function instanceApiUrl(serviceUrl: string): string {
  return normalizeApiUrl(new URL("/api", serviceUrl).toString());
}

/**
 * Whether `UMAMI_SRC` names an instance of the site's own. Umami Cloud serves
 * its tracker from `cloud.umami.is` and its regional hosts, and its API from
 * another host, so those, no address and one that does not parse are Cloud.
 */
function isOwnInstance(serviceUrl: string | undefined): serviceUrl is string {
  if (!serviceUrl || !URL.canParse(serviceUrl)) return false;
  const host = new URL(serviceUrl).hostname;
  return host !== "umami.is" && !host.endsWith(".umami.is");
}

export function resolveUmamiApiConfig(env: UmamiEnv): UmamiApiConfig {
  const websiteId = required(env.UMAMI_WEBSITE_ID, "UMAMI_WEBSITE_ID");
  const apiKey = env.UMAMI_API_KEY?.trim();
  const username = env.UMAMI_USERNAME?.trim();
  const password = env.UMAMI_PASSWORD?.trim();
  const serviceUrl = env.UMAMI_SRC?.trim();
  const configuredApiUrl = env.UMAMI_API_URL?.trim();
  const hasPassword = !!username || !!password;

  if (apiKey && hasPassword) {
    throw new Error(
      "UMAMI_API_KEY and UMAMI_USERNAME / UMAMI_PASSWORD are both set: keep one of the two",
    );
  }

  if (apiKey) {
    return {
      auth: "api-key",
      // Without this a self-hosted instance's key would go to Umami Cloud.
      apiUrl: configuredApiUrl
        ? normalizeApiUrl(configuredApiUrl)
        : isOwnInstance(serviceUrl)
          ? instanceApiUrl(serviceUrl)
          : CLOUD_API_URL,
      websiteId,
      apiKey,
    };
  }

  if (hasPassword) {
    const resolvedUsername = required(username, "UMAMI_USERNAME");
    const resolvedPassword = required(password, "UMAMI_PASSWORD");
    return {
      auth: "password",
      apiUrl: configuredApiUrl
        ? normalizeApiUrl(configuredApiUrl)
        : instanceApiUrl(required(serviceUrl, "UMAMI_SRC")),
      websiteId,
      username: resolvedUsername,
      password: resolvedPassword,
    };
  }

  throw new Error("Umami API credentials are not configured");
}

async function assertOk(response: Response, operation: string) {
  if (response.ok) return;
  const body = await response.text().catch(() => "");
  throw new Error(
    `${operation} failed: ${response.status} ${response.statusText}${body ? ` - ${body.slice(0, 300)}` : ""}`,
  );
}

export function createUmamiClient({
  fetcher = fetch,
  pageSize = DEFAULT_PAGE_SIZE,
}: {
  fetcher?: typeof fetch;
  pageSize?: number;
} = {}) {
  async function getAuthorization(config: UmamiApiConfig): Promise<string> {
    if (config.auth === "api-key") return `Bearer ${config.apiKey}`;

    const response = await fetcher(`${config.apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: config.username,
        password: config.password,
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT),
    });
    await assertOk(response, "Umami login");
    const { token } = LoginResponseSchema.parse(await response.json());
    return `Bearer ${token}`;
  }

  async function getPathMetrics(
    config: UmamiApiConfig,
    window: PostPopularityWindow,
  ): Promise<PostPopularityMetric[]> {
    const authorization = await getAuthorization(config);
    const metrics: PostPopularityMetric[] = [];
    let offset = 0;

    while (true) {
      const url = new URL(
        `${config.apiUrl}/websites/${encodeURIComponent(config.websiteId)}/metrics/expanded`,
      );
      url.searchParams.set("startAt", String(window.startAt));
      url.searchParams.set("endAt", String(window.endAt));
      url.searchParams.set("type", "path");
      url.searchParams.set("limit", String(pageSize));
      url.searchParams.set("offset", String(offset));

      const response = await fetcher(url, {
        headers: {
          Accept: "application/json",
          Authorization: authorization,
        },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT),
      });
      await assertOk(response, "Umami metrics request");
      const page = ExpandedMetricsSchema.parse(await response.json());
      metrics.push(
        ...page.map((metric) => ({
          path: metric.name,
          pageviews: metric.pageviews,
        })),
      );

      if (page.length < pageSize) return metrics;
      offset += pageSize;
    }
  }

  return { getPathMetrics };
}

export const umamiClient = createUmamiClient();

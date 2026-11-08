import * as kvStore from "@/features/cache/kv-store";
import type {
  ApplicationRelease,
  UpdateCheckResult,
} from "@/features/version/version.schema";
import {
  ApplicationReleaseSchema,
  GitHubReleaseSchema,
  RunningApplicationReleaseVersionSchema,
  UpdateCheckResultSchema,
  VERSION_CACHE_KEYS,
} from "@/features/version/version.schema";
import { ms } from "@/lib/duration";
import { serverEnv } from "@/lib/env/server.env";
import type { Result } from "@/lib/errors";
import { err, ok } from "@/lib/errors";

// 比对哪个仓库的 release 由 UPDATE_CHECK_REPO 决定；不配置就不做检查。
const RELEASE_CACHE_TTL = "6h";
// A failed check is remembered so every admin page load does not retry it.
const FAILURE_CACHE_TTL = "30m";
const GITHUB_REQUEST_TIMEOUT = ms("5s");

type VersionContext = BaseContext & { executionCtx: ExecutionContext };
type FetchLatestRelease = (
  context: VersionContext,
) => Promise<ApplicationRelease>;

type CheckForUpdateResult = Result<
  UpdateCheckResult,
  { reason: "FETCH_FAILED" }
>;

export type VersionChecker = {
  check: (context: VersionContext) => Promise<CheckForUpdateResult>;
  refresh: (context: VersionContext) => Promise<CheckForUpdateResult>;
  /** The last checked release from the cache; never calls GitHub. */
  cached: (context: BaseContext) => Promise<UpdateCheckResult | null>;
};

export function createVersionChecker({
  getCurrentVersion,
  fetchLatestRelease,
}: {
  getCurrentVersion: () => string;
  fetchLatestRelease: FetchLatestRelease;
}): VersionChecker {
  async function resolve(
    context: VersionContext,
    refresh: boolean,
  ): Promise<CheckForUpdateResult> {
    try {
      const runningVersion =
        RunningApplicationReleaseVersionSchema.parse(getCurrentVersion());
      const fetcher = async () => {
        try {
          return ApplicationReleaseSchema.parse(
            await fetchLatestRelease(context),
          );
        } catch (error) {
          context.executionCtx.waitUntil(
            kvStore.put(context, VERSION_CACHE_KEYS.recentFailure, "1", {
              ttl: FAILURE_CACHE_TTL,
            }),
          );
          throw error;
        }
      };
      let latestRelease: ApplicationRelease;

      if (refresh) {
        latestRelease = await fetcher();
        context.executionCtx.waitUntil(
          kvStore.put(
            context,
            VERSION_CACHE_KEYS.latestRelease,
            JSON.stringify(latestRelease),
            { ttl: RELEASE_CACHE_TTL },
          ),
        );
      } else {
        latestRelease = await kvStore.remember(
          context,
          VERSION_CACHE_KEYS.latestRelease,
          ApplicationReleaseSchema,
          async () => {
            if (await kvStore.get(context, VERSION_CACHE_KEYS.recentFailure)) {
              throw new Error(
                "version check failed recently; refresh to retry",
              );
            }
            return await fetcher();
          },
          { ttl: RELEASE_CACHE_TTL },
        );
      }

      return ok(
        UpdateCheckResultSchema.parse({
          latestVersion: latestRelease.version,
          currentVersion: runningVersion,
          hasUpdate: isNewer(latestRelease.version, runningVersion),
          releaseUrl: latestRelease.releaseUrl,
        }),
      );
    } catch (error) {
      console.error(
        JSON.stringify({
          message: "version check failed",
          error: error instanceof Error ? error.message : String(error),
        }),
      );
      return err({ reason: "FETCH_FAILED" });
    }
  }

  async function cached(
    context: BaseContext,
  ): Promise<UpdateCheckResult | null> {
    const stored = await kvStore.get(context, VERSION_CACHE_KEYS.latestRelease);
    if (!stored) return null;
    try {
      const latestRelease = ApplicationReleaseSchema.parse(JSON.parse(stored));
      const runningVersion =
        RunningApplicationReleaseVersionSchema.parse(getCurrentVersion());
      return UpdateCheckResultSchema.parse({
        latestVersion: latestRelease.version,
        currentVersion: runningVersion,
        hasUpdate: isNewer(latestRelease.version, runningVersion),
        releaseUrl: latestRelease.releaseUrl,
      });
    } catch {
      return null;
    }
  }

  return {
    check: (context) => resolve(context, false),
    refresh: (context) => resolve(context, true),
    cached,
  };
}

/**
 * Reads the latest release through the API when a token is set, since the
 * unauthenticated API quota is shared by every Worker on the same egress IP.
 * Otherwise, or when the API fails, reads the tag that the release page
 * redirects to, which does not count against the API quota.
 */
export async function fetchLatestReleaseFromGitHub(
  githubToken: string | undefined,
  repo: string,
): Promise<ApplicationRelease> {
  if (githubToken) {
    try {
      return await fetchLatestReleaseFromApi(githubToken, repo);
    } catch (error) {
      console.warn(
        JSON.stringify({
          message: "github api release lookup failed, using release page",
          error: error instanceof Error ? error.message : String(error),
        }),
      );
    }
  }
  return await fetchLatestReleaseFromReleasePage(repo);
}

async function fetchLatestReleaseFromReleasePage(
  repo: string,
): Promise<ApplicationRelease> {
  const response = await fetch(`https://github.com/${repo}/releases/latest`, {
    method: "HEAD",
    redirect: "manual",
    headers: { "User-Agent": "flare-stack-blog" },
    signal: AbortSignal.timeout(GITHUB_REQUEST_TIMEOUT),
  });

  const location = response.headers.get("location");
  const releaseUrl = location ? new URL(location, "https://github.com") : null;
  const tag = releaseUrl
    ? /\/releases\/tag\/([^/]+)$/.exec(releaseUrl.pathname)?.[1]
    : undefined;
  if (!releaseUrl || !tag) {
    throw new Error(
      `GitHub release page did not redirect to a tag: ${response.status}`,
    );
  }

  return {
    version: decodeURIComponent(tag),
    releaseUrl: releaseUrl.toString(),
  };
}

async function fetchLatestReleaseFromApi(
  githubToken: string,
  repo: string,
): Promise<ApplicationRelease> {
  const headers: Record<string, string> = {
    "User-Agent": "flare-stack-blog",
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    Authorization: `Bearer ${githubToken}`,
  };

  const response = await fetch(
    `https://api.github.com/repos/${repo}/releases/latest`,
    {
      headers,
      signal: AbortSignal.timeout(GITHUB_REQUEST_TIMEOUT),
    },
  );

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(
      `GitHub API error: ${response.status} ${response.statusText}${body ? ` - ${body.slice(0, 500)}` : ""}`,
    );
  }

  const data = GitHubReleaseSchema.parse(await response.json());
  return {
    version: data.tag_name,
    releaseUrl: data.html_url,
  };
}

function isNewer(latest: string, current: string) {
  const latestParts = latest.slice(1).split(".").map(Number);
  const currentParts = current.split(".").map(Number);

  for (let i = 0; i < 3; i++) {
    const lPart = latestParts[i] ?? 0;
    const cPart = currentParts[i] ?? 0;
    if (lPart > cPart) return true;
    if (lPart < cPart) return false;
  }
  return false;
}

export const versionChecker = createVersionChecker({
  getCurrentVersion: () => __APP_VERSION__,
  fetchLatestRelease: (context) => {
    const env = serverEnv(context.env);
    if (!env.UPDATE_CHECK_REPO) {
      // 没配就当作检查不可用，checker 会把它记成一次失败并缓存半小时。
      return Promise.reject(new Error("UPDATE_CHECK_REPO is not configured"));
    }
    return fetchLatestReleaseFromGitHub(env.GITHUB_TOKEN, env.UPDATE_CHECK_REPO);
  },
});

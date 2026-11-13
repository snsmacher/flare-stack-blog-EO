import { createFileRoute } from "@tanstack/react-router";
import { serverEnv } from "@/lib/env/server.env";
import { umamiSendRequest } from "@/lib/http/umami-send";

/** Response headers a client may see from the statistics proxy. */
const PROXIED_RESPONSE_HEADERS = ["content-type", "cache-control"] as const;

/** 相对解析：UMAMI_SRC 带子路径（自托管在 /umami/ 下）时不会被丢掉。 */
function umamiUrl(umamiSrc: string, path: string): string {
  const base = umamiSrc.endsWith("/") ? umamiSrc : `${umamiSrc}/`;
  return new URL(path, base).toString();
}

function proxiedResponse(response: Response): Response {
  const headers = new Headers();
  for (const name of PROXIED_RESPONSE_HEADERS) {
    const value = response.headers.get(name);
    if (value) headers.set(name, value);
  }
  // Umami's answers are per-event, never shared-cacheable.
  if (!headers.has("Cache-Control")) headers.set("Cache-Control", "no-store");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export const Route = createFileRoute("/api/send")({
  server: {
    handlers: {
      ANY: async ({ request, context }) => {
        const umamiSrc = serverEnv(context.env).UMAMI_SRC;
        if (!umamiSrc) {
          return new Response("Not Found", { status: 404 });
        }
        const sendUrl = umamiUrl(umamiSrc, "api/send");
        const response = await fetch(await umamiSendRequest(request, sendUrl), {
          signal: AbortSignal.timeout(10_000),
        });
        return proxiedResponse(response);
      },
    },
  },
});

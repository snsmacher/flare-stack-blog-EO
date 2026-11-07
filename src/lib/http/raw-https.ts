import type { RawHttpResponse } from "./parse-http-response";

const MAX_RESPONSE_BYTES = 2 * 1024 * 1024;

/**
 * A GET that returns the raw status, headers and body.
 *
 * The Workers build opened a TLS socket for this, because Workers' `fetch()`
 * adds `cf-connecting-ip`, `cf-ipcountry` and `cf-worker` to every outbound
 * request and some sites refuse them: Bilibili answers 412 "request was
 * banned". Node adds no such headers, so plain `fetch` needs no workaround
 * here. The module stays because call sites depend on the raw response shape
 * (they parse Bilibili's HTML themselves) and because redirects must not be
 * followed automatically.
 */
export async function rawHttpsGet(
  url: URL,
  headers: Record<string, string> = {},
  timeoutMs = 8_000,
): Promise<RawHttpResponse> {
  if (url.protocol !== "https:") throw new Error("rawHttpsGet needs https");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      headers: { "Accept-Encoding": "identity", ...headers },
      redirect: "manual",
      signal: controller.signal,
    });

    const body = await response.text();
    if (body.length > MAX_RESPONSE_BYTES) throw new Error("Response too large");

    const normalized: Record<string, string> = {};
    response.headers.forEach((value, name) => {
      normalized[name.toLowerCase()] = value;
    });

    return { status: response.status, headers: normalized, body };
  } catch (error) {
    if (controller.signal.aborted) {
      throw new Error(`Timed out after ${timeoutMs} ms`);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

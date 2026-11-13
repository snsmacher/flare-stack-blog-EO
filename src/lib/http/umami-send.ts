import { clientIpFromHeaders } from "./rate-limit-key";

/**
 * The request the `/api/send` proxy forwards to Umami.
 *
 * Only a small allowlist of client headers travels: cookies, API keys and the
 * platform's own headers must not reach the statistics host.
 *
 * Umami prefers `payload.ip` in the body over any header, and with it set
 * looks the location up from that IP instead of the proxy's address. The
 * visitor's IP goes there; a body that is not an Umami event passes through
 * unchanged.
 */
const FORWARDED_HEADERS = [
  "content-type",
  "accept",
  "accept-language",
  "user-agent",
] as const;

export async function umamiSendRequest(
  request: Request,
  sendUrl: string,
): Promise<Request> {
  const headers = pickForwardedHeaders(request.headers);
  if (request.method !== "POST") {
    return new Request(sendUrl, { method: request.method, headers });
  }

  const ip = clientIpFromHeaders(request.headers);
  const text = await request.text();
  return new Request(sendUrl, {
    method: "POST",
    headers,
    body: ip ? withPayloadIp(text, ip) : text,
  });
}

function pickForwardedHeaders(headers: Headers): Headers {
  const picked = new Headers();
  for (const name of FORWARDED_HEADERS) {
    const value = headers.get(name);
    if (value) picked.set(name, value);
  }
  return picked;
}

function withPayloadIp(text: string, ip: string): string {
  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return text;
  }
  if (!isRecord(body) || !isRecord(body.payload)) return text;
  return JSON.stringify({ ...body, payload: { ...body.payload, ip } });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

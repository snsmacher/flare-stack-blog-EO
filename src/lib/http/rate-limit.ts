import { getRateLimiter } from "@/lib/do/rate-limiter-binding";
import type { Duration } from "@/lib/duration";
import { clientIpFromHeaders, rateLimitKeyFromIp } from "./rate-limit-key";

export async function enforceIpRateLimit(
  request: Request,
  options: { capacity: number; interval: Duration; key: string },
): Promise<Response | null> {
  const ip = rateLimitKeyFromIp(clientIpFromHeaders(request.headers));
  const uniqueIdentifier = `${ip}:${options.key}`;
  const rateLimiter = await getRateLimiter(uniqueIdentifier);
  const result = rateLimiter.checkLimit({
    capacity: options.capacity,
    interval: options.interval,
  });

  if (result.allowed) return null;

  return Response.json(
    {
      code: "RATE_LIMITED",
      message: "Too Many Requests",
      retryAfterMs: result.retryAfterMs,
    },
    {
      status: 429,
      headers: {
        "Retry-After": String(
          Math.max(1, Math.ceil(result.retryAfterMs / 1000)),
        ),
      },
    },
  );
}

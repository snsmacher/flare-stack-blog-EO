import type { Duration } from "@/lib/duration";
import { ms } from "@/lib/duration";

interface BucketState {
  tokens: number;
  lastRefill: number;
}

export type RateLimitOptions = {
  capacity: number;
  interval: Duration;
  cost?: number;
};

// Replaces the RateLimiter Durable Object. A token bucket is best-effort
// throttling, not a billing primitive, so per-process state is enough.
const buckets = new Map<string, BucketState>();
const SWEEP_THRESHOLD = 10_000;
const STALE_AFTER_MS = 3_600_000;

function sweep(now: number) {
  if (buckets.size < SWEEP_THRESHOLD) return;
  for (const [key, bucket] of buckets) {
    if (now - bucket.lastRefill > STALE_AFTER_MS) buckets.delete(key);
  }
}

function checkLimit(
  name: string,
  { capacity, interval, cost = 1 }: RateLimitOptions,
): { allowed: boolean; remaining: number; retryAfterMs: number } {
  if (cost > capacity) {
    return { allowed: false, remaining: 0, retryAfterMs: -1 };
  }

  const now = Date.now();
  sweep(now);

  const rate = capacity / ms(interval);
  const state = buckets.get(name);

  if (!state) {
    buckets.set(name, { tokens: capacity - cost, lastRefill: now });
    return { allowed: true, remaining: capacity - cost, retryAfterMs: 0 };
  }

  const currentTokens = Math.min(
    capacity,
    state.tokens + (now - state.lastRefill) * rate,
  );

  if (currentTokens < cost) {
    return {
      allowed: false,
      remaining: Math.floor(currentTokens),
      retryAfterMs: Math.ceil((cost - currentTokens) / rate),
    };
  }

  state.tokens = currentTokens - cost;
  state.lastRefill = now;
  return { allowed: true, remaining: Math.floor(state.tokens), retryAfterMs: 0 };
}

export async function getRateLimiter(name: string) {
  return {
    checkLimit(options: RateLimitOptions) {
      return checkLimit(name, options);
    },
  };
}

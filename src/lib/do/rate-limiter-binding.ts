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
// 平时也按节律兜底扫一轮：IP 洪峰把桶顶到几万个之前，内存就有界。
const SWEEP_INTERVAL_MS = 5 * 60_000;
let lastSweepAt = 0;

function sweep(now: number) {
  const due =
    buckets.size >= SWEEP_THRESHOLD || now - lastSweepAt >= SWEEP_INTERVAL_MS;
  if (!due || buckets.size === 0) return;
  lastSweepAt = now;
  for (const [key, bucket] of buckets) {
    if (now - bucket.lastRefill > STALE_AFTER_MS) buckets.delete(key);
  }
}

function checkLimit(
  name: string,
  { capacity, interval, cost = 1 }: RateLimitOptions,
): { allowed: boolean; remaining: number; retryAfterMs: number } {
  if (cost > capacity) {
    // A cost the bucket can never hold: back off a whole interval rather than
    // handing the caller a negative number to sell as a Retry-After.
    return { allowed: false, remaining: 0, retryAfterMs: ms(interval) };
  }

  const now = Date.now();
  sweep(now);

  const rate = capacity / ms(interval);
  const state = buckets.get(name);

  if (!state) {
    buckets.set(name, { tokens: capacity - cost, lastRefill: now });
    return { allowed: true, remaining: capacity - cost, retryAfterMs: 0 };
  }

  // Clock rollback (NTP correction, container migration) would otherwise
  // drain the bucket by a negative refill and keep it empty until the clock
  // catches back up.
  const currentTokens = Math.min(
    capacity,
    state.tokens + Math.max(0, now - state.lastRefill) * rate,
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

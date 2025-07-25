// /lib/rateLimiter.ts
import { LRUCache } from "lru-cache";

// Simple in-memory rate limiter
const rateLimitCache = new LRUCache<string, number>({
  max: 500, // Max 500 different IPs
  ttl: 60 * 1000, // 1 minute TTL
});

export async function rateLimit(
  ip: string,
  limit = 3
): Promise<{ success: boolean }> {
  const current = rateLimitCache.get(ip) || 0;
  if (current >= limit) {
    return { success: false };
  }
  rateLimitCache.set(ip, current + 1);
  return { success: true };
}

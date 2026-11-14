import { describe, expect, it } from "vitest";
import { siteDocumentResponse } from "./site-document-response";

describe("siteDocumentResponse", () => {
  it("carries the lifetime each route asked for, and only that one header", () => {
    const response = siteDocumentResponse(
      "<rss />",
      "application/rss+xml; charset=utf-8",
      "public, max-age=3600, s-maxage=3600",
      "GET",
    );
    expect(response.headers.get("Cache-Control")).toBe(
      "public, max-age=3600, s-maxage=3600",
    );
    // EdgeOne 只认 Cache-Control；写死的 CDN-Cache-Control 会把所有文档拖回
    // HTML 档，所以这里必须没有它。
    expect(response.headers.get("CDN-Cache-Control")).toBeNull();
  });

  it("sends no body for HEAD", async () => {
    const response = siteDocumentResponse("<rss />", "text/plain", "x", "HEAD");
    expect(await response.text()).toBe("");
  });
});

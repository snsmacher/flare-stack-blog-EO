import { describe, expect, it, vi } from "vitest";
import { createUmamiClient, resolveUmamiApiConfig } from "./data/umami-api";

describe("Umami API configuration", () => {
  const ID = { UMAMI_WEBSITE_ID: "website-id" };

  it("reads Umami Cloud's API with an API key when the service address is Umami's own", () => {
    for (const UMAMI_SRC of [
      undefined,
      "https://cloud.umami.is",
      "https://eu.umami.is/",
    ]) {
      expect(
        resolveUmamiApiConfig({ ...ID, UMAMI_SRC, UMAMI_API_KEY: "key" }),
        String(UMAMI_SRC),
      ).toEqual({
        auth: "api-key",
        apiUrl: "https://api.umami.is/v1",
        websiteId: "website-id",
        apiKey: "key",
      });
    }
  });

  // Self-hosted Umami takes account API keys since v3.4.0. Without this the
  // key of a self-hosted instance would be sent to Umami Cloud.
  it("reads a self-hosted instance's own API with an API key", () => {
    expect(
      resolveUmamiApiConfig({
        ...ID,
        UMAMI_SRC: "https://stats.example.com/",
        UMAMI_API_KEY: "umami_key",
      }),
    ).toEqual({
      auth: "api-key",
      apiUrl: "https://stats.example.com/api",
      websiteId: "website-id",
      apiKey: "umami_key",
    });
  });

  it("keeps a lookalike host apart from Umami Cloud", () => {
    expect(
      resolveUmamiApiConfig({
        ...ID,
        UMAMI_SRC: "https://notumami.is",
        UMAMI_API_KEY: "key",
      }).apiUrl,
    ).toBe("https://notumami.is/api");
  });

  it("reads Umami Cloud when the service address is not an address", () => {
    expect(
      resolveUmamiApiConfig({
        ...ID,
        UMAMI_SRC: "cloud.umami.is",
        UMAMI_API_KEY: "key",
      }).apiUrl,
    ).toBe("https://api.umami.is/v1");
  });

  it("uses login authentication for a self-hosted instance", () => {
    expect(
      resolveUmamiApiConfig({
        ...ID,
        UMAMI_SRC: "https://stats.example.com",
        UMAMI_USERNAME: "reporter",
        UMAMI_PASSWORD: "secret",
      }),
    ).toEqual({
      auth: "password",
      apiUrl: "https://stats.example.com/api",
      websiteId: "website-id",
      username: "reporter",
      password: "secret",
    });
  });

  it("puts a configured API address before the one the service address gives", () => {
    const UMAMI_API_URL = "https://api.example.com/v1/";
    const UMAMI_SRC = "https://stats.example.com";
    expect(
      resolveUmamiApiConfig({
        ...ID,
        UMAMI_SRC,
        UMAMI_API_URL,
        UMAMI_API_KEY: "key",
      }).apiUrl,
    ).toBe("https://api.example.com/v1");
    expect(
      resolveUmamiApiConfig({
        ...ID,
        UMAMI_SRC,
        UMAMI_API_URL,
        UMAMI_USERNAME: "reporter",
        UMAMI_PASSWORD: "secret",
      }).apiUrl,
    ).toBe("https://api.example.com/v1");
  });

  it.each([
    {},
    { UMAMI_WEBSITE_ID: "website-id" },
    {
      UMAMI_WEBSITE_ID: "website-id",
      UMAMI_USERNAME: "reporter",
    },
    {
      UMAMI_WEBSITE_ID: "website-id",
      UMAMI_USERNAME: "reporter",
      UMAMI_PASSWORD: "secret",
    },
    {
      UMAMI_WEBSITE_ID: "website-id",
      UMAMI_API_KEY: "key",
      UMAMI_USERNAME: "reporter",
      UMAMI_PASSWORD: "secret",
    },
  ])("rejects incomplete or ambiguous configuration", (env) => {
    expect(() => resolveUmamiApiConfig(env)).toThrow();
  });

  it("names the variables when both kinds of credentials are set", () => {
    expect(() =>
      resolveUmamiApiConfig({
        ...ID,
        UMAMI_API_KEY: "key",
        UMAMI_USERNAME: "reporter",
        UMAMI_PASSWORD: "secret",
      }),
    ).toThrow(/UMAMI_API_KEY.*UMAMI_USERNAME/);
  });
});

function requestUrl(input: RequestInfo | URL | undefined) {
  return input instanceof Request ? input.url : String(input);
}

describe("Umami API client", () => {
  it("paginates path metrics with API key authentication", async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        Response.json([
          { name: "/post/a", pageviews: 3 },
          { name: "/post/b", pageviews: 2 },
        ]),
      )
      .mockResolvedValueOnce(
        Response.json([{ name: "/post/c", pageviews: 1 }]),
      );
    const client = createUmamiClient({ fetcher, pageSize: 2 });

    const metrics = await client.getPathMetrics(
      {
        auth: "api-key",
        apiUrl: "https://api.umami.is/v1",
        websiteId: "website-id",
        apiKey: "cloud-key",
      },
      { startAt: 10, endAt: 20 },
    );

    expect(metrics).toEqual([
      { path: "/post/a", pageviews: 3 },
      { path: "/post/b", pageviews: 2 },
      { path: "/post/c", pageviews: 1 },
    ]);
    expect(fetcher).toHaveBeenCalledTimes(2);
    expect(requestUrl(fetcher.mock.calls[0]?.[0])).toContain("offset=0");
    expect(requestUrl(fetcher.mock.calls[1]?.[0])).toContain("offset=2");
    expect(fetcher.mock.calls[0]?.[1]).toMatchObject({
      headers: {
        Accept: "application/json",
        Authorization: "Bearer cloud-key",
      },
    });
  });

  it("logs in before querying a self-hosted instance", async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(Response.json({ token: "session-token" }))
      .mockResolvedValueOnce(
        Response.json([{ name: "/post/a", pageviews: "3" }]),
      );
    const client = createUmamiClient({ fetcher });

    const metrics = await client.getPathMetrics(
      {
        auth: "password",
        apiUrl: "https://stats.example.com/api",
        websiteId: "website-id",
        username: "reporter",
        password: "secret",
      },
      { startAt: 10, endAt: 20 },
    );

    expect(metrics).toEqual([{ path: "/post/a", pageviews: 3 }]);
    expect(requestUrl(fetcher.mock.calls[0]?.[0])).toBe(
      "https://stats.example.com/api/auth/login",
    );
    expect(fetcher.mock.calls[1]?.[1]).toMatchObject({
      headers: {
        Accept: "application/json",
        Authorization: "Bearer session-token",
      },
    });
  });
});

import { createFileRoute } from "@tanstack/react-router";
import { serverEnv } from "@/lib/env/server.env";

export const Route = createFileRoute("/stats.js")({
  server: {
    handlers: {
      GET: async ({ context }) => {
        const umamiSrc = serverEnv(context.env).UMAMI_SRC;
        if (!umamiSrc) {
          return new Response("Not Found", { status: 404 });
        }

        // 相对解析：UMAMI_SRC 带子路径（自托管在 /umami/ 下）时不会被丢掉。
        const base = umamiSrc.endsWith("/") ? umamiSrc : `${umamiSrc}/`;
        const scriptUrl = new URL("script.js", base).toString();
        const response = await fetch(scriptUrl, {
          signal: AbortSignal.timeout(10_000),
        });

        // undici 透明解压后 headers 仍留着 content-encoding 与压缩后的
        // content-length，原样转发等于声明一个 gzip 的明文体——浏览器会当场
        // 解码失败。只透传 content-type，缓存头自己定。
        const headers = new Headers({
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        });
        const contentType = response.headers.get("content-type");
        if (contentType) headers.set("Content-Type", contentType);
        return new Response(response.body, {
          status: response.status,
          headers,
        });
      },
    },
  },
});

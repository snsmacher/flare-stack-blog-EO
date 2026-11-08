import path from "node:path";
import { edgeoneTanStackStartAdapter } from "@edgeone/tanstack-start";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import packageJson from "./package.json";
import { resolveDatabaseUrl } from "./src/lib/db/connection-target";
import { routedFirstSegmentsPlugin } from "./scripts/vite-routed-segments.ts";

// EdgeOne's Node cloud functions don't reliably receive console-set env vars
// in `process.env` at runtime (platform docs route them via context.env, but
// the generated bootstrap hands the TanStack handler an empty context). Bake
// the build-time values into the SSR bundle only — the client bundle must
// never see these. Variables absent at build time stay as runtime reads.
function bakeSecretsForSsr(): Plugin {
  const names = [
    "DATABASE_URL",
    "DATABASE_URL_DIRECT",
    "PG_POOL_MAX",
    "BETTER_AUTH_SECRET",
    "BETTER_AUTH_URL",
    "DOMAIN",
    "GITHUB_CLIENT_ID",
    "GITHUB_CLIENT_SECRET",
    // Umami: the access-statistics script is proxied through /stats.js and
    // /api/send, which read UMAMI_SRC on the server. Without baking it the
    // proxy has nothing to forward to and the script 404s.
    "UMAMI_WEBSITE_ID",
    "UMAMI_SRC",
    "UMAMI_API_URL",
    "UMAMI_API_KEY",
    "UMAMI_USERNAME",
    "UMAMI_PASSWORD",
  ];
  const define: Record<string, string> = {};
  for (const name of names) {
    // 数据库连接串走统一解析：控制台里还没改、或仍指着 Neon 时，构建期就换成
    // 国内库，省掉一次人工改控制台 + 重新构建的往返。
    const value =
      name === "DATABASE_URL" || name === "DATABASE_URL_DIRECT"
        ? resolveDatabaseUrl(process.env[name])
        : process.env[name];
    if (value !== undefined) {
      define[`process.env.${name}`] = JSON.stringify(value);
    }
  }
  console.log(
    `[bake-probe] present=[${names.filter((n) => process.env[n] !== undefined).join(",")}] missing=[${names.filter((n) => process.env[n] === undefined).join(",")}]`,
  );
  return {
    name: "bake-secrets-for-ssr",
    configEnvironment(name) {
      if (name === "ssr" && Object.keys(define).length > 0) {
        return { define };
      }
    },
  };
}

const config = defineConfig({
  // EdgeOne's preview serves assets from a different prefix than production;
  // the CLI passes it in and the built HTML must reference it.
  base: process.env.EDGEONE_PREVIEW_ASSET_PREFIX,
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    // Unique per build, so cached pages never outlive the assets they name.
    __BUILD_ID__: JSON.stringify(
      process.env.WORKERS_CI_BUILD_UUID || Date.now().toString(36),
    ),
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    bakeSecretsForSsr(),
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      strategy: ["cookie", "preferredLanguage", "baseLocale"],
      cookieName: "LOCALE",
    }),
    routedFirstSegmentsPlugin(),
    tailwindcss(),
    devtools(),
    tanstackStart(),
    edgeoneTanStackStartAdapter(),
    viteReact(),
  ],
});

export default config;

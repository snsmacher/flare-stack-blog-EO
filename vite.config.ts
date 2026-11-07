import path from "node:path";
import { edgeoneTanStackStartAdapter } from "@edgeone/tanstack-start";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import packageJson from "./package.json";
import { routedFirstSegmentsPlugin } from "./scripts/vite-routed-segments.ts";

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

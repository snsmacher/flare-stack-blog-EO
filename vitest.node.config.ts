import { defineConfig } from "vitest/config";
import packageJson from "./package.json";
import { routedFirstSegmentsPlugin } from "./scripts/vite-routed-segments.ts";
import { themeFixturePlugin } from "./scripts/vite-theme-fixture.ts";

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    __BUILD_ID__: JSON.stringify("test"),
  },
  // The fixture Theme stays out of the registry here too; tests inject it.
  plugins: [routedFirstSegmentsPlugin(), themeFixturePlugin(false)],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "node",
    // A Theme's stylesheet URL names its file (themes.test.ts reads it).
    css: { include: [/\/(features\/theme|tests\/theme-fixture)\/.+\.css/] },
    // seo.test.ts 的 beforeAll 要静态导入整条 $slug 路由图（含 moments 页），
    // 慢机器上 60s 默认值不够；router.test 的懒加载集合在 moments 加入后
    // 也变重了，5s 默认 testTimeout 同样吃紧。
    hookTimeout: 240_000,
    testTimeout: 15_000,
    include: ["src/**/*.test.ts", "scripts/**/*.test.ts"],
    exclude: ["**/*.integration.test.ts"],
  },
});

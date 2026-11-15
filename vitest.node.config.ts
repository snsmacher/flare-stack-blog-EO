import { defineConfig } from "vitest/config";
import packageJson from "./package.json";
import { routedFirstSegmentsPlugin } from "./scripts/vite-routed-segments.ts";

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    __BUILD_ID__: JSON.stringify("test"),
  },
  plugins: [routedFirstSegmentsPlugin()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "node",
    // seo.test.ts 的 beforeAll 要静态导入整条 $slug 路由图（含 moments 页），
    // 慢机器上 60s 默认值不够；router.test 的懒加载集合在 moments 加入后
    // 也变重了，5s 默认 testTimeout 同样吃紧。
    hookTimeout: 240_000,
    testTimeout: 15_000,
    include: ["src/**/*.test.ts", "scripts/**/*.test.ts"],
    exclude: ["**/*.integration.test.ts"],
  },
});

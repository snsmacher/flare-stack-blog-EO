#!/usr/bin/env node
/**
 * 把 system_config.site.icons 指回 /public 下的静态图标文件。
 *
 * 背景：管理后台「站点外观 → 图标」上传后写的是 R2 资源路径
 * （/images/asset/favicon/...），在 EdgeOne 上没有 R2，静态文件才可靠。
 *
 * 用法：DATABASE_URL="postgresql://..." node scripts/patch-site-icons.mjs
 */
import pg from "pg";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("缺少 DATABASE_URL");
  process.exit(1);
}

const STATIC_ICONS = {
  faviconSvg: "/favicon.svg",
  faviconIco: "/favicon.ico",
  favicon96: "/favicon-96x96.png",
  appleTouchIcon: "/apple-touch-icon.png",
  webApp192: "/web-app-manifest-192x192.png",
  webApp512: "/web-app-manifest-512x512.png",
};

const pool = new pg.Pool({
  connectionString: url,
  max: 1,
  ssl: url.includes("localhost") || url.includes("127.0.0.1") ? undefined : { rejectUnauthorized: false },
});

try {
  const before = await pool.query("select id, config_json, site_revision from system_config");
  if (!before.rows.length) {
    console.log("system_config 为空，跳过");
  } else {
    const row = before.rows[0];
    const cfg = typeof row.config_json === "string" ? JSON.parse(row.config_json) : row.config_json;
    cfg.site ??= {};
    const old = JSON.stringify(cfg.site.icons ?? {});
    cfg.site.icons = STATIC_ICONS;
    const r = await pool.query(
      `update system_config
          set config_json = $1::jsonb,
              site_revision = site_revision + 1,
              updated_at = now()
        where id = $2
        returning site_revision`,
      [JSON.stringify(cfg), row.id],
    );
    console.log("旧图标配置:", old);
    console.log("新图标配置:", JSON.stringify(STATIC_ICONS));
    console.log("site_revision:", row.site_revision, "→", r.rows[0].site_revision);
  }
} catch (e) {
  console.error("失败:", e.message);
  process.exitCode = 1;
} finally {
  await pool.end().catch(() => {});
}

#!/usr/bin/env node
/**
 * 从原始插画生成整站图标（方案 B：原图直接缩放，最忠实）。
 *
 *   node scripts/build-favicon.mjs [源图路径]
 *
 * 产出 public/ 下：
 *   favicon.ico（内嵌 16/32/48 三档 PNG）
 *   favicon-96x96.png / apple-touch-icon.png / web-app-manifest-192|512.png
 *
 * 注意：favicon.svg 不由本脚本产出，也不在 head 里声明，
 * 避免浏览器优先取 SVG 盖掉更清晰的位图。
 */
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const SRC = process.argv[2] ?? "C:/迅雷下载/b_0bf911c44e878ec50d32c1905811ae0a.png";
const PUB = "public";

// 与矢量描摹相同的裁切，保证两种方案构图一致
const CROP = { left: 64, top: 113, width: 513, height: 513 };

const at = (size) =>
  sharp(SRC)
    .extract(CROP)
    .resize(size, size, { kernel: "lanczos3" })
    .png({ compressionLevel: 9 })
    .toBuffer();

await fs.writeFile(path.join(PUB, "favicon-96x96.png"), await at(96));
await fs.writeFile(path.join(PUB, "apple-touch-icon.png"), await at(180));
await fs.writeFile(path.join(PUB, "web-app-manifest-192x192.png"), await at(192));
await fs.writeFile(path.join(PUB, "web-app-manifest-512x512.png"), await at(512));

// --- ICO：多尺寸内嵌 PNG（Vista+ 全支持）---
const icoSizes = [16, 32, 48];
const pngs = [];
for (const s of icoSizes) pngs.push({ size: s, buf: await at(s) });

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngs.length, 4);

const dirs = [];
let offset = 6 + 16 * pngs.length;
for (const p of pngs) {
  const d = Buffer.alloc(16);
  d.writeUInt8(p.size >= 256 ? 0 : p.size, 0);
  d.writeUInt8(p.size >= 256 ? 0 : p.size, 1);
  d.writeUInt8(0, 2);
  d.writeUInt8(0, 3);
  d.writeUInt16LE(1, 4);
  d.writeUInt16LE(32, 6);
  d.writeUInt32LE(p.buf.length, 8);
  d.writeUInt32LE(offset, 12);
  offset += p.buf.length;
  dirs.push(d);
}
await fs.writeFile(
  path.join(PUB, "favicon.ico"),
  Buffer.concat([header, ...dirs, ...pngs.map((p) => p.buf)]),
);

const files = [
  "favicon.ico",
  "favicon-96x96.png",
  "apple-touch-icon.png",
  "web-app-manifest-192x192.png",
  "web-app-manifest-512x512.png",
];
console.log("图标已生成（原图栅格版，ICO 内嵌 16/32/48）");
for (const f of files) {
  const st = await fs.stat(path.join(PUB, f));
  console.log("  ", f, st.size + "B");
}

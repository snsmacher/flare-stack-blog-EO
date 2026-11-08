import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const PUB = "public";
const svg = await fs.readFile(path.join(PUB, "favicon.svg"));
const BG = "#1B9FE0";

const render = (size, flatten = false) => {
  let img = sharp(svg, { density: 384 }).resize(size, size);
  if (flatten) img = img.flatten({ background: BG });
  return img.png({ compressionLevel: 9 }).toBuffer();
};

// 透明圆角版（浏览器标签页用）
await fs.writeFile(path.join(PUB, "favicon-96x96.png"), await render(96));

// 实底版（iOS / PWA 不支持透明）
await fs.writeFile(path.join(PUB, "apple-touch-icon.png"), await render(180, true));
await fs.writeFile(path.join(PUB, "web-app-manifest-192x192.png"), await render(192, true));
await fs.writeFile(path.join(PUB, "web-app-manifest-512x512.png"), await render(512, true));

// --- 手写 ICO（PNG 内嵌，Vista+ 支持）---
const icoSizes = [16, 32, 48];
const pngs = [];
for (const s of icoSizes) pngs.push({ size: s, buf: await render(s) });

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type = icon
header.writeUInt16LE(pngs.length, 4);

const dirs = [];
let offset = 6 + 16 * pngs.length;
for (const p of pngs) {
  const d = Buffer.alloc(16);
  d.writeUInt8(p.size >= 256 ? 0 : p.size, 0); // width
  d.writeUInt8(p.size >= 256 ? 0 : p.size, 1); // height
  d.writeUInt8(0, 2); // palette
  d.writeUInt8(0, 3); // reserved
  d.writeUInt16LE(1, 4); // planes
  d.writeUInt16LE(32, 6); // bpp
  d.writeUInt32LE(p.buf.length, 8);
  d.writeUInt32LE(offset, 12);
  offset += p.buf.length;
  dirs.push(d);
}
await fs.writeFile(path.join(PUB, "favicon.ico"), Buffer.concat([header, ...dirs, ...pngs.map((p) => p.buf)]));

// --- 对比预览图（放大 16/32 实际像素）---
const sheetParts = [];
const items = [
  { size: 16, label: "16" },
  { size: 32, label: "32" },
  { size: 48, label: "48" },
  { size: 128, label: "128" },
];
let x = 16;
for (const it of items) {
  const b = await render(it.size);
  sheetParts.push({ input: b, left: x, top: 24 });
  x += it.size + 24;
}
const totalW = x + 8;
const light = await sharp({ create: { width: totalW, height: 180, channels: 4, background: "#f2f3f5" } })
  .composite(sheetParts)
  .png()
  .toBuffer();
await fs.writeFile("tmp-icon-preview.png", light);

console.log("图标已生成");
for (const f of ["favicon.svg", "favicon.ico", "favicon-96x96.png", "apple-touch-icon.png", "web-app-manifest-192x192.png", "web-app-manifest-512x512.png"]) {
  const st = await fs.stat(path.join(PUB, f));
  console.log(" ", f, st.size + "B");
}

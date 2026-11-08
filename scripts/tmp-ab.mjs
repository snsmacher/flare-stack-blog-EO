import sharp from "sharp";
import fs from "node:fs/promises";

const SRC = "C:/迅雷下载/b_0bf911c44e878ec50d32c1905811ae0a.png";
const traced = await fs.readFile("public/favicon.svg");

// 与描摹完全相同的裁切，保证两版构图一致
const CROP = { left: 64, top: 113, width: 513, height: 513 };
const raster = await sharp(SRC).extract(CROP).resize(512, 512, { kernel: "lanczos3" }).png().toBuffer();

const sizes = [16, 24, 32, 48, 64, 128];
const COL = 168;
const W = 40 + sizes.length * COL;
const H = 400;

const comps = [];
const svgBox = (w, h, inner) =>
  Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`);

comps.push({ input: svgBox(W, H, `<rect width="${W}" height="${H}" fill="#f4f5f7"/>`), top: 0, left: 0 });

comps.push({
  input: svgBox(300, 24, `<text x="0" y="16" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="13" fill="#2a2b30">A · 矢量描摹（SVG，可无限缩放）</text>`),
  top: 20, left: 40,
});
comps.push({
  input: svgBox(300, 24, `<text x="0" y="16" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="13" fill="#2a2b30">B · 原图直接缩放（PNG，100% 忠实）</text>`),
  top: 210, left: 40,
});

for (let r = 0; r < 2; r++) {
  const y = r === 0 ? 150 : 350;
  for (let i = 0; i < sizes.length; i++) {
    const s = sizes[i];
    const cx = 40 + i * COL + COL / 2;
    const buf =
      r === 0
        ? await sharp(traced, { density: 320 }).resize(s, s).png().toBuffer()
        : await sharp(raster).resize(s, s).png().toBuffer();
    comps.push({ input: buf, top: y - s, left: Math.round(cx - s / 2) });
    comps.push({
      input: svgBox(60, 18, `<text x="30" y="12" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="11" fill="#7a7c85">${s}</text>`),
      top: y + 6, left: Math.round(cx - 30),
    });
  }
}

await sharp({ create: { width: W, height: H, channels: 4, background: "#00000000" } })
  .composite(comps)
  .png()
  .toFile("tmp-ab.png");

console.log("已生成 tmp-ab.png  |  矢量", (traced.length / 1024).toFixed(1) + "KB");

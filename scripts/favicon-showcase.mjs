import sharp from "sharp";
import fs from "node:fs/promises";

const svg = await fs.readFile("public/favicon.svg");
const render = (size) => sharp(svg, { density: 512 }).resize(size, size).png().toBuffer();

const rows = [
  { bg: "#f4f5f7", fg: "#2a2b30", label: "浅色背景", sizes: [16, 32, 64, 128] },
  { bg: "#1d1e21", fg: "#e9e9ec", label: "深色背景", sizes: [16, 32, 64, 128] },
];

const W = 560;
const ROW_H = 178;
const H = rows.length * ROW_H + 16;
const comps = [];

for (let i = 0; i < rows.length; i++) {
  const r = rows[i];
  const top = 8 + i * ROW_H;
  comps.push({
    input: Buffer.from(
      `<svg width="${W}" height="${ROW_H - 8}" xmlns="http://www.w3.org/2000/svg">
         <rect width="${W}" height="${ROW_H - 8}" rx="16" fill="${r.bg}"/>
         <text x="26" y="32" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="13" fill="${r.fg}" opacity="0.55">${r.label}</text>
       </svg>`,
    ),
    top,
    left: 0,
  });

  let x = 30;
  for (const s of r.sizes) {
    // 尺寸基线对齐（底对齐），让大小差异一目了然
    comps.push({ input: await render(s), top: top + 150 - s, left: x });
    comps.push({
      input: Buffer.from(
        `<svg width="${s + 8}" height="20" xmlns="http://www.w3.org/2000/svg">
           <text x="${(s + 8) / 2}" y="14" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="11" fill="${r.fg}" opacity="0.45">${s}</text>
         </svg>`,
      ),
      top: top + 152,
      left: x - 4,
    });
    x += s + 42;
  }
}

await sharp({ create: { width: W, height: H, channels: 4, background: "#ffffff00" } })
  .composite(comps)
  .png()
  .toFile("tmp-favicon-showcase.png");

console.log("已生成 tmp-favicon-showcase.png");

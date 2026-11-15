# 任务（暂缓）：无封面卡片的「横幅字牌」替代方案

> 2026-11-15：站长决定暂不更换主题（留在「经典」），本任务搁置。方案已设计完成，
> 想做时按此执行即可。前提：先切到名片/沉浸/侧栏任一使用 tile 卡的主题。

## 问题

四套主题里名片/沉浸/侧栏的 tile 卡在文章没有封面时，渲染
`plateCharacter(title)`（标题首字）+ 大号低透明度字形（`fuwari-tile-plate`，
styles.css ~408 行）。视觉上是「模板字」，被站长否了；而往 Blob 上传封面
图又受存储额度约束（免费额度 1GB 全库共享）。

## 方案（零存储成本，已设计定稿）

用**随仓库发布的站点横幅**做无封面的封面替身——`/images/home-bg.webp`
（静态资产，走 EdgeOne 静态托管，不进 Blob），叠加确定性色相偏移让每张卡
不同，首字缩小成精致的角标字牌：

1. `src/features/posts/components/post-card.tsx`：
   - 新增 `plateHue(seed)`：对 slug 做简单 hash，映射到 −30°~+30° 的
     `--plate-hue`（同一篇文章恒定，卡与卡之间有区分）。
   - `PostTile` 的 plate 分支改为：
     `<img src={banner} className="fuwari-plate-bg" />` + scrim + 字牌 span。
   - banner 来源：`useRouteContext().siteConfig.bannerImage`（__root beforeLoad
     已注入，SSR 完整无闪变），经 `getPublicImageSrc(banner, PUBLIC_IMAGE_WIDTH.banner)`。
2. `src/features/posts/components/archive/archive-post.tsx`：archive covers
   模式的 plate 同样处理（小尺寸版）。
3. `src/styles.css`：
   - `.fuwari-tile-plate` 加 `overflow: hidden`，现有渐变保留作加载兜底。
   - 新增 `.fuwari-plate-bg`（absolute inset 0、object-fit cover、
     `filter: hue-rotate(var(--plate-hue, 0deg)) saturate(1.06)`）与
     `.fuwari-tile-plate-scrim`（accent→transparent→暗部的斜向渐变）。
   - `.fuwari-tile-plate span` 从巨型字形改成左下角字牌（小字号 + 半透明
     深底 + backdrop-blur 圆角片）；hover 改为背景 `scale(1.06)`。
   - `.fuwari-archive-cover[data-lead="plate"]` 同步（span 改绝对定位角标）。

## 验收

- 不上传任何封面：四套主题的列表卡不再出现大号首字字形，呈横幅色相变体。
- 传了封面的文章不变。
- Blob 无新增占用（横幅是静态资产）。
- 已有测试（theme-shells / footer band / plate 相关）保持通过。

import { describe, expect, it } from "vitest";
import { extractReleaseNotes, normalizeVersion } from "./release-notes.mjs";

const CHANGELOG = `# 更新记录

说明段落，不该被抓进任何一个版本。

## [1.1.0] - 2026-12-01

### 新增

- 一一条

## [1.0.0] - 2026-11-08

独立发行线的起点。

### 修复

- 修了一个 bug

---

## [0.9.0] - 2026-10-01

- 老版本
`;

describe("normalizeVersion", () => {
  it("去掉 v 前缀、方括号与空白", () => {
    expect(normalizeVersion("v1.0.0")).toBe("1.0.0");
    expect(normalizeVersion("[1.0.0]")).toBe("1.0.0");
    expect(normalizeVersion(" 1.0.0 ")).toBe("1.0.0");
  });
});

describe("extractReleaseNotes", () => {
  it("只取目标版本，遇到下一个二级标题就停", () => {
    const notes = extractReleaseNotes(CHANGELOG, "1.0.0");
    expect(notes).toContain("独立发行线的起点。");
    expect(notes).toContain("- 修了一个 bug");
    expect(notes).not.toContain("一一条");
    expect(notes).not.toContain("老版本");
  });

  it("结尾的分隔线与空行被清掉", () => {
    expect(extractReleaseNotes(CHANGELOG, "1.0.0").endsWith("---")).toBe(false);
  });

  it("接受带 v 前缀与方括号的写法", () => {
    expect(extractReleaseNotes(CHANGELOG, "v1.1.0")).toBe(
      "### 新增\n\n- 一一条",
    );
    expect(extractReleaseNotes(CHANGELOG, "[1.1.0]")).toBe(
      "### 新增\n\n- 一一条",
    );
  });

  it("版本不存在时报错并列出已有版本", () => {
    expect(() => extractReleaseNotes(CHANGELOG, "9.9.9")).toThrow(
      /1\.1\.0、1\.0\.0、0\.9\.0/,
    );
  });

  it("版本节为空时报错，而不是发出空白发行版", () => {
    expect(() =>
      extractReleaseNotes("## [1.0.0]\n\n## [0.9.0]\n\n- 老", "1.0.0"),
    ).toThrow(/是空的/);
  });
});

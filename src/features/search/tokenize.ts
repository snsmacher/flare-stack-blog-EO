const segmenter = new Intl.Segmenter("zh-CN", { granularity: "word" });

/**
 * The space-joined word list stored beside each document. Nothing reads it any
 * more — the search engine matches substrings, see `search/engine.ts` — but the
 * column is `NOT NULL`, so it keeps being filled until the column goes.
 */
export function tokenizeForSearch(...parts: Array<string | null | undefined>) {
  const text = parts
    .filter((part) => part && part.trim().length > 0)
    .join("\n");
  return Array.from(segmenter.segment(text))
    .filter((item) => item.isWordLike)
    .map((item) => item.segment.toLowerCase())
    .join(" ");
}

/** The words of `query`, as `Intl.Segmenter` cuts them. */
export function queryTerms(query: string) {
  return Array.from(segmenter.segment(query))
    .filter((item) => item.isWordLike)
    .map((item) => item.segment)
    .filter((token) => token.length > 0);
}

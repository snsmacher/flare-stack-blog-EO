const segmenter = new Intl.Segmenter("zh-CN", { granularity: "word" });

export function tokenizeForSearch(...parts: Array<string | null | undefined>) {
  const text = parts
    .filter((part) => part && part.trim().length > 0)
    .join("\n");
  return Array.from(segmenter.segment(text))
    .filter((item) => item.isWordLike)
    .map((item) => item.segment.toLowerCase())
    .join(" ");
}

/**
 * The `websearch_to_tsquery` form of the query: every term quoted, separated by
 * spaces, which that syntax reads as AND. Quoting stops a term from being taken
 * for an operator; repeated words are dropped so that a doubled word such as
 * 「哔哩哔哩」 does not turn into four conditions on two lexemes.
 */
export function toFtsMatchQuery(query: string) {
  const tokens = [
    ...new Set(
      Array.from(segmenter.segment(query))
        .filter((item) => item.isWordLike)
        .map((item) => item.segment.toLowerCase())
        .filter((token) => token.length > 0),
    ),
  ];

  if (tokens.length === 0) return null;
  return tokens.map((token) => `"${token}"`).join(" ");
}

export function queryTerms(query: string) {
  return Array.from(segmenter.segment(query))
    .filter((item) => item.isWordLike)
    .map((item) => item.segment)
    .filter((token) => token.length > 0);
}

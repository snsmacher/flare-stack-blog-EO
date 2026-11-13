import {
  readSearchDocuments,
  readSearchIndexVersion,
  type SearchDocumentRow,
} from "@/features/search/data/search.data";
import { queryTerms } from "@/features/search/tokenize";

/**
 * The search index: every indexed document, held in this process.
 *
 * Nothing is prepared at write time beyond the row itself. A search reads the
 * index version — one single-row query — and reloads the documents only when
 * that version moved, so a warm instance searches entirely in memory and a Post
 * published a moment ago is searchable on the very next request.
 *
 * Matching is a case-insensitive substring test, not a `tsvector` one. The
 * `simple` dictionary matches whole lexemes, so 「中行」 could never find
 * 「中国银行」: the stored lexemes were 中国 and 银行, and a lexeme is not a part
 * of another. Substring matching has no such gap, and at the size of this blog
 * the scan costs microseconds.
 *
 * Orama was tried first and dropped. Its Mandarin tokenizer is `Intl.Segmenter`
 * — the same code this project already ran, so it changed nothing about
 * segmentation — and it ORs the tokens of a query, which returned 9 of 10
 * documents for 「中行」 and put a document without 「银行卡」 at the top for that
 * query. Its BM25 ordering also ranked the short 预告 Post above the 评测 Post
 * for 「中国银行」. The scan below answers both cases the way a reader expects.
 */

/** A document with the lower-cased copies the matcher compares against. */
type IndexedDocument = SearchDocumentRow & {
  /** Title, tags, summary and content in one string, for the presence test. */
  haystack: string;
  lower: {
    title: string;
    tags: string;
    summary: string;
    content: string;
  };
};

type SearchIndex = {
  version: string;
  documents: Array<IndexedDocument>;
};

/**
 * How much a hit in each field is worth. A title mention outweighs a body one
 * tenfold, so a Post about the query always beats one that merely mentions it.
 */
const FIELD_WEIGHT = {
  title: 40,
  tags: 20,
  summary: 8,
  content: 4,
} as const;

/** Repeated mentions keep counting up to this many, then stop. */
const MAX_OCCURRENCES = 3;

/** The whole query counts for more than any one of its words. */
const FULL_QUERY_WEIGHT = 2;

/**
 * Where the whole query was found, best first. A field always outranks a
 * looser match, however often the words repeat: a title hit goes above a body
 * hit, and a Post that only has the query's words scattered over its body goes
 * below both.
 */
const TIER = {
  title: 4,
  tags: 3,
  summary: 2,
  content: 1,
  words: 0,
} as const;

/**
 * The index of the instance, and the version it was built from. Both are
 * replaced together, so a reader never sees a version that does not describe
 * the documents beside it.
 */
let cached: SearchIndex | null = null;
let building: Promise<SearchIndex> | null = null;
/** The newest version any request has read; a load may still finish for a stale one. */
let latestVersion: string | null = null;

/**
 * The index for the version Postgres reports now. Reloads the documents when
 * that version is not the one held here; concurrent callers share one load.
 */
export async function getSearchIndex(db: DB): Promise<SearchIndex> {
  const version = await readSearchIndexVersion(db);
  latestVersion = version;
  if (cached?.version === version) return cached;

  if (building) {
    const started = await building;
    if (started.version === version) return started;
  }

  const load = (async () => {
    const documents = (await readSearchDocuments(db)).map(toIndexedDocument);
    const index: SearchIndex = { version, documents };
    // A slow load for a version that has since been superseded must not
    // overwrite the newer index a faster load already cached.
    if (latestVersion === version) cached = index;
    return index;
  })();

  building = load;
  try {
    return await load;
  } finally {
    if (building === load) building = null;
  }
}

/**
 * The documents that match `query`, at most `limit` of them, best first.
 *
 * A document has to contain every word of the query as written. A query that
 * segments into single characters only — 「中行」, 「测」 — counts such a
 * document only when the characters sit together, because every Chinese text
 * contains 中 and 行 somewhere and matching on that alone is noise.
 */
export function matchSearchIndex(
  index: SearchIndex,
  query: string,
  limit: number,
): Array<SearchDocumentRow> {
  const full = query.trim().toLowerCase();
  if (full.length === 0) return [];

  const words = [
    ...new Set(
      queryTerms(full)
        .map((word) => word.toLowerCase())
        .filter((word) => word.length > 0),
    ),
  ];
  // Punctuation has no word to look for, and every Post has a comma, so a
  // query like 「，」 would otherwise match the whole blog.
  if (words.length === 0 && !/[\p{L}\p{N}]/u.test(full)) return [];

  const needles = words.length > 0 ? words : [full];
  const hasWord = words.some((word) => word.length > 1);

  const weighted = [
    { needle: full, weight: FULL_QUERY_WEIGHT },
    ...needles
      .filter((needle) => needle !== full)
      .map((needle) => ({ needle, weight: 1 })),
  ];

  const scored: Array<{
    document: SearchDocumentRow;
    tier: number;
    score: number;
  }> = [];
  for (const document of index.documents) {
    if (!needles.every((needle) => document.haystack.includes(needle))) {
      continue;
    }
    const tier = tierOf(document, full);
    if (tier === TIER.words && !hasWord) continue;

    scored.push({
      document: toRow(document),
      tier,
      score: weighted.reduce(
        (total, entry) =>
          total + entry.weight * weightedOccurrences(document, entry.needle),
        0,
      ),
    });
  }

  return scored
    .sort(
      (a, b) =>
        b.tier - a.tier ||
        b.score - a.score ||
        a.document.postId - b.document.postId,
    )
    .slice(0, limit)
    .map((hit) => hit.document);
}

function tierOf(document: IndexedDocument, full: string) {
  if (document.lower.title.includes(full)) return TIER.title;
  if (document.lower.tags.includes(full)) return TIER.tags;
  if (document.lower.summary.includes(full)) return TIER.summary;
  if (document.lower.content.includes(full)) return TIER.content;
  return TIER.words;
}

function toIndexedDocument(row: SearchDocumentRow): IndexedDocument {
  const lower = {
    title: row.title.toLowerCase(),
    tags: row.tags.join(" ").toLowerCase(),
    summary: row.summary.toLowerCase(),
    content: row.content.toLowerCase(),
  };

  return {
    ...row,
    lower,
    haystack: `${lower.title}\n${lower.tags}\n${lower.summary}\n${lower.content}`,
  };
}

/** How much every field of `document` says `needle`, weights included. */
function weightedOccurrences(document: IndexedDocument, needle: string) {
  return (
    FIELD_WEIGHT.title * countOccurrences(document.lower.title, needle) +
    FIELD_WEIGHT.tags * countOccurrences(document.lower.tags, needle) +
    FIELD_WEIGHT.summary * countOccurrences(document.lower.summary, needle) +
    FIELD_WEIGHT.content * countOccurrences(document.lower.content, needle)
  );
}

/** How often `needle` occurs in `haystack`, counted up to `MAX_OCCURRENCES`. */
function countOccurrences(haystack: string, needle: string) {
  if (needle.length === 0) return 0;
  let seen = 0;
  let from = 0;
  while (seen < MAX_OCCURRENCES) {
    const at = haystack.indexOf(needle, from);
    if (at === -1) break;
    seen += 1;
    from = at + needle.length;
  }
  return seen;
}

function toRow(document: IndexedDocument): SearchDocumentRow {
  return {
    postId: document.postId,
    slug: document.slug,
    title: document.title,
    summary: document.summary,
    content: document.content,
    tags: document.tags,
  };
}

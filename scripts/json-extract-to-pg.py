import re

files = [
    "src/features/dashboard/data/dashboard.data.ts",
    "src/features/media/data/media.data.ts",
    "src/features/post-popularity/data/post-popularity.data.ts",
    "src/features/posts/data/helper.ts",
    "src/features/posts/data/post-media.data.ts",
    "src/features/posts/data/posts.data.ts",
    "src/features/posts/utils/feed.ts",
]

# json_extract(${Col}, '$.a.b')  ->  ${Col}#>>'{a,b}'
# json_extract(${Col}, '$.a')    ->  ${Col}->>'a'
PATTERN = re.compile(
    r"""json_extract\(\s*(\$\{[A-Za-z0-9_.]+\})\s*,\s*['"]\$\.([A-Za-z0-9_.]+)['"]\s*\)"""
)

total = 0
for path in files:
    source = open(path, encoding="utf-8").read()

    def replace(match):
        global total
        total += 1
        column, dotted = match.group(1), match.group(2)
        segments = dotted.split(".")
        if len(segments) == 1:
            return f"{column}->>'{segments[0]}'"
        return f"{column}#>>'{{{','.join(segments)}}}'"

    updated = PATTERN.sub(replace, source)
    if updated != source:
        open(path, "w", encoding="utf-8").write(updated)
        print("patched", path)

print("replacements:", total)

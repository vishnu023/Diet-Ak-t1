import re

with open("js_bundle.js", "r") as f:
    content = f.read()

# Let's find matches for "how-it-works"
matches = [m.start() for m in re.finditer("how-it-works", content)]

print(f"Found {len(matches)} matches for 'how-it-works'")
for idx, pos in enumerate(matches):
    start = max(0, pos - 2000)
    end = min(len(content), pos + 4000)
    print(f"\n--- MATCH {idx} (Position {pos}) ---")
    print(content[start:end])

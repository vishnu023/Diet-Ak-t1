with open("js_bundle.js", "r") as f:
    content = f.read()

# Let's search for "The Precision Loop" in the bundle to locate the stages array definitions.
# Let's find matches for "The Precision Loop" or "How DietCraft Works" and print the surrounding code (e.g. 5000 chars before and 2000 chars after)
import re
matches = [m.start() for m in re.finditer("The Precision Loop", content)]
for idx, pos in enumerate(matches):
    print(f"\n--- MATCH {idx} (Position {pos}) ---")
    start = max(0, pos - 15000)
    end = min(len(content), pos + 2000)
    print(content[start:end])

import re

with open("js_bundle.js", "r") as f:
    content = f.read()

# Let's search for text strings and print sections.
# Sections might contain keywords like: "Ecosystem", "Early Access", "Institutional Seed", "Partners", "DietCraft"
keywords = ["Ecosystem", "Prediabetic Population", "Series-A", "Founding Member", "Institutional Seed", "Early Spot"]

for kw in keywords:
    matches = [m.start() for m in re.finditer(kw, content, re.IGNORECASE)]
    print(f"Keyword: {kw} - Found {len(matches)} matches")
    for pos in matches:
        print(f"  Match at {pos}:")
        print(content[max(0, pos-300):min(len(content), pos+500)])
        print("-" * 40)

import re

with open("js_bundle.js", "r") as f:
    content = f.read()

# Search for `$x` or check if it's imported or defined
# Let's search for occurrences of "$x" with word boundaries or in general
matches = [m.start() for m in re.finditer(r"\$x\b", content)]
print(f"Matches for $x: {len(matches)}")
for pos in matches[:5]:
    print(content[pos-100:pos+100])
    print("-" * 30)

# Also let's find what is in Er component (the modal base wrapper)
pos_er = content.find("function Er")
if pos_er != -1:
    print(f"\nEr component found at {pos_er}")
    print(content[pos_er:pos_er+1500])

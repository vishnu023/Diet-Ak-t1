import re

with open("js_bundle.js", "r") as f:
    content = f.read()

icons = ["jr", "YS", "JS"]
for ic in icons:
    matches = [m.start() for m in re.finditer(rf"\b{ic}\s*=\s*", content)]
    print(f"Icon variable '{ic}': {len(matches)} assignments")
    for pos in matches:
        print(f"  {content[pos:pos+120]}")

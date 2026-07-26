import re

with open("js_bundle.js", "r") as f:
    content = f.read()

pos = content.find("s0=")
if pos != -1:
    print(content[pos:pos+200])
else:
    print("s0= not found, trying word boundaries")
    matches = [m.start() for m in re.finditer(r"\bs0\b", content)]
    for p in matches[:5]:
        print(content[p-20:p+100])

with open("js_bundle.js", "r") as f:
    content = f.read()

pos = content.find("S5=")
if pos != -1:
    print("S5 definition:")
    print(content[pos:pos+200])
else:
    print("S5= not found, searching word boundary")
    import re
    matches = [m.start() for m in re.finditer(r"\bS5\b", content)]
    for p in matches[:5]:
        print(content[p-20:p+100])

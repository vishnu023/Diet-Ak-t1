with open("js_bundle.js", "r") as f:
    content = f.read()

pos = content.find("kS=")
if pos != -1:
    print("kS definition:")
    print(content[pos:pos+200])
else:
    print("kS= not found, searching word boundary")
    import re
    matches = [m.start() for m in re.finditer(r"\bkS\b", content)]
    for p in matches[:5]:
        print(content[p-20:p+100])

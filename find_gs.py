with open("js_bundle.js", "r") as f:
    content = f.read()

pos = content.find("GS=")
if pos != -1:
    print("GS definition:")
    print(content[pos:pos+200])
else:
    print("GS= not found, searching word boundary")
    import re
    matches = [m.start() for m in re.finditer(r"\bGS\b", content)]
    for p in matches[:5]:
        print(content[p-20:p+100])

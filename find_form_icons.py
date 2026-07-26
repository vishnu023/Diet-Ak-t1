with open("js_bundle.js", "r") as f:
    content = f.read()

for icon_var in ["e0", "ZS", "z5", "O5", "Yu"]:
    pos = content.find(f"{icon_var}=")
    if pos != -1:
        print(f"{icon_var} definition:")
        print(content[pos:pos+200])
    else:
        print(f"{icon_var}= not found, searching word boundary")
        import re
        matches = [m.start() for m in re.finditer(rf"\b{icon_var}\b", content)]
        for p in matches[:5]:
            print(content[p-20:p+100])

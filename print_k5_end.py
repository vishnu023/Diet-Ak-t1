with open("js_bundle.js", "r") as f:
    content = f.read()

pos = content.find("function K5")
if pos != -1:
    print(content[pos+3200:pos+5500])

with open("js_bundle.js", "r") as f:
    content = f.read()

pos = content.find("function Q5")
if pos != -1:
    print(content[pos+2200:pos+3800])

with open("js_bundle.js", "r") as f:
    content = f.read()

pos = content.find("function K5")
if pos != -1:
    print(content[pos+13000:pos+15500])

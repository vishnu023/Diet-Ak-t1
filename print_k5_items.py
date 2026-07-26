with open("js_bundle.js", "r") as f:
    content = f.read()

pos = content.find("function K5")
if pos != -1:
    print("Found K5")
    # Print the array r inside K5 and the rest of the component
    print(content[pos:pos+4500])

with open("js_bundle.js", "r") as f:
    content = f.read()

# Locate "function X5" and dump 2500 characters after it
pos = content.find("function X5")
if pos != -1:
    print(f"Found X5 at {pos}")
    with open("x5_dump.txt", "w") as out:
        out.write(content[pos:pos+3000])
else:
    print("X5 not found")

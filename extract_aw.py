with open("js_bundle.js", "r") as f:
    content = f.read()

# Dump from 463800 to the end of the file
start = 463800
end = len(content)
with open("aw_dump.txt", "w") as out:
    out.write(content[start:end])

print(f"Written aw dump to aw_dump.txt ({end - start} characters)")

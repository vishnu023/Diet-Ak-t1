with open("js_bundle.js", "r") as f:
    content = f.read()

# Dump W5
start = 437651
end = 454800
with open("w5_dump.txt", "w") as out:
    out.write(content[start:end])

print(f"Written W5 dump to w5_dump.txt ({end - start} characters)")

with open("js_bundle.js", "r") as f:
    content = f.read()

# Dump Q5 and K5
start = 374000
end = 395000
with open("q5_k5_dump.txt", "w") as out:
    out.write(content[start:end])

print(f"Written Q5 and K5 dump to q5_k5_dump.txt ({end - start} characters)")

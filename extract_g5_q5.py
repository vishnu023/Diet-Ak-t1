with open("js_bundle.js", "r") as f:
    content = f.read()

# Dump G5 and q5
start = 344000
end = 359000
with open("g5_q5_dump.txt", "w") as out:
    out.write(content[start:end])

print(f"Written G5 and q5 dump to g5_q5_dump.txt ({end - start} characters)")

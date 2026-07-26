with open("js_bundle.js", "r") as f:
    content = f.read()

# Dump around the Q5 nodes array
start = 371000
end = 376500
with open("q5_nodes_dump.txt", "w") as out:
    out.write(content[start:end])

print(f"Written Q5 nodes dump to q5_nodes_dump.txt ({end - start} characters)")

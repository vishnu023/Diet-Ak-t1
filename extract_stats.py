with open("js_bundle.js", "r") as f:
    content = f.read()

# Dump around the PCOS Risk and stats area
start = 358500
end = 363500
with open("stats_dump.txt", "w") as out:
    out.write(content[start:end])

print("Written stats dump to stats_dump.txt")

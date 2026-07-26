with open("js_bundle.js", "r") as f:
    content = f.read()

# Let's extract from position 355000 to 373000 where the stages list is located
start = 350000
end = 373000
with open("stages_dump.txt", "w") as out:
    out.write(content[start:end])

print("Written dump to stages_dump.txt")

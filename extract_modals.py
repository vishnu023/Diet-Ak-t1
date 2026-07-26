with open("js_bundle.js", "r") as f:
    content = f.read()

# Dump from 435000 to the end of the file
start = 435000
end = len(content)
with open("modals_dump.txt", "w") as out:
    out.write(content[start:end])

print(f"Written modals dump to modals_dump.txt ({end - start} characters)")

with open("js_bundle.js", "r") as f:
    content = f.read()

# Dump around the founding member form area
start = 405000
end = 422000
with open("form_dump.txt", "w") as out:
    out.write(content[start:end])

print("Written form dump to form_dump.txt")

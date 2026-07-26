with open("js_bundle.js", "r") as f:
    content = f.read()

# Dump around the form render area
start = 418000
end = 435000
with open("form_detail_dump.txt", "w") as out:
    out.write(content[start:end])

print("Written form detail dump to form_detail_dump.txt")

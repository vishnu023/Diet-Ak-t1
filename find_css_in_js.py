import re

with open("js_bundle.js", "r") as f:
    content = f.read()

# Let's search for any strings resembling CSS injection, like __vite_insert_css or similar, or styles.
css_matches = re.findall(r'(\/\*\* \* @license[\s\S]*?\*\/)?\s*(const|let|var)\s+\w+\s*=\s*`[\s\S]*?`', content)
print("Let's search for general large multi-line template literals:")
for match in css_matches:
    val = match[2] if len(match) > 2 else match[0]
    if "body" in val or "color" in val or "font-family" in val or "tailwind" in val:
        print(val[:500])

print("\nSearching for @import or @theme in strings:")
for m in re.finditer(r'"[^"\n]*?@theme[^"\n]*?"', content):
    print(content[m.start():m.end()])

# Let's search for any CSS in files in the directory
import os
for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".css"):
            print("CSS file found:", os.path.join(root, file))

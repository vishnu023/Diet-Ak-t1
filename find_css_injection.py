with open("js_bundle.js", "r") as f:
    content = f.read()

import re

# Search for style injection or style tags
matches = re.finditer(r'document\.createElement\("style"\)', content)
for i, m in enumerate(matches):
    start = max(0, m.start() - 100)
    end = min(len(content), m.end() + 2000)
    print(f"Match {i+1}:")
    print(content[start:end])

# Also search for style/css content
css_blocks = re.findall(r'styleTag\.textContent\s*=\s*["`]([^"`]+)["`]', content)
print(f"Found {len(css_blocks)} textContent CSS blocks")
for block in css_blocks:
    print(block[:500])

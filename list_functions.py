with open("js_bundle.js", "r") as f:
    content = f.read()

# Let's search for function definitions after pos 390000
import re
functions = [m.start() for m in re.finditer(r"function\s+[a-zA-Z0-9_]+\s*\(", content)]
print(f"Total function definitions found: {len(functions)}")

for pos in functions:
    if pos >= 390000:
        # Print function header and first 100 characters
        print(f"Function at {pos}: {content[pos:pos+150]}...")

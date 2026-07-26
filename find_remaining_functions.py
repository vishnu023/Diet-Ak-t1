with open("js_bundle.js", "r") as f:
    content = f.read()

import re
funcs = ["G5", "q5", "Q5", "K5"]
for fn in funcs:
    matches = [m.start() for m in re.finditer(rf"function\s+{fn}\b", content)]
    print(f"Function {fn}: found {len(matches)} matches")
    for pos in matches:
        print(f"  At {pos}: {content[pos:pos+250]}...")

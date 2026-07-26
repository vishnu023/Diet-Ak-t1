import re

with open("js_bundle.js", "r") as f:
    content = f.read()

# Let's search for assignments or references to find what icons they map to.
# Lucide icons are often defined or imported as: "import { ... } from 'lucide-react'"
# Let's see if we can find declarations like "const Ss = " or look up Lucide icon names in the file.
# Let's write a regex that matches lucide icons or exports.
# Let's search for where 'lucide' or 'lucide-react' appears or find references to the icon components.
import_matches = [m.start() for m in re.finditer("lucide-react", content)]
print(f"lucide-react keyword matches: {len(import_matches)}")

# Let's search for the actual definition of some icons
icons = ["Ss", "Cs", "Gu", "a0", "Zu", "i0", "n0", "Xu", "pi", "Zy", "qu", "Wx", "Qy", "$x", "o5", "sn", "nn", "Jt", "T5", "Ms", "g5", "l5", "m5"]
for ic in icons:
    matches = [m.start() for m in re.finditer(rf"\b{ic}\s*=\s*", content)]
    print(f"Icon variable '{ic}': {len(matches)} assignments")
    for pos in matches[:2]:
        print(f"  {content[pos:pos+150]}")

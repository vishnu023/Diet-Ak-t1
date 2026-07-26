import re

with open("js_bundle.js", "r") as f:
    content = f.read()

# Let's search for "Q5" and find the list "r = [" inside it
pos = content.find("function Q5")
if pos != -1:
    print("Found Q5")
    # print the array r inside Q5
    print(content[pos:pos+2500])

with open("modals_dump.txt", "r") as f:
    content = f.read()

# Print characters from 12000 to 25000
start = 12000
end = min(len(content), 26000)
with open("modals_detail_dump.txt", "w") as out:
    out.write(content[start:end])

print(f"Written detailed modals dump to modals_detail_dump.txt ({end - start} characters)")

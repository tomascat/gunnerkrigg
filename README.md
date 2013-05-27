#Gunnerkrigg Online Searchable Site

Files for the online searchable Gunnerkrigg Court site: http://www.louisxiv.co.uk/gunnerkrigg/
Index.txt when on the site is parsed into HTML by a python script

##Format

###Index of pages - Index.txt

- The comics are in reverse order
- Each comic is on a separate line, starting with the page number (look at the URL of the comic and find the number at the end)
- Each item is separated by tab-spacing
- The tags are in alphabetical order and include relevant locations, characters, symbols and items
- Page titles are preceded by "#"
- The order is [page number] [tag] [tag] ... [comment] [page title]
- Covers are simply: [page number] Cover #&lt;hr&gt;[Title of cover]&lt;/hr&gt;
- Bonus pages are: [page number] Bonus [tags] #&lt;hr&gt;[What is in the bonus page]&lt;/hr&gt;

###Tags & descriptions - Alltags.txt

- The tags are in alphabetical order
- Each tag is on a separate line
- The tag and its description are separated by tab-spacing: [tag] [description]
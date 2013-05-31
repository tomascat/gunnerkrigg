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
- Covers are simply: [page number] Cover #&lt;hr&gt;[Title of cover]&lt;hr&gt;
- Bonus pages are: [page number] Bonus [tags] #&lt;hr&gt;Bonus Page: [What is in the bonus page]&lt;hr&gt;

eg:
<pre><code>16	Bonus	Blackboard	Chester	Foley	Queslett	Tea	Thornhill	#&lt;hr&gt;Bonus Page: Houses at Gunnerkrigg Court&lt;hr&gt;
15	Annie	Bridge	Gillitie	Teacher	#Sorry sir. I got lost.
14	Bridge	Gillitie	Robot	Shadow	Shadowmen	#Here you go little buddie!
13	Bridge	Robot	Shadow	TicToc	#Oh look! A birdie!
12	Annie	Bridge	Robot	Shadow	#Never fear little guy. I have this under control!
11	Annie	Bridge	Robot	Shadow	#Once darkness fell, Shadow 2, Robot and I got ready at the foot of the bridge
10	Annie	Bridge	Robot	Shadow	#Together the three of us returned to the bridge
9	Annie	Robot	Shadow	#Luckily, piecing the contraption together was relatively easy
8	Annie	Shadow	Library	#Snatching a nearby box of spare parts
7	Annie	Shadow	Library	#I hadn’t the first idea how to build a robot
6	Annan	Annie	Shadow	#I must construct a robotic walking device
5	Annan	Annie	Bridge	Gillitie	Shadow	#Gunnerkrigg Court is a boarding school
4	Annie	Shadow	#Where are you trying to go?
3	Annie	Shadow	#At times I would ssee this creature jump from shadow to shadow
2	Annie	Shadow	#Gunnerkrigg Court does not look much like a school at all
1	Annie	Cover	#&lt;hr&gt;Chapter 1: The Shadow and The Robot&lt;hr&gt;
</code></pre>

###Tags & descriptions - Alltags.txt

- The tags are in alphabetical order
- Each tag is on a separate line
- The tag and its description are separated by tab-spacing: [tag] [description]

eg:
<pre><code>AnimalCells	the secret Court large animal holding cells
AnimalLab	a Court research lab
Anja	Anja Donlan, Kat's mother
Annan	Annan Waters, a wide river in a deep gorge
Annie	Antimony Carver, our protagonist
AntimonySymbol	The alchemical symbol for antimony; associated with Annie and Surma
Basil	Minotaur
BeckyGround	A student
BismuthSymbol	The alchemical symbol for bismuth; associated with the Court
Blush	happy/embarrassed
Bob	Bob Sutton, a gardener/maintainer of artificial habitats and keeper of Young's Park with his wife, Marcia
Bobbie	A robot at the AnimalLab
Bonus	Extra pages at the end of the chapter
Bridge	over the Annan Water to Gillitie Wood
Brinnie	Sultry childhood friend of Surma, Anja, Donny, Eggers & co.
Chickcharney	see Hardwick & Little’s Bestiary, p65
CherryTree	Comes as advertised
Chester	One of the other school Houses
Circus	creepy and filled with clowns
Classroom	Where they have classes
Clowns	creepy, no-one likes them
</code></pre>
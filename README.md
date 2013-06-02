#Gunnerkrigg Online Searchable Site
Files for the online searchable Gunnerkrigg Court site: http://www.louisxiv.co.uk/gunnerkrigg/
Index.txt is parsed into HTML by a python script

##Getting Started
Please send me a PM on the <a href="http://gunnerkrigg.proboards.com/">forums</a> or reply to the <a href="http://gunnerkrigg.proboards.com/thread/1883/searchable-database-comics?page=1">forum post</a> if you want to get involved and we can get you started.

For more information see the <a href="https://github.com/snipergirl/gunnerkrigg/wiki">Wiki</a> for this project

###Tagging guide
- What to tag? Anything relevant that can be seen in the page that people might want to search for
- The top priority is to tag all the characters, settings and important props; other things can be added later if you're not sure
- It's best to use tags that already exist (check alltags.txt) if possible. If you need to add a new tag, add it to alltags.txt at the same time with a description; use tags such as "GoodHope" rather than "GoodHopeHospital" as tags can be described
- At the moment, just tag characters who are seen (in the main action, flashbacks, memories), rather than mentioned (this may change)
- Important props/items such as the blinker stone need to be tagged
- Recurring characters should be tagged by name or a specific description if possible; generic characters should be referred to as "teacher" or "students" or "LaserCow"
- If you can tag things like alchemical symbols that would be very useful. If you are not sure what a symbol is, tag it as "symbol" and make a new post on the forum and ask- there are a lot of knowledgeable people out there!
- The forum, tvtropes and the Gunnerkrigg Wiki (gunnerkrigg.wikia.com) are invaluable for information on who and what exists in the comic
- At the moment we are not tagging the cover pages however this might change
- Treatises are obviously full of tag-material! Have a go and we'll all contribute further tags as necessary

###Starting with GitHub
- First you need one of us (probably me) to give you access to the repo. Please send me a PM on the <a href="http://gunnerkrigg.proboards.com/">forums</a> or reply to the <a href="http://gunnerkrigg.proboards.com/thread/1883/searchable-database-comics?page=1">forum post</a> if you want access.
- You can either edit the files directly on the website and commit changes that way or:
- You can download a program for win/mac/linux
- Install it and run it
- Sign in and click on your username below "github" on the far left of the program
- Click on the repository in the middle that you want (snipergirl/gunnerkrigg) and click 'clone'; that will give you a copy on your computer.
- Then edit the files yourself
- When you are ready to submit your changes, save the file
- Go into your github program, which will show that you have unsaved changes in whichever file(s)
- Put in a commit message about what you have done in the right hand area and click "commit"
- Then click "sync" and it should upload.
- This is also a tutorial about Git in general: try.github.io/levels/1/challenges/1

##Format

###Index of pages - Index.txt
- The comics are in reverse order
- Each comic is on a separate line, starting with the page number (look at the URL of the comic and find the number at the end)
- Each item is separated by tab-spacing
- The tags are in alphabetical order and include relevant locations, characters, symbols and items
- Page titles are preceded by "#"
- The order is [page number] [tag] [tag] ... [comment] [page title]
- Covers are simply: [page number] Cover #&lt;hr&gt;[Title of cover]&lt;hr&gt;
- Bonus pages are: [page number] Bonus [tags] #&lt;b&gt;Bonus Page:&lt;/b&gt; [What is in the bonus page]&lt;hr&gt;
eg:
<pre><code>16	Bonus	Blackboard	Chester	Foley	Queslett	Tea	Thornhill	#&lt;b&gt;Bonus Page:&lt;/b&gt; Houses at Gunnerkrigg Court&lt;hr&gt;
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
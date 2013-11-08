#! python
# -*- coding: utf-8 -*-

import collections
import codecs
import urllib
import re

#initialise variables
toWrite = []
tagCloud = collections.Counter()
pageDescriptions = {}
tagDescriptions = {}

#get how many comics exist from the newest page
result = re.search("/comics/([0-9]*).jpg", urllib.urlopen("http://gunnerkrigg.com").read())
numberOfComics = int(result.group(1)) + 1

#add the heading html
with codecs.open('headingtaghelper.txt','r', "utf-8-sig") as fheading:
	toWrite.append(fheading.read())

#populate the comic page descriptions from the last entry in index.txt
with codecs.open('index.txt','r', "utf-8-sig") as findex:
	for line in findex:
		if line.startswith(";"):
			continue;
		field = line.split("\t")
		pageDescriptions[int(field[0])] = field[-1][1:-1]

#create the dropdown comic selection with the comic number & description
for x in reversed(xrange (1,numberOfComics)):
	toWrite.append("\n\t\t<option value='"+str(x)+"'>"+str(x))
	if (x in pageDescriptions):
		toWrite.append(": "+pageDescriptions[x])
	toWrite.append("</option>")

#create the text input and 'copy to clipboard' button, the prev/next buttons, the comic div and the start of the tag section
toWrite.append("</select><br /><br />" +
	"\n\t\t\t Description: <input type='text' id='tocopy'><input type='submit' class='copyit' value='Copy To Clipboard' data-clipboard-target='tocopy'>" +
	"\n\t\t</div>\n\t\t<div id='comics'>" +
	"\n\t\t\t<span class='previous'><< Previous</span> <span class='next'>Next >></span>" +
	"\n\t\t\t<div class='comic'></div>\n\t\t</div>\n\t\t<div id='tags'>\n\t\t\t<div id='current'>")

#populate the tag dictionary
with codecs.open("alltags.txt","r", "utf-8-sig") as ftags:
	for line in ftags:
		if line.startswith(";"):
			continue;
		field = line.split("\t")
		tagDescriptions[field[0]]=field[1]

#populate the tagcloud counter and output the 'current comic tags' section
with codecs.open('index.txt','r', "utf-8-sig") as findex:
	for line in findex:
		if line.startswith(";"):
			continue;
		field = line.split("\t")
		tagCloud.update(field[1:-1])
		for i in range(1,len(field)-1):
			tagItem = field[i].lower()
			toWrite.append("\n\t\t\t<span class='tag hidden "+tagItem+" "+field[0]+"'")
			if field[i] in tagDescriptions:
				toWrite.append(" title='"+tagDescriptions[field[i]][:-1]+"'")
			toWrite.append(">"+field[i]+"</span>")

#end the 'current comic tags' and start the tag list section, starting with the recent tags section
toWrite.append("\n\t\t</div>\n\t\t<div id='cloud'>\n\t\t\t<div class='recent'>Recent Tags: </div>")

#output the 30 most common tags
for (key,counter) in tagCloud.most_common(30):
	print key + str(counter)
	toWrite.append("\n\t\t\t<span class='tagcloud "+key+"'")
	if key in tagDescriptions:
		toWrite.append(" title='"+tagDescriptions[key][:-1]+"'")
	toWrite.append(">"+key+"("+str(counter)+") </span> ")
toWrite.append("<br />")

#initialise the alphabetical start character variable for the loop; output alphabetically sorted tags
startCharOld = ""
for tag in sorted(tagCloud):
	if tag:
		if ord(tag.upper()[0]) != startCharOld:
			toWrite.append("<br />"+tag.upper()[0]+": ")
		toWrite.append("\n\t\t\t<span class='tagcloud "+tag+"'")
		if tag in tagDescriptions:
			toWrite.append(" title='"+tagDescriptions[tag][:-1]+"'")
		toWrite.append(">"+tag+"("+str(tagCloud[tag])+") </span> ")
		startCharOld = ord(tag.upper()[0])

#add the ending html
with codecs.open('endingtaghelper.txt','r', "utf-8-sig") as fending:
	toWrite.append(fending.read())

#convert the toWrite array to a string and write that string to taghelper.htm
s = ''.join(toWrite)
with codecs.open("taghelper.htm","w", "utf-8") as ftagged:
	ftagged.write(s)
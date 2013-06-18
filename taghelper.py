#! python
# -*- coding: utf-8 -*-

import string
import urllib
import collections
import re
import math

toWrite = []
tagCloud = collections.Counter()
pageDescriptions = [None]*1211

with open('headingtaghelper.txt','r') as fheading:
	for line in fheading:
		toWrite.append(line)

with open('index.txt','r') as findex:
	for line in findex:
		field = line.split("\t")
		pageDescriptions[int(field[0])] = field[-1][1:]

for x in xrange (1,1211):
	toWrite.append("\n\t\t<option value='"+str(x)+"'>"+str(x))
	if (pageDescriptions[x]):
		toWrite.append(": "+pageDescriptions[x])
	toWrite.append("</option>")

toWrite.append("</select><br /><br />\n\t\t\t Description: <input type='text' id='tocopy'><input type='submit' class='copyit' value='Copy To Clipboard' data-clipboard-target='tocopy'>\n\t\t</div>\n\t\t<div id='comics'>\n\t\t\t<span class='previous'><< Previous</span> <span class='next'>Next >></span>\n\t\t\t<div class='comic'></div>\n\t\t</div>\n\t\t<div id='tags'>\n\t\t\t<div id='current'>")

with open('index.txt','r') as findex:
	for line in findex:
		field = line.split("\t")
		tagCloud.update(field[1:-1])
		for i in range(1,len(field)-1):
			tagItem = field[i].lower()
			toWrite.append("\n\t\t\t<span class='tag hidden "+tagItem+" "+field[0]+"'>"+field[i]+"</span>")

toWrite.append("</div><div id='cloud'>")

for (key,counter) in tagCloud.most_common(30):
	print key + str(counter)
	toWrite.append("\n\t\t\t<span class='tagcloud "+key+"' data-size='"+str(math.trunc(8*(math.log10(counter)+1)))+"'>"+key+"("+str(counter)+") </span> ")

toWrite.append("<br />")

startCharOld = ""

for tag in sorted(tagCloud):
	if tag:
		if ord(tag.upper()[0]) != startCharOld:
			toWrite.append("<br />"+tag.upper()[0]+": ")
		toWrite.append("\n\t\t\t<span class='tagcloud "+tag+"' data-size='"+str(math.trunc(8*(math.log10(tagCloud[tag])+1)))+"'>"+tag+"("+str(tagCloud[tag])+") </span> ")
		startCharOld = ord(tag.upper()[0])

toWrite.append("")
	
with open('endingtaghelper.txt','r') as fending:
	for line in fending:
		toWrite.append(line)

s = ''.join(toWrite)

with open("taghelper.htm","w") as ftagged:
	ftagged.write(s)
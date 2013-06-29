#! python
# -*- coding: utf-8 -*-

import collections
import math
import codecs

toWrite = []
tagCloud = collections.Counter()

with codecs.open('index.txt','r',"utf-8-sig") as findex:
	for line in findex:
		field = line.split("\t")
		tagCloud.update(field[1:-1])

for tag in sorted(tagCloud):
	toWrite.append("<span class='tagcloud' style='font-size:"+str(math.trunc(8*(math.log10(tagCloud[tag])+1)))+"'>"+tag+"("+str(tagCloud[tag])+")</span> \n")

s = ''.join(toWrite)
with codecs.open("tagcloud.htm","w","utf-8") as ftag:
	ftag.write(s)
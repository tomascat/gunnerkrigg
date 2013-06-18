#! python
# -*- coding: utf-8 -*-

import string
import urllib
import collections
import re
import math

toWrite = []
tagCloud = collections.Counter()

with open('index.txt','r') as findex:
	for line in findex:
		field = line.split("\t")
		tagCloud.update(field[1:-1])

for tag in sorted(tagCloud):
	toWrite.append("<span class='tagcloud' style='font-size:"+str(math.trunc(8*(math.log10(tagCloud[tag])+1)))+"'>"+tag+"("+str(tagCloud[tag])+")</span> \n")

s = ''.join(toWrite)
with open("tagcloud.htm","w") as ftag:
	ftag.write(s)
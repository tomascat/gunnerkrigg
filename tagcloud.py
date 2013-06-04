#! python
# -*- coding: utf-8 -*-

import string
import urllib
import collections
import re
import math

toWrite = []
words = re.findall('\t([a-zA-Z0-9]*)\t', urllib.urlopen('https://raw.github.com/snipergirl/gunnerkrigg/master/index.txt').read())
tagCloud = collections.Counter(words)

for tag in sorted(tagCloud):
	toWrite.append("<span class='tagcloud' style='font-size:"+str(math.trunc(8*(math.log10(tagCloud[tag])+1)))+"'>"+tag+"("+str(tagCloud[tag])+")</span> \n")

s = ''.join(toWrite)
with open("tagcloud.htm","w") as ftag:
	ftag.write(s)
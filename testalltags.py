#! python
# -*- coding: utf-8 -*-

import string
import collections
import codecs
import re

a = 0

with codecs.open("alltags.txt","r", "utf-8-sig") as ftags:
	for line in ftags:
		a += 1
		if not(re.search("\t",line)):
			print a
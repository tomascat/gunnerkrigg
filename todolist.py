#! python
# -*- coding: utf-8 -*-

import codecs

last = None

toWrite=[]


with codecs.open('index.txt',"r","utf-8-sig") as f:
	for line in f:
		new = int(line.split('\t', 1)[0])
		if last is not None:
			if last - new > 1:
				if last - new == 2:
					toWrite.append((new+1)+"\n")
					# toWrite.append("\n")
					# print new + 1
				else:
					toWrite.append('%d-%d' % (new + 1, last - 1) + ": Starting here ")
					toWrite.append('http://www.gunnerkrigg.com/?p=' + str(new + 1) + "\n")
					# print '%d-%d' % (new + 1, last - 1)
				# print 'http://www.gunnerkrigg.com/?p=' + str(new + 1)
		last = new

s = ''.join(toWrite)

with open('todo.txt',"w") as ftodo:
	ftodo.write(s)

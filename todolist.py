#! python
# -*- coding: utf-8 -*-

import codecs

last = None
linecount=0
toWrite=[]


with codecs.open('index.txt',"r","utf-8-sig") as f:
	for line in f:
		new = int(line.split('\t', 1)[0])
		if last is not None:
			if last - new > 1:
				if last - new == 2:
					toWrite.append(str(new+1)+"\n")
					# toWrite.append("\n")
					# print new + 1
				else:
					toWrite.append('%d-%d' % (new + 1, last - 1) + ": Starting here ")
					toWrite.append('http://www.gunnerkrigg.com/?p=' + str(new + 1) + "\n")
					# print '%d-%d' % (new + 1, last - 1)
				# print 'http://www.gunnerkrigg.com/?p=' + str(new + 1)
		else:
			maxvalue=new;
		last = new
		linecount+=1
	toWrite.append("\n"+str(linecount)+"/"+str(maxvalue)+" comics transcribed = "+str(int(linecount*100/maxvalue))+"%")

s = ''.join(toWrite)

with codecs.open('todo.txt',"w","utf-8") as ftodo:
	ftodo.write(s)

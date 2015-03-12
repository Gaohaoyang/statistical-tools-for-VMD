# VMD统计工具
## 什么是VMD？
> * Visual Molecular Dynamics(VMD) is a molecular modelling and visualization computer program. 来自[维基百科](http://en.wikipedia.org/wiki/Visual_Molecular_Dynamics)。
> * VMD的官方网站：[http://www.ks.uiuc.edu/Research/vmd/](http://www.ks.uiuc.edu/Research/vmd/)

这里我们对VMD不深入讨论。只讲本工具处理数据的过程。
## 统计怎样的数据？
* 我们所统计的数据结构如下图：  
	可以看到从**第10行**开始，数据结构非常规整。  
	文件名： Helix_X_dssp.txt  
	```txt
	# VMD Timeline data file
	# CREATOR= HAN
	# MOL_NAME= {I:\Gromacs\2OBD\2OBD_CRYSTAL_01\md2.pdb}
	# DATA_TITLE= struct
	# FILE_VERSION= 1.4
	# NUM_FRAMES= 10002 
	# NUM_ITEMS= 12
	# FREE_SELECTION= 0
	#
	465 X emptyval 0 H
	466 X emptyval 0 H
	467 X emptyval 0 H
	468 X emptyval 0 H
	469 X emptyval 0 H
	470 X emptyval 0 H
	471 X emptyval 0 H
	472 X emptyval 0 H
	473 X emptyval 0 H
	474 X emptyval 0 C
	475 X emptyval 0 C
	476 X emptyval 0 C
	...
	...
	...
	```

* **本应用可以统计出两个结果：**  
1.txt 文件的总行数。  
2.第一列的数字和最后一列的字母组合出现的行数。（这正是你所想要的结果！）

## 使用方法

## 核心算法



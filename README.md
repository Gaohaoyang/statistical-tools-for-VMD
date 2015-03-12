# VMD统计工具
## 什么是VMD？
> * Visual Molecular Dynamics(VMD) is a molecular modelling and visualization computer program. 来自[维基百科](http://en.wikipedia.org/wiki/Visual_Molecular_Dynamics)。
> * VMD的官方网站：[http://www.ks.uiuc.edu/Research/vmd/](http://www.ks.uiuc.edu/Research/vmd/)

这里我们对VMD不深入讨论。只讲本工具处理数据的过程。
## 统计怎样的数据？
* 我们所统计的数据结构如下：  
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

* **本工具可以统计出两个结果：**  

1. txt 文件的总行数。  
2. **第一列的数字和最后一列的字母组合出现的行数**。（*这正是你所想要的结果！*）  
例如：`466和H组合出现行数：7633`  

> 注：本工具是离线应用，下载后不用联网即可使用。  

## 使用方法 

### 下载  

当前版本1.2.0  

可以直接在github上下载所有源文件使用。通过clone等方式  
或直接点击 [DownLoad ZIP](https://github.com/Gaohaoyang/statistical-tools-for-VMD/archive/master.zip) 下载使用  

### 使用  

#### 目录结构
```
.
├── css
├── fonts
|   ├── bootstrap.min.css
|	├── fileinput.min.css
|   └── index.css
├── js
|   ├── jquery-1.11.1.min.js
|   ├── fileinput.min.js
|	├── bootstrap.min.js
|   └── index.js
├── pics
|
├── files
|   ├── a.txt
|   └── Helix_X_dssp.txt
└── index.html
```   

#### 使用方法  

1. 将待统计的txt数据文件放到`files`目录下，如: `a.txt`  
2. 打开`index.html`  

> **注意**：只能用**`FireFox`, `IE9+`**打开，不支持**`Chrome`, `Opera`**
> > 这是因为浏览器的安全性导致不能访问本地文件  
>
> 使用IE可能会提示已限制此网页运行脚本或ActiveX控件，请点击允许阻止的内容，即可  
> ![allow](http://7q5cdt.com1.z0.glb.clouddn.com/statistical-tool-for-VMDallow.png)  

3. 在左侧相关信息中，文件选择（**只能选择`files`目录下的`txt`文件**，这是因为浏览器的安全性导致的），输入数字（如：465），输入字母（**注意大小写**，如：H）  
4. 点击开始统计，即可在右侧看到结果，如果结果有误或软件bug请速速与我联系！  
![UI](http://7q5cdt.com1.z0.glb.clouddn.com/statistical-tool-for-VMDUI.jpg)

## 核心算法  
简单的说就是： 

1. 先使用`Ajax`将文件读取进来，由于是读取客户端文件，所以有很多限制，比如`Chrome`不支持等。   
2. 将`txt`文件以换行符和回车符分割为数组   
3. 在数组的每个元素中查看索引以0开始的位置是否是用户输入的数字，同时再查看索引为`length-1`的位置是否为用户输入的字母   
4. 若2中两个条件均满足，则计数器+1   

## 联系我
> * Email: gaohaoyang126@126.com
> * [Weibo](http://weibo.com/3115521wh)
> * [知乎](http://www.zhihu.com/people/gao-hao-yang-7)

#####此为nodeschool提供的learnyounode 
* 提供node的闯关式学习
* 考验你的英语和理解能力
* 很有价值

首先，需要确保装了node，然后安装learnyounode
> npm install -g learnyounode  

然后，键入learnyounode 开始进行作业  
这里的格式主要我按关卡进行了目录分类
每个目录下有主要的程序文件program.js  
检验闯关时，
> learnyounode verify program.js  

如果只是debug，就直接node program.js 如果需要参数，还要自己手动加，验证才是自动为你提供参数来测试的。  

里面主要用到的第三方库，需要npm install 安装，没有网络的话，请看提示  
主要有 bl path through2-map  

1.不解释
2.接收参数
3.学习用lib库，如何引入和调用,同时也是文件操作的学习
4.回调函数
5.fs 的获取目录内文件
6.建立自己的module
7.http模块，提供访问url的api
8.管道的使用
9.对三个url进行数据处理并输出
10.开启server socket
11.监听端口，读取执行文件内容传入到响应对象中
12.开启一个server监听指定的端口号
13.做一个简易的api调用接口

主要见解，我写在注释里了，如果有理解偏差，我再改改！
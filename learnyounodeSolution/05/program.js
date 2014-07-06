/*
第五关：
fs 的获取目录内文件
readdir 接收目录路径名，和回调函数
回调函数参数 err, list
list即获取的文件名数组

次关的需求是：在指定的目录下打印出指定的文件后缀名的文件名
*/
var fs = require('fs');
var buf = fs.readdir(process.argv[2],function(err, list){
  for(var i=0; i<list.length; i++){
  	if(list[i].indexOf('.'+process.argv[3])>-1){
		console.log(list[i]);
	}
  }
});

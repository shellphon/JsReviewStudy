/*
第四关其实是第三关同一个需求的不同实现
但其实这次考验的关键点是关于回调函数
readFile 接收两个参数：一个是文件路径，一个是回调函数
回调函数参数为err,data
data即读取的文件内容对象，与第三关比较，此关的知识点是异步回调
*/
var fs = require('fs');
var buf = fs.readFile(process.argv[2], function(err, data){
 console.log(data.toString().split('\n').length-1);
});

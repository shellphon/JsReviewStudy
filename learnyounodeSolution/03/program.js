/*
第三关：实际是学习用lib库，如何引入和调用
同时也是文件操作的学习
fs readFileSync 方法接收一个文件路径（验证程序自动提供）
该方法会返回一个流对象
通过toString()可以转换为字符串

此关要求结果是计算文件内的行数。由于文件结尾通常也是回车，因此多了一行，计算时要减一
*/
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var str0 = str.split('\n');
console.log(str0.length-1);

/*
第八关：管道的使用
response和request都有pipe方法
通过pipe方法将响应对象传递给第三方库bl
bl通过回调函数将data参数进行数据处理

*/
var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function(response){
	response.pipe(bl(function(err, data){
		var str = data.toString();
		var s = str.split('');
		console.log(s.length);
		console.log(str);
	}));
});

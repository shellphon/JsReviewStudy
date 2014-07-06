/*
第七关：开始进入web时代了
http模块，提供访问url的api
http.get  的回调函数参数是响应对象；
响应对象绑定data事件，打印data信息
*/
var http = require('http');
http.get(process.argv[2], function(response){
	response.on('data', function(data){
		console.log(data.toString());
	});
});

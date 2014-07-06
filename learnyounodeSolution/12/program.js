/*
第12关：开启一个server监听指定的端口号，
对POST请求做出响应，将请求内容响应转为大写字母
运用到了pipe和第三方through2-map 
*/
var http = require('http'),
    map = require('through2-map');
var server = http.createServer(function(req, res){
	if(req.method != 'POST'){
		return res.end('send me a POST\n');
	}
	req.pipe(map(function(chunk){
		 return chunk.toString().toUpperCase();
	})).pipe(res);
});
server.listen(Number(process.argv[2]));

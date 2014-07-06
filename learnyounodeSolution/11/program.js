/*
第十一关：监听端口，读取执行文件内容传入到响应对象中

开始server
*/
var http = require('http'),
    fs = require('fs');
var server = http.createServer(function(req, res){
    var fileStream = fs.createReadStream(process.argv[3]);
    fileStream.pipe(res);
});
server.listen(Number(process.argv[2]));

/*
第十三关：做一个简易的api调用接口
对访问的url传入的查询字符串做时间转换，
返回json规范的字符串

//遇到问题，返回时不要加 \n 否则过不了验证
*/
var http = require('http'),
    url = require('url');
var server = http.createServer(function(req, res){
	if(req.method != 'GET'){
		return res.end('\n');
	}
	var urlObj = url.parse(req.url, true);
	if(urlObj.query.iso==undefined){
		return res.end();
	}
	var date = new Date(urlObj.query.iso);
	var obj = {};
	if(urlObj['pathname']=='/api/parsetime'){
		obj.hour = date.getHours();
		obj.minute= date.getMinutes();
		obj.second = date.getSeconds();
	}else if(urlObj['pathname']=='/api/unixtime'){
		obj.unixtime = date.getTime();
	}else{
		res.writeHead(404);
		res.end();		
	}
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(obj));

});
server.listen(Number(process.argv[2]));

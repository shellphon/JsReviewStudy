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

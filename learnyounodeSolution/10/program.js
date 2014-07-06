var net = require('net');
var server = net.createServer(function(socket){
	var now = new Date(),
	    month = now.getMonth()<9?'0'+(now.getMonth()+1):now.getMonth(), 
	    date = now.getDate()<10?'0'+now.getDate():now.getDate(),
	    hour = now.getHours()<10?'0'+now.getHours():now.getHours(),
	    minutes = now.getMinutes()<10?'0'+now.getMinutes():now.getMinutes();
	var data = now.getFullYear()+'-'+month+'-'+date+' '+hour+':'+minutes+'\n';
	socket.write(data);
	socket.end('');
	
});
server.listen(Number(process.argv[2]));

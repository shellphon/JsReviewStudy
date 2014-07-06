var http = require('http'),
    fs = require('fs');
var server = http.createServer(function(req, res){
    var fileStream = fs.createReadStream(process.argv[3]);
    fileStream.pipe(res);
});
server.listen(Number(process.argv[2]));

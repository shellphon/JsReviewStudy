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

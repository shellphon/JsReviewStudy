var fs = require('fs');
var buf = fs.readFile(process.argv[2], function(err, data){
 console.log(data.toString().split('\n').length-1);
});

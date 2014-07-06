var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var str0 = str.split('\n');
console.log(str0.length-1);

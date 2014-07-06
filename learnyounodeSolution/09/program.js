var http = require('http');
var bl = require('bl');
var urls = [],
    contents=[];
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);
function syncUrl(){
	if(urls.length==0){
	 for(var i=0; i<contents.length;i++){
	 	console.log(contents[i]);
	 }
		return ;
	}
	var url = urls.shift();
	http.get(url, function(response){
		response.pipe(bl(function(err, data){
			if(err){
			   return console.error(err);
			}
			// console.log(data.toString());
			contents.push(data.toString());
			syncUrl();
		}));
	});
}
 syncUrl();
 // console.log('data');

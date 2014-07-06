/*
第九关的概念是对三个url进行数据处理并输出，要求是按顺序
异步如何变成按顺序呢？
我的想法：在回调里执行下一个的逻辑
关卡给的答案思路：用一个标记来确认已经顺序回调处理了数据
*/
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

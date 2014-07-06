/*
module的格式
最后要用module.exports = xxx
实现逻辑实际用了fs，在回调中调用传进来的回调函数
*/
var fs = require('fs');
function filter(dir, ext, callback){
	fs.readdir(dir,function(err, list){
		if(err!=null){
			callback(err, null);
		}else{
//			console.log(list);
			for(var i=0; i<list.length;i++){
				if(list[i].indexOf('.'+ext)==-1){
					list.splice(i, 1);
					i--;
				}
			}
//			console.log(list);
				callback(null, list);
		}
	})
}	
module.exports = filter;

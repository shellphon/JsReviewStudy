/*
第六关：我们知道引用了，但我们要学会自己造轮子，自己用
本关关键知识点：
1.建立自己的module
2.module加入回调参数

这一关卡住我挺久的，主要是英语看不大明白。
这里我意识到了回调的实现：
function callhandle(args, callback){
	//do some thing
	callback(); //调用传入的实际回调业务逻辑
}
callhandle(1, function(){
	console.log('我会被callhandle调用哦~');
});

此关需求是，建立自己的module，module做文件后缀过滤，并且做好回调出错机制；
但是打印文件名不得在module内实现（即作为回调逻辑啊实现）
*/
var  m  = require('./mym');
m(process.argv[2], process.argv[3],function(err, data){
	if(err!=null){//err存在，则打印错误信息
		console.log(err);
	}else{
//		console.log(data);
		for(var i=0; i<data.length; i++){
			console.log(data[i]);
		}
	}
});


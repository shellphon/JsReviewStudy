/*
第二关是相当简单的接收参数，并对参数取总和打印
关键知识点是process.argv 表示执行命令
i.e.  node program.js 1 2 3
argv[0] = 'node'
argv[1] = 'program.js'
argv[2] = 1
也就是说一般运行参数都是从索引2开始取的
*/
var sum =0;
for(var i=2; i<process.argv.length; i++){
	sum+=parseInt(process.argv[i]);
}
console.log(sum);

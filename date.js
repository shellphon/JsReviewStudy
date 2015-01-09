/**
  about date type
  log-2015-01-09: 目前只有chrome支持parse 2014/10/10 12:12:12.0  即秒出现小数点的情形，ie和火狐暂时会NaN
*/

var now = new Date(); //new a date type object default for now
console.log("new Date():"+ now);

console.log("getDate():"+now.getDate()); // get the day number of one month : 1 - 31

console.log("getDay():"+now.getDay()); // get the day of a week:0~6
console.log("getMonth():"+now.getMonth());//get the month number of a year : 0-11
console.log("getFullYear():"+now.getFullYear()); //get the year
console.log("getHours():"+now.getHours());//0-23
console.log("getMinutes():"+now.getMinutes());//0-59
console.log("getSeconds():"+now.getSeconds());//0-59
console.log("getMilliseconds():"+now.getMilliseconds());//0-999
console.log("getTime():"+now.getTime());//from 1970 1 1  milliseconds
console.log("getTimezoneOffset():"+now.getTimezoneOffset());//minutes diff from GMT
//世界时
//console.log("getUTC date day month fullyear hours minutes seconds milliseconds:"+ now.getUTCDate()+" "+now.getUTCDay()+" "+ now.getUTCMonth()+" "+now.getUTCFullYear()+" "+now.getUTCHours()+" "+now.getUTCMinutes()+" "+now.getUTCSeconds()+" "+now.getUTCMilliseconds());
//解析从1970年1月1日午夜距离该日期时间的毫秒数
console.log(Date.parse("Sep 23, 1989"));//sep可以是1-12，还可以是这种格式 2005/8/1 2005-8-1
console.log(Date.parse("9 23, 1989"));
console.log(Date.parse("1989-9-23"));//ie解析NaN
console.log(Date.parse("1989/9/23"));
console.log(Date.parse('9-23-1989'));
console.log(Date.parse('9/23/1989'));
console.log(Date.parse('09-23-1989'));
console.log(Date.parse('09/23/1989'));

//注意  不大通用的解析，即 new Date()的时候也不好用哦
console.log(Date.parse('1989-7-4'));//这种解析出来是00:00时间 (firefox ie 不支持，返回NaN)
console.log(Date.parse('1989-07-04'));//这种解析出来是08:00时间（ie不支持 NaN）

// setMonth  setFullYear setHours 的可选参数用法
now.setMonth(6);//将当前时间的月份设置为7月
console.log(now);
now.setMonth(5,14);//可选参数为day，即可以设置5月14日
console.log(now);
now.setFullYear(2012,8,1);//同样，多出的两个可选参数分别表示月份和日
console.log(now);
now.setHours(12,12,12,1200);//时，分，秒，毫秒 后面几个都是可选参数
console.log(now);
now.setTime(12000);//参数是与GMT时间的1970年一月一日午夜距离的毫秒数
console.log(now);
console.log(now.toLocaleString());//返回本地规则的字符串表示
console.log(now.toString());//本地时间表示

console.log(now.valueOf()); 
// 跟getTime返回值相等
console.log(now.getTime());

//思考
//1.获取当前时间后n天，支持超过31的day参数
function afterDay(day){
	var now = new Date();
	now.setDate(now.getDate()+day);
	return now;
}
//2.获取当前时间的前n天
function beforeDay(dat){
	var now = new Date();
	now.setDate(now.getDate()+day);
	return now;
}
//3.月份，实际上参数可以取负
function afterMonth(month){
	var now = new Date();
	now.setMonth(now.getMonth()+month);
	return now;
}

function bubbleSort(arr){
	console.log("冒泡排序：");
	var len = arr.length;
	for(var i=0; i<len-1;i++){
		for(var j=0; j<len-i-1; j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
function chooseSort(arr){
	console.log("选择排序：");
	var len = arr.length;
	for(var i=0; i<len-1;i++){
		for(var j=i+1; j<len; j++){
			if(arr[i]>arr[j]){
			    var temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;	
			}
		}
	}
	return arr;
}
function quickSort(arr, left, right){
	if(undefined===left){
		console.log("快速排序改实参版:");
		left=0;
	}
	if(undefined===right){
		right = arr.length-1;
	}
	if(left>right){
		return;
	}
	//移动左右索引变量
	var i = left;
	var j = right;
	var midKey = arr[left];
	while(i<j){
		while(i<j&&midKey<=arr[j]){
			j--;
		}
		while(i<j&&midKey>=arr[i]){
			i++;
		}
		if(i<j){
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	//交换中间数与中轴数
	arr[left] = arr[i];
	arr[i] = midKey;
	//递归左右，分治思想
	quickSort(arr, left, i-1);
	quickSort(arr, i+1, right);
	return arr;
}
function quickSortArr(arr){
	if(arr.length==1){
		return arr;
	}
	if(arr.length==0){
		return [];
	}
	var left = [],
		right = [];
	var povit = arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]<=povit){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	var re = quickSortArr(left).concat([povit],quickSortArr(right));
	return re;
}
function timeIt(fn, arr){
	var start = new Date().getTime();
	arr = fn(arr);
	var end = new Date().getTime();
	console.log("cost(ms):"	+(end-start)+" result:"+arr[0]+ " " + arr[1] +" "+arr[2]+"..."+arr[arr.length-1]);
}
function callArraySort(arr){
	console.log("Array内置排序：");
	//console.log(arr[0]);
	return Array.prototype.sort.call(arr, compareByArray);
	//console.log(b[0]);
	//console.log(b.length);
}
function compareByArray(a,b){
	var i = parseInt(a);
	var j = parseInt(b);
	return i-j;
}


function heapSort(arr){
	function maxHeapify(arr, index, len){
		var left = getLeft(index);
		var right = getRight(index);
		var largest;
		if(left<len&&arr[left]>arr[index]){
			largest = left;
		}else{
			largest = index;
		}
		if(right<len&&arr[right]>arr[largest]){
			largest = right;
		}
		if(largest!=index){
			swapElement(arr, largest, index);
			maxHeapify(arr, largest, len); // 如果改变了位置，递归改变的子树调整
		}
	}
	function swapElement(arr,index0, index1){
		var temp = arr[index0];
		arr[index0] = arr[index1];
		arr[index1] = temp;
	}
	function getLeft(eleIndex){
		return 2*eleIndex+1;
	}
	function getRight(eleIndex){
		return 2*(eleIndex+1);
	}
	if(arr.length<=1){
		return arr;
	}
	var len = arr.length;
	for(var i=len/2+1;i>=0;--i){
		maxHeapify(arr, i, len);
	}

	for(var i=len-1;i>=1;--i){
		swapElement(arr, 0, i);
		maxHeapify(arr, 0, --len);
	}
	return arr;
}
var a = [2,5,3,2,2,8,5,9,4,6,3,1,3,7];
//console.log(bubbleSort(a));
timeIt(bubbleSort, a);
a = [2,5,3,2,2,8,5,9,4,6,3,1,3,7];
timeIt(chooseSort, a);//console.log(chooseSort(a));
a = [2,5,3,2,2,8,5,9,4,6,3,1,3,7];
timeIt(quickSort, a);//console.log(quickSort(a));
a = [2,5,3,2,2,8,5,9,4,6,3,1,3,7];
console.log("快速排序不改原参数版：");
timeIt(quickSortArr, a);
a = [2,5,3,2,2,8,5,9,4,6,3,1,3,7];
timeIt(callArraySort, a);
a = [2,5,3,2,2,8,5,9,4,6,3,1,3,7];
console.log("堆排序：");
timeIt(heapSort, a);
var randArr = [];
for(var i=0;i<10000; i++){
	randArr[i] = Math.floor(Math.random()*100000);
} 
a = randArr.slice();
timeIt(bubbleSort, a)
a = randArr.slice();
timeIt(chooseSort, a);//console.log(chooseSort(a));
a = randArr.slice();
timeIt(quickSort, a);
a = randArr.slice();
console.log("快速排序不改原参数版：");
timeIt(quickSortArr, a);
a = randArr.slice();
timeIt(callArraySort, a);
a = randArr.slice();
console.log("堆排序：");
timeIt(heapSort, a);
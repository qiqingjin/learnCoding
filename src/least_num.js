//笔试题，最少的数字
/*var num = 5;
var arr = [20, 35, 23, 40, 80];

function getLeastNum(num, arr){
	var leastNeed = 3 - num % 3;
	var leastArr = Math.ceil(num/3);
	arr.sort(function(a, b){ return a-b; });
	for(var j=0; j<leastArr; j++){
		for(var i=0; i<2; i++){
			var temp = j*3+i;
			if(arr[temp]-arr[temp+1] > 10){
				++leastNeed;
				arr.splice(temp+1, 0, arr[temp]+10); 
			}
		}
	}
	if((num+leastNeed)%3 !==0 ) leastNeed = leastNeed + getLeastNum(num+leastNeed, arr);
	return leastNeed;	
}

var result = getLeastNum(num, arr);
console.log(result);

var obj = {};
Object.defineProperty(obj, 'p1', {value: 'test1'});
console.log(obj);
obj.p1 = 'test2';
console.log(obj);*/

/*var str = 'hello xiao mi';
function reverse(str){
	var strArr = str.split(' ');
	var reverseArr = [];
	for(var i=strArr.length-1; i>=0; i--){
		reverseArr.push(strArr[i]);
	}
	var reverseStr = reverseArr.join(' ');
	return reverseStr;
}
console.log(reverse(str));*/

var labels = ['小米','note','小米','note','小米','note'];
var colors = ['#f9eaeb','#8ad9dd','#f9eaeb','#8ad9dd','#f9eaeb','#8ad9dd'];
var htmlStr = '';

var con = document.getElementById('contain');
for(var i=0; i<labels.length; i++){
	var index = parseInt((colors.length-i)*Math.random()) + i;
	htmlStr += "<span style='color:" + colors[index] + ";'>" + labels[i] + "</span>";
}
con.innerHTML = htmlStr;
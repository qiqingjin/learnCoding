/*
* @Author: Cynthia
* @Date:   2017-05-04 18:39:19
* @Last Modified by:   Cynthia
* @Last Modified time: 2017-05-04 19:03:18
*/

'use strict';

function foo(num){}
foo.count = 0;
foo.countTimes = function(num){
	console.log('foo: ' + num);

	//尝试追踪foo被调用的次数
	this.count++;
}
var i = 0;
for(; i<10; i++){
	if(i > 5){
		foo.countTimes(i);
	}
}

console.log('The times foo is called: ', foo.count);
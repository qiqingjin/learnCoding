/*
* @Author: Cynthia
* @Date:   2017-05-04 18:39:19
* @Last Modified by:   Cynthia
* @Last Modified time: 2017-05-05 17:16:38
*/

'use strict';

// 使用this的动机
/*function tellName(){
	console.log('name is', this.name);
}
let personOne = {
	name: 'Claire'
}
let personTwo = {
	name: 'LYY'
}
tellName.call(personOne);
tellName.call(personTwo);*/

// 错误使用this的例子
/*function foo(num){
	console.log('foo: ' + num);

	//尝试追踪foo被调用的次数
	this.count++;
}
foo.count = 0;
var i;
for(i=0; i<10; i++){
	if(i > 5){
		foo(i);
	}
}

console.log('The times foo is called: ', foo.count);*/

// 修改上面的例子

/*function foo(num){}
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

console.log('The times foo is called: ', foo.count);*/

// call-stack
/*function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz", this );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar", this );
    foo(); // <-- call-site for `foo`
}

function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo", this );
}

baz(); // <-- call-site for `baz`*/

// implicit binding
/*function findThis(){
	console.log(this.name);
}
var name = 'window';
var context = {
	name: 'context'
};
[1, 2, 3].map(function(item){console.log(item, this.name)}, context);*/

//new binding
function Person(name){
	this.tellName = function(){
		console.log(name);
	};
}
var lyy = new Person('lyy');
lyy.tellName();
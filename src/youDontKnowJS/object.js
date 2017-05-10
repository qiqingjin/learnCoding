/*
* @Author: Cynthia
* @Date:   2017-05-08 13:23:54
* @Last Modified by:   Cynthia
* @Last Modified time: 2017-05-10 16:30:12
*/

'use strict';

// ES5
/*let cat = {
	name: 'miao',
	_age: 1
};
let nameDescriptor = Object.getOwnPropertyDescriptor(cat, 'name');
// console.log(nameDescriptor);

Object.defineProperty(cat, 'age', {
	value: 2,
	writable: false,
	configurable: true,
	enumerrable: true
});
//console.log(cat.age);
//cat.age = 5;
//console.log(cat.age);

Object.defineProperty(cat, 'age', {
	get: function(){
		return this._age;
	},
	set: function(value){
		if(value > 3){
			this._age = value % 3;
		}else if(value < 0){
			console.log('Wrong value');
		}else{
			this._age = value;
		}
	}
});
console.log(cat.age);
cat.age = 8;
console.log(cat.age);*/



// iterator
/*var myObject = {
	a: 123,
	b: 321
};

Object.defineProperty( myObject, Symbol.iterator, {
	enumerable: false,
	writable: false,
	configurable: true,
	value: function() {
		var o = this;
		var idx = 0;
		var ks = Object.keys( o );
		return {
			next: function() {
				return {
					value: o[ks[idx++]],
					done: (idx > ks.length)
				};
			}
		};
	}
} );

var it = myObject[Symbol.iterator]();
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:undefined, done:true }

// iterate `myObject` with `for..of`
for (var v of myObject) {
	console.log( v );
	// 123
	// 321
}*/



// ES6 Proxy
/*let obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
obj.count = 0;
obj.count++;*/



// prototype & __proto__ ([[prototype]])
/*function SuperType(){
	this.name = 'super type';
}
SuperType.prototype.tellName = function(){
	console.log(this.name);
}
SuperType.prototype.newName = 'father';
function SubType(){
	this.name = 'sub type';
}

SubType.prototype = Object.create(SuperType.prototype);
// SubType.prototype = new SuperType();
let instance = new SubType();

console.log(instance instanceof SubType); //true
console.log(instance instanceof SuperType); //true
console.log(SubType.prototype.isPrototypeOf(instance)); //true
console.log(SuperType.prototype.isPrototypeOf(instance)); //true

let superInstance = SubType.prototype;
console.log(superInstance.isPrototypeOf(instance)); //true*/

/*console.log('instance.constructor', instance.constructor);
console.log('SubType.constructor', SubType.constructor);
console.log('SuperType.constructor', SuperType.constructor);

console.log('instance.tellName', instance.tellName);
console.log('SubType.tellName', SubType.tellName);
console.log('SuperType.tellName', SuperType.tellName);

console.log('instance.newName', instance.newName);*/



// __proto__ ([[prototype]])
/*function Book(){}
let js = new Book();
let java = {};
console.log('js.__proto__', js.__proto__);
console.log('java.__proto__', java.__proto__);
console.log('js.prototype', js.prototype);
console.log('java.prototype', java.prototype);
console.log('Book.prototype', Book.prototype);
console.log('Book.__proto__', Book.__proto__);*/



// 作者建议我们这样写继承
/*let SuperType = {
	name: 'super type',
	tellName: function(){
		console.log(this.name);
	}
}

let SubType = Object.create(SuperType);
SubType.name = 'sub type';
SubType.sayHi = function(){};

let instance = Object.create(SubType);
instance.name = 'instance';

instance.tellName(); //instance
// 自省更简单明了
console.log(SubType.isPrototypeOf(instance)); //true
console.log(SuperType.isPrototypeOf(instance)); //true*/



// mixin
function mixin(source, target){
	for(var key in source){
		if(!(key in target)){
			target[key] = source[key];
		}
	}
	return target
}

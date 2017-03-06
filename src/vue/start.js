/*
* @Author: Claire
* @Date:   2017-03-02 12:06:49
* @Last Modified by:   Cynthia
* @Last Modified time: 2017-03-05 18:13:31
*/

'use strict';

const Vue = require('vue');
const _ = require('lodash');
const axios = require('axios');
// data
/*let data = {a: 1};
const vm = new Vue({
	data: data
});
console.log(vm.a === data.a);
vm.a = 2;
console.log(data.a);
data.a = 3;
console.log(vm.a);*/

//mixin-method conflict
/*let mixin = {
	methods: {
		funMin: function(){
			console.log('function one from mixin');
		},
		func: function(){
			console.log('function two from mixin');
		}
	},
};
const vm = new Vue({
	mixins: [mixin],
	methods: {
		funVue: function(){
			console.log('function one from vue');
		},
		func: function(){
			console.log('function two from vue');
		}
	}
});
console.log('-------------call funMin------------');
vm.funMin();
console.log('-------------call funVue------------');
vm.funVue();
console.log('-------------call func------------');
vm.func();*/

//computed-与methods不同点是，compputed会使用缓存，只有msg变化时才重新计算
/*const vm = new Vue({
	el: '#first',
	data: {
		msg: 'hello world',
		warn: 'something wrong',
		isOk: true
	},
	computed: {
		reversedMessage: function(){
			return this.msg.split('').reverse().join('');
		}
	}
});*/

//watch
/*const vm = new Vue({
	el: '#watch-example',
	data: {
		question: '',
		answer: 'I cannot give you an answer util you ask a qustion!'
	},
	watch: {
		question: function(newQuestion){
			this.answer = 'Waiting for you to stop typing...';
			this.getAnswer();
		}
	},
	methods: {
		getAnswer: _.debounce(
			function(){
				let vm = this;
				if(this.question.indexOf('?') === -1){
					vm.answer = 'Questions usually contain a question mark. ;-)';
					return;
				}
				vm.answer = 'Thinking...';
				axios.get('https://yeson.wtf/api')
				.then(function(response){
					vm.answer = _.capitalize(response.data.answer);
				})
				.catch(function(error){
					vm.answer = 'Error! Could not reach the API. ' + error;
				})
			},
			500
		)
	}
})*/

//class
/*const vm = new Vue({
	el: '#class-example',
	data: {
		isActive: true,
		error: {}
	},
	computed: {
		classCtrl: function(){
			return {
				active: this.isActive,
				'text-danger': this.error
			}
		}
	}
})*/

//v-if
const vm = new Vue({
	el: '#if-example',
	data: {
		isOk: true
	}
})
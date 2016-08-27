export default class Pubsub{
	constructor(){
		this.handlers = {};
	}

	subscribe(action, handler){
		if(this.handlers[action] === undefined){
			this.handlers[action] = [handler];
		}else{
			this.handlers[action].push(handler);
		}
	}

	publish(action){
		if(Array.isArray(this.handlers[action])) this.handlers[action].map(item => item());
	}

	remove(action, handler){
		if(Array.isArray(this.handlers[action])){
			const index = this.handlers[action].indexOf(handler);
			this.handlers[action].splice(index, 1);
		}	
	}
}

const pubsub = new Pubsub();
console.log('==============before remove========================');
pubsub.subscribe('start', sayHi);
pubsub.subscribe('start', sayHello);
pubsub.publish('start');
console.log('==============after remove========================');
pubsub.remove('start', sayHi);
pubsub.publish('start');

function sayHi(){
	console.log('hi');
}
function sayHello(){
	console.log('hello');
}
Function.prototype.mybind = function(ctx){
	const self = this;
	const args = Array.prototype.slice.call(arguments,1);
	return function(){
		const innerArgs = Array.prototype.slice.call(arguments);
		const finalArgs = args.concat(innerArgs);
		self.apply(ctx, finalArgs);
	}
}

function Test(){
	this.hi = 'hi';
	this.say = function(){
		console.info(this.hi);
	};
}

const ctxObj = {
	hi: 'hello'
}

const test = new Test();

test.say();
test.say.bind(ctxObj)();
test.say.mybind(ctxObj)();
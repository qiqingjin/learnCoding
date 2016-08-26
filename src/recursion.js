//计算运行时间的公用函数
const log = function(fn){
	return function(...args){
		const start = Date.now();
		const result = fn(...args);
		const used = Date.now() - start;
		console.log(`call ${fn.name}(${args}) used ${used} ms`);
		return result;
	}
}

//优化前
let countFibo = 0;
const fibonacci = function(n){
	countFibo++;
	if(n <= 2){
		return 1;
	}
	return fibonacci(n-1) + fibonacci(n-2);
}
const fibonacciLog = log(fibonacci);
const result = fibonacciLog(6);
console.log(`fibonacci run ${countFibo} times, result is ${result}`);

//缓存优化
let countCacheFibo = 0;
const cacheFibonacci = function(n){
	let cache = [1, 1];
	const fib = function(n){
		countCacheFibo++;
		//console.log('n',n);

		let result = cache[n-1];
		//console.log('result',result);
		if(typeof result !== 'number'){
			result = fib(n-1) + fib(n-2);
			cache[n-1] = result;
		}
		return result;
	}
	return fib;
}
const cacheFiboLog = log(cacheFibonacci); 
const cacheResult = cacheFiboLog(6)(6);
console.log(`cacheFibonacci run ${countCacheFibo} times, result is ${cacheResult}`);

//chunk优化
/*let countChunkFibo = 0;
let flag = false;
const chunkFibonacci = function(n){
	countChunkFibo++;
	if(n <= 2){
		if(n === 1) flag = true;
		return 1;
	}

	let arg1 = addTask(chunkFibonacci, 0, n-1);
	let arg2 = addTask(chunkFibonacci, 0, n-2);

	return arg1 + arg2;
}
function addTask(fun, delay, ...args){
    if (typeof fun == 'function'){
        const argu = args;
        let result = 0; 
        const f = (function () {
            fun.apply(null, argu);
        });
        return setTimeout(f, delay);
    }  
    return setTimeout(fun, delay);
}  

const chunkFiboLog = log(chunkFibonacci); 
const chunkResult = chunkFiboLog(6);

if(flag === true) console.log(`chunkFibonacci run ${countChunkFibo} times, result is ${chunkResult}`);*/


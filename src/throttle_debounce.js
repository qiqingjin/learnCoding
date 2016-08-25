class DelayAction {
	static throttle(fn, delay){
		let last = 0;
		return function(){
			let curr = + new Date();
			if(curr-last > delay){
				fn.apply(this, arguments);
				last = curr;
			}
		}
	}

	static debounce(fn, delay){
		let timer = null;
		return function(){
			let self = this;
			let args = arguments;
			clearTimeout(timer);
			timer = setTimeout(function(){
				fn.apply(self, args);
			}, delay);
		}
	}
}

document.addEventListener('mousemove', DelayAction.debounce(cursorWith, 300), false);

function cursorWith (e){
	const x = e.clientX;
	const y = e.clientY;
	const withDiv = document.querySelector('.cursor_with');

	console.log(x, y);
	
    withDiv.style.left = x - withDiv.style.width/2 + "px";
    withDiv.style.top = y - withDiv.style.height/2 + "px";
}
const chunk = function(handler, args, ctx){
	const result = [];
	setTimeout(handleTimer, 100);
	function handleTimer(){
		let item = args.shift();
		result.push(handler.call(ctx, item));

		if(args.length > 0){
			setTimeout(handleTimer, 100);
		}
	}
	return result;
}

function handler(num){
	console.log(num+1);
}

const args = [1, 2, 3, 4, 5, 6];

chunk(handler, args);
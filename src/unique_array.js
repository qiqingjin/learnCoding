const testArray = [1, 9, 2, 8, 3, 7, 9, 8, 7, 1, 2, 3];

const uniqueArray = (array) => {
	const s = new Set(array);
	return Array.from(s);
}

const commonUniqueArray = (array) => {
	const obj = {};
	const result = [];
	array.map(val => {
		if(obj[val]){
			return ;
		}
		obj[val] = val;
		result.push(val);
	})

	return result;
}

console.log(uniqueArray(testArray));
console.log(commonUniqueArray(testArray));
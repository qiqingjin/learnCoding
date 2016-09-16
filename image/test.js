function bubbleSort(array){
			let temp = 0;
			let arr = array;
			let len = arr.length;

			for(let i=0; i<len-1; i++){
				for(let j=0; j<len-i-1; j++){
					if(arr[j] > arr[j+1]){
						temp = arr[j];
						arr[j]= arr[j+1];
						arr[j+1] = temp;
					}
				}
			}

			return arr;
		}
		function quickSort(array){
			let arr = array;
			if(arr.length <= 1){
				return arr;
			}

			const base = arr[0];
			const left = [];
			const right = [];

			for(let i=1; i<arr.length; i++){
				if(arr[i] < base){
					left.push(arr[i]);
				}else{
					right.push(arr[i]);
				}
			}

			return quickSort(left).concat(base, quickSort(right));
		}
		function selectSort(array){
			let arr = array;
			let sortedArr = [];
			let len = arr.length;

			for(let i=0; i<len; i++){
				let min = Math.min.apply(null, arr);
				sortedArr.push(min);
				arr.splice(arr.indexOf(min), 1);
			}

			return sortedArr;
		}

		const arr = [3, 2, 6, 1, 8, 2, 5, 5];
		console.log('arr', arr);
		const bubbleRes = bubbleSort(arr);
		console.log('arr', arr);
		console.log('bubble1', bubbleRes);
		const quickRes = quickSort(arr);
		const selectRes = selectSort(arr);

		console.log('bubble2', bubbleRes);
		console.log('quickRes', quickRes);
		console.log('selectRes', selectRes);

		console.log('arr', arr);
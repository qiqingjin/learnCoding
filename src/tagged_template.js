function filter(inputStr, ...variable){
	console.log(inputStr,variable);
	let escString = '';

	for(let i=0; i<variable.length; i++){
		let verbString = String(variable[i]);

		escString += inputStr[i];
		console.log(escString);

		escString += verbString.replace(/&/g, '&amp;')
								.replace(/</g, '&lt;')
								.replace(/>/g, '&gt;');
	}

	return escString;
}

let name = '<b>Cynthia</b>';
let msg = filter `这是一条打招呼的信息，<p> 你好 ${name} </p>`;
document.querySelector('.template').innerHTML = msg;
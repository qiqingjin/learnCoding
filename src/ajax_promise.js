window.getJSON = function(url){
	const promise = new Promise(function(resolve, reject){
		const xhr = new XMLHttpRequest();
		xhr.open('get', url);
		xhr.onreadystatechange = handler;
		xhr.responseType = "json";
		xhr.setRequestHeader = ("Accept", "application/json");
		xhr.send();

		function handler(){
			if(this.readyState !== 4){
				return;
			}
			if(this.status === 200){
				resolve(this.response);
			}else{
				reject(new Error(this.statusText));
			}
		}
	});

	return promise;
}
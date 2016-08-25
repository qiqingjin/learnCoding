function create(obj){
	function F(){}
	F.prototype = obj;
	return new F();
}

function Book(){
	this.type = 'book';
}
Book.prototype.say = function(){
	console.log(this.type);
}
function JS(){
	this.name = 'js';
	Book.apply(this, arguments);
}

JS.prototype = create(Book.prototype);
JS.prototype.tell = function(){
	console.log(this.name);
}

const book = new Book();
const js = new JS();

js.say();
js.tell();



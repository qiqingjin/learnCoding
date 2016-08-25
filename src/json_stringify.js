const book = {
	"title": "JavaScript",
	"author": "Nicholas C. Zakas",
	"edition": 3,
	"correlation": {
		"book": "高性能",
		"translator": "李松峰，曹力"
	}/*,
	toJSON: function(){
		return this.correlation;
	}*/
}

const bookText = JSON.stringify(book);
const bookFilted = JSON.stringify(book, function(key, value){
	switch (key){
		case "author":
			return value.split(' ');
		default:
			return value;
	}
});

console.log(bookText);
console.log(bookFilted);
//方法一:会抛弃对象的constructor，也就是深复制之后，无论这个对象原本的构造函数是什么，在深复制之后都会变成Object
let deepCopyOne = (obj) => {
	let cloneObj = JSON.parse(JSON.stringify(obj));
	return cloneObj;
}
//方法二
function getType(o){
    var _t;
    return ((_t = typeof(o)) == "object" ? o==null && "null" || Object.prototype.toString.call(o).slice(8,-1):_t).toLowerCase();
}
function extend(destination, source){
    for(var p in source){
        if(getType(source[p])=="array"||getType(source[p])=="object"){
            destination[p]=getType(source[p])=="array"?[]:{};
            extend(destination[p],source[p]);
        }
        else{
            destination[p]=source[p];
        }
    }
    return destination;
}

let obj = {
	a: {
		a1: 'hi',
		a2: '你好'
	},
	b: '某某某'
}
let shallowCopy = obj;
let deepCopy = extend({}, obj);

obj.a.a1 = 'hello';
console.log(shallowCopy, deepCopy);
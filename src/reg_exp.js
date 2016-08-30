let str = '111abc12@def.combe35fop@126.comdd2';
let reg = /(\w|\d)+@(\w|\d)+(.com)/g;

let testRes = reg.test(str);
let execRes = reg.exec(str);
let matchRes = str.match(reg);

console.log('str', str);
console.log('testRes', testRes);
console.log('execRes', execRes);
console.log('matchRes', matchRes);

let reg2 = /^(11N|12N|1NNN)(\d){7,8}/g;
let str21 = '11N123456';
let str22 = '1N1234567';
let str23 = '1NNN12345678';

console.log(reg2.test(str21));
console.log(reg2.test(str22));
console.log(reg2.test(str23));

let a = str21.replace(/N\d?/g, 'new');
console.log(a);
//测试放在不同文件中的js代码如何执行

//创建script标签
let script = document.createElement('script');
script.src = 'data:application/javascript, console.log("Hello%20world!")';
document.querySelector('script').parentNode.appendChild(script);
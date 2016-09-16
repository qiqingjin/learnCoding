function encodeUTF8(str) {  
    return String(str).replace(  
        /[\u0080-\u07ff]/g,  
        function(c) {  
            let cc = c.charCodeAt(0);
            return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
        }
    ).replace(  
        /[\u0800-\uffff]/g,  
        function(c) {  
            let cc = c.charCodeAt(0);
            return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3f, 0x80 | cc & 0x3f);
        }
    );
}
  
function request(url, loaded) {  
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {  
        if (xmlhttp.readyState == 4)  
            if (xmlhttp.status == 200)  
                loaded(xmlhttp);
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
  
void function(){  
    let source = '../image/test.js';
    request(source, function(xmlhttp){
        let text = encodeUTF8(xmlhttp.responseText);
        let pixel = Math.ceil((text.length + 2) / 3); // 1一个像素存3个字节,  
        let size = Math.ceil(Math.sqrt(pixel));
        //console.log([text.length, pixel, size, size * size * 3]);
        let canvas = document.createElement('canvas');
        canvas.width = canvas.height = size;
        let context = canvas.getContext("2d"),  
            imageData = context.getImageData(0, 0, canvas.width, canvas.height),  
            pixels = imageData.data;
        for(let i = 0, j = 0, l = pixels.length; i < l; i++){  
            if (i % 4 == 3) { // alpha会影响png还原
                pixels[i] = 255;
                continue;
            }
            let code = text.charCodeAt(j++);
            if (isNaN(code)) break;
            pixels[i] = code;
        }
        context.putImageData(imageData, 0, 0);
        document.getElementById('base64').src = canvas.toDataURL("image/png");
    });
}();

void function(){  
    let source = '../image/test.png';
    let img = document.createElement('img');
    img.onload = function(){  
        let canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
  
        let context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height),  
            pixels = imageData.data;
  
        let script = document.createElement('script');
        let buffer = [];
        for (let i = 0, l = pixels.length; i < l; i++) {  
            if (i % 4 == 3) continue; // alpha会影响png还原  
            if (!pixels[i]) break;
            buffer.push(String.fromCharCode(pixels[i]));
        }
        script.src = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(buffer.join(''));
        document.body.appendChild(script);
        script.onload = function(){  
            console.log('script is loaded!');
        }
        img = null;
    }
    img.src = source;
}();


let div = document.getElementById('content');
let content = window.getComputedStyle(div, ':before').content;
console.log(content);

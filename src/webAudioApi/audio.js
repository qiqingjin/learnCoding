/*
* @Author: claireyyli
* @Date:   2016-11-16 10:41:07
* @Last Modified by:   claireyyli
* @Last Modified time: 2016-11-24 10:32:31
*/

window.AudioContext = window['AudioContext'] || window['webkitAudioContext'];
var context = new window.AudioContext();
var source = context.createBufferSource();

//console.log(context);

//AudioBufferSourceNode,二进制文件
var audioURL = '/src/webAudioApi/Uh.mp3';
var xhr = new XMLHttpRequest();
xhr.open('GET', audioURL, true);
xhr.responseType = 'arraybuffer';
xhr.onload = function(){
    context.decodeAudioData(this.response, function(buffer){
        source.buffer = buffer;
        source.connect(context.destination);
    });
};
xhr.send();
//source.start(0, 0, 30000);
//source.stop();


//MediaElementAudioNode,audio标签
/*var audio = new Audio();
var sound = context.createMediaElementSource(audio);
audio.addEventListener('canplay', function(){
    sound.connect(context.destination);
});
audio.src = '/src/webAudioApi/Uh.mp3';
audio.play();*/


//GainNode,调整音量
var name = 'createGain';
if(typeof context.createGain !== 'function'){
    name = 'createGainNode';
}
var gainNode = context[name]();
gainNode.gain.setValueAtTime(10, 2000);
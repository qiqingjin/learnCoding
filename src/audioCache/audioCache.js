/*
* @Author: claireyyli
* @Date:   2016-11-22 09:47:58
* @Last Modified by:   Administrator
* @Last Modified time: 2016-11-25 14:45:27
*/

'use strict';

import {LocalStorage, IndexedDB} from './cache.js';
import Player from './player.js';

const localStorage = new LocalStorage();
const indexedDB = new IndexedDB('audioDB', 'audioTable', 2);

const player = new Player();
const audioCtx = player.context;
const source = player.source;

const audioURL = '/src/audioCache/Uh.mp3';
const xhr = new XMLHttpRequest();

// 使用indexedDB完成音乐播放，http请求返回类型为blob
/*xhr.open('GET', audioURL, true);
xhr.responseType = 'blob';
xhr.onload = function(){
    const blob = this.response;

    indexedDB.set(blob, 'uh');
    indexedDB.get('uh', function(audioData){
        console.log('audioData', audioData);

        let arrayBuffer;
        const fileReader = new FileReader();
        fileReader.onload = function() {
            arrayBuffer = this.result;
            audioCtx.decodeAudioData(arrayBuffer, function(buffer) {
                source.buffer = buffer;
                source.connect(audioCtx.destination);
                source.loop = true;
            });
            source.start(0, 0, 30000);
        };
        fileReader.readAsArrayBuffer(audioData);
    });
};
xhr.send();*/

// 使用indexedDB完成音乐播放，http请求返回类型为arraybuffer
/*xhr.open('GET', audioURL, true);
xhr.responseType = 'arraybuffer';
xhr.onload = function(){
    const arrayBuffer = this.response;

    indexedDB.set(arrayBuffer, 'uh');
    indexedDB.get('uh', function(audioData){
        console.log('audioData', audioData);

        audioCtx.decodeAudioData(audioData, function(buffer) {
            source.buffer = buffer;
            source.connect(audioCtx.destination);
            source.loop = false;
        });
        source.start(0, 0, 30000);
    });
};
xhr.send();*/

// 使用localStorage完成音乐播放
/*xhr.open('GET', audioURL, true);
xhr.responseType = 'arraybuffer';
xhr.onload = function(){
    const arrayBufferStr = ab2str(this.response);

    localStorage.set('uh', arrayBufferStr);
    const audioDataStr = localStorage.get('uh');
    const audioData = str2ab(audioDataStr);
    console.log(audioData);

    audioCtx.decodeAudioData(audioData, function(buffer) {
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.loop = true;
    });
    source.start(0, 0, 30000);
};
xhr.send();*/

function ab2str(buf) {
    const uint8array = new Uint8Array(buf);
    let result = '';
    for(let i=0; i<uint8array.length; i++){
        result += String.fromCharCode.apply(null, uint8array.slice(i, i+1));
    }
    return result;
}

function str2ab(str) {
    const buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    const bufView = new Uint8Array(buf);
    for (let i=0, strLen=str.length; i<strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
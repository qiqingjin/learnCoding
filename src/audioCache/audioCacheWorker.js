/*
* @Author: claireyyli
* @Date:   2016-11-24 15:14:09
* @Last Modified by:   claireyyli
* @Last Modified time: 2016-11-25 09:40:30
*/

'use strict';

import Player from './player.js';

const workerURL = './src/audioCache/sw.js';
const audioURL = './src/audioCache/Uh.mp3';

initServiceWorker(workerURL);

const player = new Player();
const audioCtx = player.context;
const source = player.source;

const fetchButton = document.getElementById('fetch');

fetch(audioURL).then(function(response){
        response.arrayBuffer().then(function(arrayBuffer){
            console.log('The first time fetch the file, data:', arrayBuffer);
        });
    });

fetchButton.addEventListener('click', function(){
    console.log('The second time fetch the file......');
    fetch(audioURL).then(function(response){
            response.arrayBuffer().then(function(arrayBuffer){
                 console.log('The second time fetch the file, data:', arrayBuffer);
                audioCtx.decodeAudioData(arrayBuffer, function(buffer) {
                    source.buffer = buffer;
                    source.connect(audioCtx.destination);
                    source.loop = true;
                });
                console.log('playing......');
                source.start(0, 0, 30000);
            });
        });
}, false);

document.addEventListener('fetch', function(){console.info('捕捉到fetch啦');});

function initServiceWorker(workerURL){
     if(navigator.serviceWorker){
            navigator.serviceWorker.register(workerURL, {scope: './src/audioCache/'})
                .then(function(registration){
                    console.log(registration);
                })
                .catch(function(e){
                    console.info(e);
                })
        }else{
            console.info('Service worker inits unsuccessfully');
        }
}
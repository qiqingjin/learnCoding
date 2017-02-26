/*
* @Author: claireyyli
* @Date:   2016-11-24 14:01:01
* @Last Modified by:   claireyyli
* @Last Modified time: 2016-11-24 21:21:51
*/

'use strict';

const window = self;
self.importScripts('./cache.js');
//import {LocalStorage, IndexedDB} from './cache.js';

const localStorage = new LocalStorage();
const indexedDB = new IndexedDB('cacheDB', 'cacheTable', 2);

const CACHE_VERSION = 'V1';

console.log('SW is working......');

self.addEventListener('install', function(e){
    console.log('SW is installed');
    e.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function(cache){
                const fetchInit = {method: 'GET'};
                fetch('./JJ.mp3', fetchInit)
                .then(function(response){
                    response.arrayBuffer().then(function(buffer){
                        indexedDB.set(buffer, 'Uh.mp3');
                    });
                });
            }));
});

self.addEventListener('activate', function(e){
    console.log('SW is activated');
});

self.addEventListener('fetch', function(e){
    console.log('Caught a fetch');

    /*const url = new URL(e.request.url);
    const fileName = url.split('/')[url.split('/').length-1];
    console.log(fileName);

    indexedDB.get(fileName, function(cacheData){
        if(!cacheData){
            console.log('No cache, sending a new request......');
            fetch(e.request)
                .then(function(response){
                    response.arrayBuffer().then(function(buffer){
                        indexedDB.set(arrayBuffer, fileName);
                        console.log('Cache the file successfully');
                    });
                });
        }else{
            const cacheResponse = new Response(cacheData);
            e.respondWith(cacheResponse);
        }
    });*/
});
/*
* @Author: claireyyli
* @Date:   2016-11-22 14:07:55
* @Last Modified by:   Administrator
* @Last Modified time: 2016-11-25 14:45:49
*/

'use strict';

class LocalStorage{
    constructor(){
        this.store = window.localStorage || {};
    }
    get(key){
        return this.store[key];
    }
    set(key, value){
        if( this.store[key] ){
            console.info('You should use function update');
            return false;
        }else{
            this.store[key] = value;
            return true;
        }
    }
    update(key, value){
        if( !this.store[key] ){
            console.info('You should use function set');
            return false;
        }else{
            this.store[key] = value;
            return true;
        }
    }
    remove(key){
        return delete this.store[key];
    }
}

class IndexedDB{
    constructor(dbName, storeName, version){
        this.storeName = storeName;
        const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
        const request = indexedDB.open(dbName, version);

        request.onsuccess = e => {
            this.db = e.target.result;
            console.log('Init indexedDB successfully');
        };
        request.onupgradeneeded = e => {
            this.db = e.target.result;
           if(!this.db.objectStoreNames.contains(storeName)){
                this.store = this.db.createObjectStore(storeName);
            }
            console.log('DB version changed, db version: ', this.db.version);
        };
        request.onerror = e => {console.info('Can not open indexedDB', e);};
    }
    get(key, callback){
        const transaction = this.db.transaction(this.storeName);
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.get(key);

        request.onerror = e => {console.info('Can not get value', e);};
        request.onsuccess = e => {callback(e.target.result);};
    }
   /* _thunk(fn){
        return function (...args){
            return function (callback){
                return fn.call(this, ...args, callback);
            }
        }
    }
    get(key){
        const thunkGet = this._thunk(this._get);
        return thunkGet(key)(function(res){return res});
    }*/
    set(value, key){
        let oldValue;
        this.get(key, function(res){oldValue = res;});

        if(oldValue){
            console.info('You should use function update');
        }else{
            const transaction = this.db.transaction(this.storeName, 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.add(value, key);

            request.onerror = e => {console.info('Can not add value', e);};
        }
    }
    update(newValue, key){
        const oldValue = this.get(key);

        if(!oldValue){
            console.info('You should use function set');
        }else{
            const transaction = this.db.transaction(this.storeName, 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.put(newValue, key);

            request.onerror = e => {console.info('Can not update value', e);};
        }
    }
    remove(key){
        const request = this.db.transaction(this.storeName, 'readwrite')
                .objectStore(this.storeName)
                .delete(key);
        request.onerror = e => {console.info('Can not remove value', e);};
    }
    close(){
        this.db.close();
    }
}

//export {LocalStorage, IndexedDB};
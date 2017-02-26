/*
* @Author: claireyyli
* @Date:   2016-11-17 15:15:29
* @Last Modified by:   claireyyli
* @Last Modified time: 2016-11-22 14:44:53
*/

'use strict';

const getValueById = id => {
    return document.getElementById(id).value;
};
const setValueById = (id, val) => {
    let obj = document.getElementById(id);
    obj.value = val;
}

class LStorage{
    constructor(){
        this.storage = window.localStorage || {};
    }
    getValue(selector, key){
        const container = document.querySelector(selector);
        const value = this.storage.getItem(key);
        const text = 'key: ' + key + '; value: ' + value;
        container.innerHTML = text;
    }
    getAllValue(selector){
        const container = document.querySelector(selector);
        let text = '';
        for(let key in this.storage){
            text += 'key: ' + key + '; value: ' + this.storage[key] + '.   ';
        }
        container.innerHTML = text;
    }
    addValue(key, value){
        this.storage.setItem(key, value);
        window.alert('success');
    }
    removeValue(key){
        this.storage.removeItem(key);
        window.alert('success');
    }
    modifyValue(key, newValue){
        this.storage.setItem(key, newValue);
        window.alert('success');
    }
}

class IDB{
    constructor(DBName, storeName){
        this.storeName = storeName;
        const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
        const request = indexedDB.open(DBName, 2);
        request.onsuccess = (e) => {
            this.db = e.target.result;
            console.log('init indexedDB successfully, db version: ', this.db.version);
        };
        request.onupgradeneeded = (e) => {
            this.db = e.target.result;
            if(!this.db.objectStoreNames.contains(storeName)){
                this.store = this.db.createObjectStore(storeName, { keyPath: 'key'});
                console.log('new store: ', this.store);
            }
            console.log('DB version changed, db version: ', this.db.version);
        }
        request.onerror = (e) => {console.log('Can not open indexedDB', e);};
    }
    getValue(key){
        const transaction = this.db.transaction(this.storeName);
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.get(key);
        request.onerror = e => {
            console.log('getValue error: ', e);
        };
        request.onsuccess = e => {
             console.log('getValue success', e);
        };
    }
    addValue(objArray){
        const transaction = this.db.transaction(this.storeName, 'readwrite');
        transaction.oncomplete = e => {window.alert('success')};
        transaction.onerror = e => {window.alert(e.message)};
        const objectStore = transaction.objectStore(this.storeName);
        for(let obj in objArray){
            const request = objectStore.add(objArray[obj]);
            request.onsuccess = e => {
                console.log('addValue success', e);
            }
        }

    }
    removeValue(key){
        const request = this.db.transaction(this.storeName, 'readwrite')
                .objectStore(this.storeName)
                .delete(key);
        request.onsuccess = e => {
            console.log('removeValue success', e);
        };
    }
}

const DBName = 'DB_one';
const storeName = 'table_two';
const lStorage = new LStorage();
const iDB = new IDB(DBName, storeName);

const lsContainer = document.querySelector('#ls');
const iDBContainer = document.querySelector('#iDB');

lsContainer.addEventListener('click', function(e){
    let lsKey = getValueById('lsKey');
    let lsValue = getValueById('lsValue');
    const className = e.target.className;

    switch(className){
        case 'ad':
            lStorage.addValue(lsKey, lsValue);
            lStorage.getAllValue('#ls .show');
            break;
        case 'rm':
            lStorage.removeValue(lsKey);
            lStorage.getAllValue('#ls .show');
            break;
        case 'qr':
            lStorage.getValue('#ls .show', lsKey);
            break;
        case 'mf':
            lStorage.modifyValue(lsKey, lsValue);
            lStorage.getValue('#ls .show', lsKey);
            break;
        default:
    }
}, false);
iDBContainer.addEventListener('click', function(e){
    let iKey = getValueById('iKey');
    let iValue = getValueById('iValue');
    const className = e.target.className;
    const objArray = [];

    switch(className){
        case 'ad':
            objArray.push({'key': iKey, 'value': iValue});
            iDB.addValue(objArray);
            break;
        case 'rm':
            iDB.removeValue(iKey);
            break;
        case 'qr':
            iDB.getValue(iKey);
            break;
        case 'mf':
            console.log('indexedDB modify is not working');
            break;
        default:
    }
}, false);
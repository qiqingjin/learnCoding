/*
* @Author: claireyyli
* @Date:   2016-11-22 14:08:05
* @Last Modified by:   claireyyli
* @Last Modified time: 2016-11-24 11:16:43
*/

'use strict';

export default class Player{
    constructor(){
        this.AudioContext = window['AudioContext'] || window['webkitAudioContext'];
        this.context = new this.AudioContext();
        this.source = this.context.createBufferSource();
    }
}
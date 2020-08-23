/*
 * @Description: 
 * @Author: chenhao
 * @Date: 2020-08-22 18:09:27
 * @LastEditTime: 2020-08-22 18:14:08
 * @LastEditors: chenhao
 */

//  用处:解耦

const Event = require('events').EventEmitter;

let ev = new Event();

// 1.监听
ev.on('msg', function (a, b, c) {
    console.log('收到了msg事件:', a, b, c)
});

// 2.派发(发送)
ev.emit('msg', 12, 5, 88)
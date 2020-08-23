/*
 * @Description: 
 * @Author: chenhao
 * @Date: 2020-08-21 23:05:09
 * @LastEditTime: 2020-08-21 23:11:48
 * @LastEditors: chenhao
 */
const assert = require('assert');

function sum(a, b) {
    assert(arguments.length == 2, '必须传2个参数');
    assert(typeof a == 'number', '第一个参数必须是数字');
    assert(typeof b == 'number', '第二个参数必须是数字');
    return a + b;
}
console.log(sum(1,2))
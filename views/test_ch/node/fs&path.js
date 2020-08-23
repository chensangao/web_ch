/*
 * @Description: 
 * @Author: chenhao
 * @Date: 2020-08-21 23:13:32
 * @LastEditTime: 2020-08-21 23:39:02
 * @LastEditors: chenhao
 */
const fs = require('fs');
const path = require('path');

fs.writeFile('views/test_ch/node/fs.txt', 'fs文件读写123', err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('写入完成');
    }
})
fs.readFile('views/test_ch/node/fs.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    else if (data) {
        console.log(data);
    }
});

let str = 'views/test_ch/node/fs.txt';
console.log('目录:' + path.dirname(str));
console.log('文件:' + path.basename(str));
console.log('后缀:' + path.extname(str));
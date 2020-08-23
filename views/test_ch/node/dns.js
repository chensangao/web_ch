/*
 * @Description: 
 * @Author: chenhao
 * @Date: 2020-08-22 18:28:59
 * @LastEditTime: 2020-08-22 18:30:23
 * @LastEditors: chenhao
 */
const dns = require('dns');
dns.resolve('baidu.com', (err, res) => {
    if (err) {
        console.log('解析失败');
    } else {
        console.log(res);
    }
})
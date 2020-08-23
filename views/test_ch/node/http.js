/*
 * @Description: 
 * @Author: chenhao
 * @Date: 2020-08-21 21:55:33
 * @LastEditTime: 2020-08-22 22:34:49
 * @LastEditors: chenhao
 */

/*
nodejs三大特性: 单线程 非阻塞IO 事件循环机制
*/
const http = require('http');
const { fstat } = require('fs');

let server = http.createServer((req, res) => {//浏览器请求时执行回调
    console.log('启动服务');

    // 方法1
    // switch (req.url) {
    //     case '/login':
    //         res.write('请登录');
    //         break;
    //     case '/home':
    //         res.write('主页');
    //         break;
    // }

    // 方法2
    fstat.readFile(`www${req.url}`, (err, data) => {//异步
        if (err) {
            res.write('404');
        } else {
            res.write(data);
        }
        res.end();
    })

    console.log('发送结束');
})

server.listen(81); 
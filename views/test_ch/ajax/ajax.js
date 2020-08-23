/*
 * @Description: 原生js实现ajax
 * @Author: chenhao
 * @Date: 2020-07-27 17:05:16
 * @LastEditTime: 2020-08-21 21:34:07
 * @LastEditors: chenhao
 */

function Ajax(options) {
    options = options || {};

    options.type = options.type || 'GET';
    options.data = options.data || {};
    options.dataType = options.dataType || 'text';
    options.async = options.async || true;

    //数据组装 
    let arr = [];
    for (let name in options.data) {
        arr.push(`${name}=${encodeURIComponent(options.data[name])}`);
    }
    let strData = arr.join('&');

    var xhr = new XMLHttpRequest();

    if (options.type.toUpperCase() == 'POST') {
        //连接
        xhr.open('POST', options.url, options.async);
        // 添加http头，发送信息至服务器时内容编码类型
        // content-type: 
        // text/plain 纯文本
        // application/x-www-form-urlencoded name=value&...
        // multipart/form-data 定界符分隔各个数据(文件上传)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //发送
        xhr.send(strData);
    }
    else if (options.type.toUpperCase() == 'GET') {
        //连接
        xhr.open('GET', options.url + '?' + strData, options.async);
        //发送
        xhr.send();
    }

    //接受
    xhr.onreadystatechange = function () {
        // readyState : 0初始化 1已连接 2已发送 3已接收头 4已接收体(请求已完成)
        // status: 1xx 消息
        // 2xx 成功
        // 3xx 重定向   301永久重定向 302临时重定向 304缓存
        // 4xx 请求错误(客户端) 404
        // 5xx 服务端错误 503服务不可用(维护)
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                let rdata = xhr.responseText;
                switch (options.dataType) {
                    case 'json':
                        if (window.JSON && JSON.parse) {//浏览器兼容
                            rdata = JSON.parse(rdata);
                        } else {
                            // rdata = eval('(' + str + ')');
                        }
                        break;
                    case 'xml':
                        break;
                    case 'text':
                        break;

                }
                options.success && options.success(rdata);
            }
            else {
                options.error && options.error(xhr.responseText);
            }
        }
    };

}

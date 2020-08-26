/*
 * @Description: 原生js实现ajax
 * @Author: chenhao
 * @Date: 2020-07-27 17:05:16
 * @LastEditTime: 2020-08-24 10:56:41
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
        /*
        readyState : 0初始化 1已连接 2已发送 3已接收头 4已接收体(请求已完成)
        status: 
        1xx 消息 
            100 Continue 继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，
                表示确认，之后发送具体参数信息
        2xx 成功
            201 Created 请求成功并且服务器创建了新的资源
            202 Accepted 服务器已接受请求，但尚未处理
        3xx 重定向   
            301 Moved Permanently 请求的网页已永久移动到新位置。
            302 Found 临时性重定向。
            303 See Other 临时性重定向，且总是使用 GET 请求新的 URI。
            304 Not Modified 自从上次请求后，请求的网页未修改过。
        4xx 请求错误(客户端) 
            400 Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
            401 Unauthorized 请求未授权。
            403 Forbidden 禁止访问。
            404 Not Found 找不到如何与 URI 相匹配的资源。
        5xx 服务端错误 503服务不可用(过载维护)
        */
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

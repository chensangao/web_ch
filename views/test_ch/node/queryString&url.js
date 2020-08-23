/*
 * @Description: 
 * @Author: chenhao
 * @Date: 2020-08-22 18:16:44
 * @LastEditTime: 2020-08-22 18:25:30
 * @LastEditors: chenhao
 */
const querystring = require('querystring');
let obj1 = querystring.parse('?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=nodejs&fenlei=256&rsv_pq=c8bb8bd90002518b&rsv_t=9555H%2BItaTBsNu7fj7iuBn%2BuoKNXWBK%2BUDafeG77Ew0fAsmiDdF726mbuWU&rqlang=cn&rsv_enter=1&rsv_dl=ib&rsv_sug3=8&rsv_sug1=7&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&inputT=2026&rsv_sug4=2811');
console.log('querystring:', obj1);

const url = require('url');
let obj2 = url.parse('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=nodejs&fenlei=256&rsv_pq=c8bb8bd90002518b&rsv_t=9555H%2BItaTBsNu7fj7iuBn%2BuoKNXWBK%2BUDafeG77Ew0fAsmiDdF726mbuWU&rqlang=cn&rsv_enter=1&rsv_dl=ib&rsv_sug3=8&rsv_sug1=7&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&inputT=2026&rsv_sug4=2811', true);
console.log('url:', obj2);
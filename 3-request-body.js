//引入 querystring 模块
const qs = require('querystring');
require('http')
.createServer((request, response) => {
    //1. 声明变量
    let body = '';
    //2. 绑定 data 事件
    request.on('data', chunk => {
        body += chunk;
    });
    //3. 绑定 end 事件
    request.on('end', () => {
        //输出 『请求体』的结果
        // console.log(body);// username=wangxu&password=3925837  => {username: 'wagnxu', password:3925837}
        const data = qs.parse(body);
        console.log(data);
        console.log(data.username);
        console.log(data.password);
        response.end('recevie body');
    });
})
.listen(8080);
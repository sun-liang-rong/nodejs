//1. 引入 http 模块
const http = require('http');

//2. 创建服务对象
// request    是对请求报文的封装对象   获取请求请求报文中的数据
// response   是对响应报文的封装对象   设置响应
const server = http.createServer(function(request, response){
    //设置响应 end 设置响应体
    response.end('HELLO HTTP Server');
});

//3. 监听端口 启动服务
server.listen(80, () => {
    console.log('服务已经启动, 8000 端口监听中....');
});
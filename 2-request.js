//1. 引入 HTTP 模块
const http = require('http');
const url = require('url');

//2. 创建服务对象
const server = http.createServer((request, response) => {
    //请求类型
    // console.log(request.method);
    //获取URL
    // console.log(request.url);//保存了 url 中的路径与查询字符串 /search?wd=笔记本&price=2000
    //http版本号
    // console.log(request.httpVersion);//version 版本
    //请求头信息的获取
    // console.log(request.headers);
    // console.log(request.headers['cache-control']);

    //url的内容的拆分
    const result = url.parse(request.url, true);
    console.log(result);// pathname 属性就是『路径』  query 属性就是『查询字符串』

    //设置响应体
    response.end('today is monday');
});

//3. 监听端口
server.listen(80, () => {
    console.log('服务已经启动.....');
});
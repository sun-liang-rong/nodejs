require('http')
.createServer((request, response) => {
    //设置响应状态码
    response.statusCode = 201;
    response.statusCode = 404;
    response.statusCode = 403;
    //设置响应状态字符串
    response.statusMessage = 'love'; 
    //响应头  set 设置  header 头   //注意头信息不能使用『中文』
    response.setHeader('message', 'iloveyou');
    response.setHeader('abc', 'def');
    response.setHeader('Content-type','text/html;charset=utf-8');
    //响应体   
    // response.write('我是响应体哦');
    // response.write('xxxx');
    // response.end();

    response.end('结束');

    // response.end('干啥呢???');//结束  end 必须要设置
    // response.end('ddddd');
})
.listen(8080);
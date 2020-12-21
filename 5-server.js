/**
 * HTTP 服务
 *      GET   /index.html          返回 public 目录中的 index.html 文件的内容
 *      GET   /css/app.css         返回 public 目录中的 css/app.css 文件的内容
 *      GET   /images/logo.png     返回 public 目录中的 images/logo.png 文件的内容
 * 
 */
const url = require('url');
const fs = require('fs');

require('http')
.createServer((request, response) => {
    //获取请求的路径部分
    let path = url.parse(request.url, true).pathname;
    //判断
    if(path === '/index.html') {
        //返回文件中的内容
        const html = fs.readFileSync(__dirname + '/public/index.html');
        //响应
        response.end(html);
    }else if(path === '/css/app.css'){
        const css = fs.readFileSync(__dirname + '/public/css/app.css');
        //响应 CSS
        response.end(css);
    }else if(path === '/images/logo.png'){
        const img = fs.readFileSync(__dirname + '/public/images/logo.png');
        //响应 CSS
        response.end(img);
    }else if(path === '/css/index.css'){
        const css = fs.readFileSync(__dirname + '/public/css/index.css');
        //响应 CSS
        response.end(css);
    }
    else{
        response.end('<h1>404 Not Found</h1>')
    }
})
.listen(8080);
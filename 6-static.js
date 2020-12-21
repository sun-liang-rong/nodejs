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
    //拼接文件路径    /index.html   =>  __dirname + '/public/index.html'
    // 网站的根目录
    // let directory = __dirname + '/public';// directory 文件夹
    let directory = 'd:';// directory 文件夹
    let filePath =  directory + path;

    //读取文件
    fs.readFile(filePath, (err, data) => {
        //如果出错啦
        if(err) {
            //
            response.end('<h1>404 Not Found</h1>');
        }else{
            //如果没有错误, 响应文件中的内容
            response.end(data);
        }
    })
})
.listen(8080);
//1. 引入 fs 模块
const fs = require('fs');

//2. 创建写入流对象
const ws = fs.createWriteStream('./app.css');

//3. 调用方法写入内容
ws.write('*{margin:0;padding:0}\r\n');
ws.write('body{height:100vh;background:#98c}');

//4. 关闭写入流
ws.close();
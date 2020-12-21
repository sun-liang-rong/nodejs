// 1. 引入 fs 模块
const fs = require('fs'); //abc

//2. 调用方法读取文件内容
fs.readFile('./index.html', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});

//读取文件 同步API
let result = fs.readFileSync('./index.html');
console.log(result.toString());

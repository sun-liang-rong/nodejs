// promisify
// 将 fs 中的方法转化为 promise 的版本
const util = require('util');// util 工具
const fs = require('fs');
//获取读取文件的函数 
const mineReadFile = util.promisify(fs.readFile);

//读取文件测试
mineReadFile('./resource/1.html')
.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
});


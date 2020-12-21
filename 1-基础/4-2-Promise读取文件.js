//读取文件内容
const fs = require('fs');

// fs.readFile('./resource/1.htmlx', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// });

//Promise 读取文件内容
let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/1.htmlx', (err, data) => {
        //如果失败
        if(err){
            reject(err);
        }
        resolve(data);
    });
});

p.then(value => {
    console.log(value.toString());
}, reason => {
    console.log('读取发生的错误, 错误的代码为' + reason.code);
});

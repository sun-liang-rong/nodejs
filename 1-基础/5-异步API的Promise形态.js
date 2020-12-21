/**
 * 作用: 读取文件的中的内容
 * 封装一个函数 mineReadFile
 * 参数        path 文件路径
 * 返回结果    Promise 对象
 */
const fs = require('fs');

function mineReadFile(path){
    return new Promise((resolve, reject) =>{
        //使用 readFile 读取文件内容
        fs.readFile(path, (err, data) => {
            if(err) {
                //调用 reject 函数
                reject(err);
            }
            //成功的状态 调用 resolve 函数
            resolve(data);
        });
    });
}

// ./resource/1.html
mineReadFile('./resource/1.html')
.then(value => {
    console.log(value.toString());
}, reason => {
    console.log('读取失败啦!!');
});

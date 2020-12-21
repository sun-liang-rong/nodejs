const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/h5200922');

//实例化 Promise 对象
let p = new Promise((resolve, reject) => {
    //连接成功
    mongoose.connection.on('open', () => {
        resolve();
    });
    //连接失败
    mongoose.connection.on('error', () => {
        reject();
    });
});

//暴露
module.exports = p;
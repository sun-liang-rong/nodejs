const mongoose = require('mongoose');
//引入 db.js
const p = require('./db/db');

p.then(value => {
    //结构对象
    const UserSchema = new mongoose.Schema({
        username:String,
        password:String,
        age: Number,
        gender: String
    })

    const UserModel = mongoose.model('users', UserSchema);

    //mongoose 提供 promise 的结果处理
    UserModel.find({username: 'abc'}).then(data => {
        console.log(data);
    });
}, reason => {
    console.log('连接失败, 请重试');
})


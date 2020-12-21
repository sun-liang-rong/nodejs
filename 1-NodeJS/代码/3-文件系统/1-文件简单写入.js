// index.html  => 你为了你的正义，我为了我的正义。
// 1. 引入 fs 模块
// require 内置函数 单词意思 『需要』
const fs = require('fs');

// 2. 调用方法写入文件  ./ 当前文件夹
fs.writeFile('../index.html', '你为了你的正义，我为了我的正义。', err => {
//     //err 如果写入失败为 『错误对象』, 如果写入成功值为 『null』
//     if(err){
//         console.log('写入失败');
//     }else{
//         console.log('写入成功');
//     }
});

// 绝对路径方式写入  D:/h5200922.abc  
// fs.writeFile('d:/h5200922', '何其有幸，我们相遇', err => {
//     if(err){
//         console.log('写入失败');
//         console.log(err);
//     }else{
//         console.log('写入成功');
//     }
// });

// 注意点  d:/abc/def/index.html   abc
// fs.writeFile('d:/abc/def/index.html', '何其有幸，我们相遇', err => {
//     if(err){
//         console.log('写入失败');
//         console.log(err);
//     }else{
//         console.log('写入成功');
//     }
// });

//flag  a  =>  append   w => write   r => read
// 执行顺序与编写顺序是不一致的
fs.writeFile('./index.html', 'abc',{flag: 'a'}, err => {
    //如果有错 则抛出错误
    if(err) throw err;
});
console.log(Date.now());


// //同步 API   执行顺序与编写顺序是一致的
fs.writeFileSync('./index.html', Date.now());
console.log(Date.now());

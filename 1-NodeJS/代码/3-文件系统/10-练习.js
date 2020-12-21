/*
    通过 fs 模块创建下列文件结构 创建在 D:/    D:/project 
    project
        images
            logo.png
        css
            app.css
        js
            app.js
        index.html
 */
const fs = require('fs');
//同步API
// fs.mkdirSync('d:/project');
// fs.mkdirSync('d:/project/images');
// fs.mkdirSync('d:/project/css');
// fs.mkdirSync('d:/project/js');
// //创建文件
// fs.writeFileSync('D:/project/images/logo.png', '');
// fs.writeFileSync('D:/project/css/app.css', '');
// fs.writeFileSync('D:/project/js/app.js', '');
// fs.writeFileSync('D:/project/index.html', '');

//异步API
fs.mkdir('d:/project', err => {
    if(err) throw err;
    //创建project/images
    fs.mkdir('d:/project/images', err => {
        if(err) throw err;
        fs.writeFile('D:/project/images/logo.png', '', err => {
            if(err) throw err;
            console.log('logo 创建完成');
        })
    });

    //css
    fs.mkdir('d:/project/css', err => {
        if(err) throw err;
        fs.writeFile('d:/project/css/app.css','', err => {
            if(err) throw err;
            console.log('css 创建成功');
        })
    })

    //js
    fs.mkdir('d:/project/js', err => {
        if(err) throw err;
        fs.writeFile('d:/project/js/app.js','', err => {
            if(err) throw err;
            console.log('js 创建成功');
        })
    });

    //创建
    fs.writeFile('d:/project/index.html','',(err) => {
        if(err) throw err;
        console.log('index.html 创建成功');
    });
});





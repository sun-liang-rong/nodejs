const fs = require('fs');

//打印的是 1-3.html 文件合并后的结果
// fs.readFile('./resource/1.html', (err, data1) => {
//     if(err) throw err;
//     fs.readFile('./resource/2.html', (err, data2) => {
//         if(err) throw err;
//         fs.readFile('./resource/3.html', (err, data3) => {
//             if(err) throw err;
//             console.log(data1 + data2 + data3);
//         })
//     });
// });

//解构赋值
const p = new Promise((resolve,reject) => {
    fs.readFile('./resource/1.html', (err, data) => {
        if(err) reject(err);
        resolve(data);
    });
});
p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/2.html', (err, data) => {
            if(err) reject(err);
            //成功
            resolve([value, data]);
        });
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resource/3.html', (err, data) => {
            if(err) reject(err);
            //成功
            resolve([...value, data]);
        });
    })
}).then(value => {
    console.log(value.join(''));
}).catch(reason => {
    console.log('操作失败');
    fs.writeFileSync('./error.log', reason.path + '\r\n', {flag: 'a'})
});

//
// const {promisify} = require('util');
// const mineReadFile = promisify(fs.readFile);

// const one = mineReadFile('./resource/1.html');
// const two = mineReadFile('./resource/2.html');
// const three = mineReadFile('./resource/3.html');

// const result = Promise.all([one, two, three]);

// result.then(value => {
//     console.log(value.join(''));
// }, reason => {
//     console.log('读取失败');
// });


//获取 promisify 
const {promisify} = require('util');
const fs = require('fs');
//创建一个promise版本的函数
const readFile = promisify(fs.readFile);

async function main(){
    //读取第一个文件中的内容
    const one =  await readFile('./resource/1.html');
    const two =  await readFile('./resource/2.html');
    const three =  await readFile('./resource/3.html');
    console.log(one + two + three);
}

main();
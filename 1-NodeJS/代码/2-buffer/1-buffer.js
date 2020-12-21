
//Buffer 的创建
let buf_1 = Buffer.alloc(10);// 创建一个长度为 10 个字节的 Buffer
let buf_2 = Buffer.allocUnsafe(10);// 申请空间 但是不对内容初始化  速度会稍微快一些
let buf_3 = Buffer.from('iloveyou');

// console.log(buf_3);

//buffer的操作
//读取
// console.log(buf_3[1]);//
// console.log(buf_3.toString()); // **相对重点**

//设置
// buf_3[0] = 120;
// console.log(buf_3.toString());

//关于溢出  高位舍弃   ‭0001 0110 1101‬  => 0110 1101‬
// buf_3[0] = 365;
// console.log(buf_3.toString());

//关于中文 一个 utf-8 的中文字符占据 3 个字节
// let buf_4 = Buffer.from('我爱你');
// console.log(buf_4);

//字符集 ASCII 字符集  单字节码表
// 128 个符号

    // ||
    // ||
    // \/

// ASCII 扩展表  利用上剩下的 128 

    //  ||
    //  ||
    //  \/

// 双字节码表   2字节 => 16 二进制位 => 65536   1000 你    1000 어
    //  gbk
    //  gb2312
    //  big5

// 万国码 unicode 全世界的符号进行统一编码
    // utf-8  编码方式
    // 7220 11

//字符串中使用 unicode
let str = '\u6211\u7231\u4f60';
console.log(str);
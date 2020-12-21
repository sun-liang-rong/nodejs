
const p = new Promise((resolve, reject) => {
    console.log(111);
    resolve();
})

p.then(value => {
    console.log(222);
    //有且只有一种方法
    return new Promise(() => {});
    // return Promise.reject('error');
}).then(value => {
    console.log(333);
}).then(value => {
    console.log(444);
}).then(value => {
    console.log(555);
}).catch(reason => {
    console.log(reason);
});
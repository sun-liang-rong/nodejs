//构造函数
function Promise(executor) {
    //保存 this 的值
    const self = this;
    this.promiseState = 'pending';
    this.promiseResult = null;
    //声明 resolve 函数
    function success(value){
        //修改 promise 对象状态
        self.promiseState = 'fulfilled';
        //设置 promise 成功的结果
        self.promiseResult = value;
    }

    //声明 reject 函数
    function error(reason){
        //修改 promise 对象状态
        self.promiseState = 'rejected';
        //设置 promise 成功的结果
        self.promiseResult = reason;
    }
    try{
        //调用执行器函数
        executor(success, error);
    }catch(e){
        //修改promise对象状态为失败
        error(e);
    }
}

//then 方法
Promise.prototype.then = function(onResolved, onRejected){
    //执行对应的回调函数
    if(this.promiseState === 'fulfilled'){
        //执行成功的回调
        onResolved(this.promiseResult);
    }
    if(this.promiseState === 'rejected'){
        //执行失败的回调
        onRejected(this.promiseResult);
    }
}


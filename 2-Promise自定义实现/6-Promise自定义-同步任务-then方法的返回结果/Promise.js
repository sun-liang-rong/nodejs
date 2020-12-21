//构造函数
function Promise(executor) {
    //保存 this 的值
    const self = this;
    this.promiseState = 'pending';
    this.promiseResult = null;
    this.callbacks = [];
    //声明 resolve 函数
    function success(value){
        //判断 promise 对象状态是否已经改变
        if(self.promiseState !== 'pending') return;
        //修改 promise 对象状态
        self.promiseState = 'fulfilled';
        //设置 promise 成功的结果
        self.promiseResult = value;
        //执行成功的回调
        self.callbacks.forEach(item => {
            item.onResolved(self.promiseResult);
        });
    }

    //声明 reject 函数
    function error(reason){
        //判断 promise 对象状态是否已经改变
        if(self.promiseState !== 'pending') return;
        //修改 promise 对象状态
        self.promiseState = 'rejected';
        //设置 promise 成功的结果
        self.promiseResult = reason;
        self.callbacks.forEach(item => {
            item.onRejected(self.promiseResult);
        });
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
    return new Promise((resolve, reject) => {
        //执行对应的回调函数
        if(this.promiseState === 'fulfilled'){
            //执行成功的回调
            let result = onResolved(this.promiseResult);
            //判断
            if(result instanceof Promise){
                result.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                });
            }else{
                //若回调的执行结果不是 promise 对象, 则返回的 promise 状态为成功
                resolve(result);
            }
        }
        if(this.promiseState === 'rejected'){
            //执行失败的回调
            let result = onRejected(this.promiseResult);
            //对回调函数的执行结果进行判断
            if(result instanceof Promise){
                result.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            }else{
                //调用 resolve 函数
                resolve(result);
            }
        }
        //判断
        if(this.promiseState === 'pending'){
            this.callbacks.push({
                onResolved, 
                onRejected
            });
        }   
    });
}


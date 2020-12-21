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
    //检测 onRejected 是否为一个函数
    if(typeof onRejected !== 'function') {
        //设置 onRejected 默认值
        onRejected = reason => {
            throw reason;
        }
    }

    if(typeof onResolved !== 'function'){
        onResolved = value => {
            return value;
        }
    }

    return new Promise((resolve, reject) => {
        //执行对应的回调函数
        if(this.promiseState === 'fulfilled'){
            try{
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
            }catch(e){
                reject(e);
            }

        }
        //执行失败的回调
        if(this.promiseState === 'rejected'){
            try{
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
            }catch(e){
                reject(e);
            }  
        }
        //判断
        if(this.promiseState === 'pending'){
            this.callbacks.push({
                onResolved: function(value){
                    try{
                        //调用成功的回调  对成功的结果进行处理
                        let result = onResolved(value);
                        //判断
                        if(result instanceof Promise){
                            result.then(v => {
                                resolve(v);
                            }, r => {
                                reject(r);
                            })
                        }else{
                            resolve(result);
                        }
                    }catch(e){
                        reject(e);
                    }
                },
                onRejected: function(reason){
                    try{
                        //执行失败的回调
                        let result = onRejected(reason);
                        if(result instanceof Promise){
                            result.then(resolve, reject);
                        }else{
                            resolve(result);
                        }
                    }catch(e){
                        reject(e);
                    }
                }
            });
        }   
    });
}

//catch 方法  指定获取失败结果的失败的回调函数
Promise.prototype.catch = function(onRejected){
    return this.then(undefined, onRejected);
}
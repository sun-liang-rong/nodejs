//构造函数
function Promise(executor){
    const self = this;
    //声明两个属性 
    this.PromiseState = 'pending';
    this.PromiseResult = '';
    //声明一个数组 保存回调
    this.callbacks = [];
    //声明resolve 函数
    function resolve(value){
        //判断一个状态是否已经修改了
        if(self.PromiseState !== 'pending') return;
        //改变 Promise 对象的状态 PromiseState
        self.PromiseState = 'fulfilled';
        //设置 Promise 成功的结果值 PromiseResult
        self.PromiseResult = value;
        //执行成功的回调
        self.callbacks.forEach(item => {
            item.onResolved(self.PromiseResult);
        });
    }
    //声明 reject 函数
    function reject(reason){
        //判断一个状态是否已经修改了
        if(self.PromiseState !== 'pending') return;
        //改变 Promise 对象的状态 PromiseState
        self.PromiseState = 'rejected';
        //设置 Promise 成功的结果值 PromiseResult
        self.PromiseResult = reason;
        //执行失败的回调
        self.callbacks.forEach(item => {
            item.onRejected(self.PromiseResult);
        });
    }

    try{
        //调用执行器函数
        executor(resolve, reject);
    }catch(error){
        //改变状态为失败
        reject(error);
    }
}

//then方法
Promise.prototype.then = function(onResolved, onRejected){
    //根据 promise 实例对象的状态, 执行对应的回调
    if(this.PromiseState === 'fulfilled'){
        //执行成功的回调
        onResolved(this.PromiseResult);
    }

    if(this.PromiseState === 'rejected'){
        //执行失败的回调
        onRejected(this.PromiseResult);
    }

    if(this.PromiseState === 'pending'){
        //不能执行某一个回调 保存两个回调
        this.callbacks.push({onResolved, onRejected});
    }
}


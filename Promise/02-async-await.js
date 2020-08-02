function delayPrint(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("After 1000ms");
            if(Math.random() < .5){
                resolve('complete');
            }else{
                reject('fail');
            }
        }, 1000);
    });
}

// await 和 async 必需同時使用
// 不可以單獨使用 async
(async () => {
    await delayPrint().then((success) => {
        console.log("resolve", success);
    }).catch((e)=>{
        console.log("reject", e);
    });
    // 用 await 會進行等待
    // 使其同步
    console.log("print after delayPrint() complete");
})();

console.log("main thread");

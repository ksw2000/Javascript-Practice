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

console.log("please wait 1000ms");
delayPrint().then((ret) => {
    console.log("resolve", ret);
}).catch((e) => {
    console.log("reject", e);
});

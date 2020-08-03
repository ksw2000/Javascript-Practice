function intSeq(){
    var i = 0;
    return function(){
        return i += 1;
    }
}

var nextInt = intSeq();
console.log(nextInt());
console.log(nextInt());
console.log(nextInt());
console.log(nextInt());

console.log("Update");

var newNextInt = intSeq();
console.log(newNextInt());
console.log(newNextInt());
console.log(newNextInt());

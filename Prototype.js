function Person(name, year) {
    this.name = name;
    this.year = year;
    this.log = function () {
        console.log(this.name, this.year);
    }
}

let sueka = new Person('sueka', 2003);
let maikichi = new Person('maikichi', 2005);
sueka.log();
maikichi.log();
console.log(sueka.log === maikichi.log);        // false

// sueka 和 maikichi 兩個所持有的 log 其實是分別的兩個 prototype
// 我們可以把這個 function 抽出來，變成所有 Person 共享的方法
// 類似 java class 的 static function

function Person2(name, year) {
    this.name = name;
    this.year = year;
}

Person2.prototype.log = function () {
    console.log(this.name, this.year);
}

ririri = new Person2('ririri', 2005);
yupon = new Person2('yupon', 2003);
ririri.log();
yupon.log();
console.log(ririri.log === yupon.log);                              // true
console.log(ririri.__proto__ === Person2.prototype);                // true
console.log(Person2.prototype.__proto__ === Object.prototype);      // true
console.log(Object.prototype.__proto__);                            // null
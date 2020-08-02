function Person(name, age){
    this.name = name;
    this.age = age;
    console.log("Person constructor()");
    this.methodA = () => {
        console.log("Person.methodA()");
    }
}
Person.prototype.methodB = () => {
    console.log("Person.methodB()");
}

function Teacher(name, age, subject){
    Person.call(this, name, age);       // STEP1: call Person's constructor
    this.subject = subject;
    this.methodA();
    this.methodB();                     // Error if we do not inherit Person's prototype
}

// STEP2: Inherit Person's prototype
Teacher.prototype = Object.create(Person.prototype);
// 將 Teacher 的建構元指回 Teacher
Teacher.prototype.constructor = Teacher;

t = new Teacher("三神憐子", 29, "美術");

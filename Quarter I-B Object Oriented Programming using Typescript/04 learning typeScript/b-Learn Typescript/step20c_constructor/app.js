"use strict";
// If parent class provide constructor(with or without argument) then you must have to create constructor in child class
// and must call super()
// Below code will not work because it does not call super,
// Case 1:
// If parent class provide constructor and child class does not provide then
// child class will use parent's constrcutor and child's object creation will required use of parent's constructor parameters
class A {
    constructor(theName, age) {
        this.name = theName;
        console.log('A constrcutor');
    }
}
class B extends A {
}
let a = new A('A', 4); // This is working as expected
let b = new B('C', 8); // This is working too as child class use parents constructor
// let c: B = new B(); // This is not working as child class must use parents constructor
// let d: B = new B('C'); // Thsi is also not working
// Case 2:
// If parent class does not provide constructor and child class provide constrcutor then
// child class must call super() within child's class constructor
// call to super can be at any line in constructor unlike any other object oriented language with call to super must be as first line
class C {
}
class D extends C {
    constructor(theName, age) {
        super(); //
        this.name = theName;
        console.log('D constrcutor');
    }
}
let aa = new C(); // This is working as expected
// let bb: D = new D(); // This is not working because child class has its 2 argumnet constrcutor
let cc = new D('C', 8); // This is working as expected
// Case c:
// If parent class and child class both provide constructor then child class must call super with same parameters as they are in
// parent's constructor
// call to super can be at any line in constructor unlike any other object oriented language with call to super must be as first line
class E {
    constructor(theName, age) {
        this.name = theName;
        console.log('E constrcutor');
    }
    displayName() {
        console.log('Name = ' + this.name);
    }
}
class F extends E {
    constructor(theName) {
        super(theName, 4); // Must call super with two arguments
        this.name = theName;
        console.log('F constrcutor');
        //super("Hello",5); // Multiple supper call working, No error here -- seems to be some special case
    }
}
let e = new E('E', 1);
let f = new F('F');
f.displayName(); // Display "F"

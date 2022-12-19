"use strict";
/******************/
/*** step11_oop ***/
/******************/
Object.defineProperty(exports, "__esModule", { value: true });
class Sonar {
    ping() {
        console.log('ping!');
    }
}
class C {
    x = 0;
}
const c = new C();
// y is optional and only avaialable in interface
// y not defined in class C
// c.y = 10;
/************************************************/
/*
    extends Clauses
*/
/************************************************/
// extend a class based on other
// super to be called if using base in constructor
class Animal {
    test = 21;
    move() {
        console.log('Moving along!');
    }
}
class Dog extends Animal {
    constructor() {
        super();
        console.log(this.test, 'woof!');
    }
    woof(times) {
        for (let i = 0; i < times; i++) {
            this.move();
        }
    }
}
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
/************************************************/
/*
    Overriding Methods
*/
/************************************************/
// We can override properties or methods
class Base {
    greet() {
        console.log('Hello, world!');
    }
}
class Derived extends Base {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const dd = new Derived();
dd.greet();
dd.greet('reader');
// refer to derived class through base
// Alias the derived instance through a base class reference
const bb = dd;
// No problem
bb.greet();
/************************************************/
class Base1 {
    greet() {
        console.log('Hello, w-o-r-l-d!');
    }
}
// trying to chnage base method
// changing base method not allowed
class Derived1 extends Base1 {
}
const bbb = new Derived1();
// Crashes because "name" will be undefined
bbb.greet();
class AnimalHouse {
    resident;
    constructor(animal) {
        this.resident = animal;
    }
}
class DogHouse extends AnimalHouse {
    constructor(dog) {
        super(dog);
    }
}
/************************************************/
/*
    Initialization Order
*/
/************************************************/
class BaseB {
    name = 'base';
    constructor() {
        console.log('My name is ' + this.name);
    }
}
class DerivedD extends BaseB {
    name = 'derived';
}
// Prints "base", not "derived"
const dD = new DerivedD();
/************************************************/
/*
    Inheriting Built-in Types
*/
/************************************************/
// Method may be undefined here
class MsgError extends Error {
    constructor(m) {
        super(m);
    }
    sayHello() {
        return 'hello ' + this.message;
    }
}
/************************************************/
class MsgError1 extends Error {
    constructor(m) {
        super(m);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, MsgError1.prototype);
    }
    sayHello() {
        return 'hello ' + this.message;
    }
}

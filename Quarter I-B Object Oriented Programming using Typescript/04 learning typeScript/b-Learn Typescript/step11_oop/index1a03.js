"use strict";
/******************/
/*** step11_oop ***/
/******************/
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************/
/*+++++++++++++*/
/*++ Classes ++*/
/*+++++++++++++*/
/************************************************/
/*-----------------------*/
/*-- Member Visibility --*/
/*-----------------------*/
/************************************************/
/*
    public
*/
/************************************************/
// public member can be accessed any where
class Greeter {
    greet() {
        console.log('hi!');
    }
}
const g = new Greeter();
g.greet();
/************************************************/
/*
    protected
*/
/************************************************/
// only avaialble in subclasses
class Greeter1 {
    greet() {
        console.log('Hello, ' + this.getName());
    }
    getName() {
        return 'hi';
    }
}
class SpecialGreeter extends Greeter1 {
    howdy() {
        // OK to access protected member here
        console.log('Howdy, ' + this.getName());
    }
}
const gg = new SpecialGreeter();
// OK
gg.greet();
gg.howdy();
// Error
// gg.getName();
/************************************************/
/*
    Exposure of protected members
*/
/************************************************/
class Base {
    m = 10;
}
class Derived extends Base {
    // No modifier, so default is 'public'
    m = 15;
}
const d = new Derived();
console.log(d.m); // OK
/************************************************/
/*
    Cross-hierarchy protected access
*/
/************************************************/
class BaseB {
    x = 1;
}
class Derived1 extends BaseB {
    x = 5;
}
class Derived2 extends BaseB {
    f1(other) {
        other.x = 10;
    }
}
/************************************************/
/*
    private
*/
/************************************************/
// no access outside class
class Base101 {
    x = 0;
}
const bbb = new Base101();
// Can't access from outside the class
// console.log(bbb.x);
class Derived101 extends Base101 {
    showX() {
        // Can't access in subclasses
        // console.log(this.x);
    }
}
class Baset {
    x = 0;
}
// Error
// class Derivedt extends Baset {
//   x = 1;
// }
/************************************************/
/*
    Cross-instance private access
*/
/************************************************/
class A {
    x = 10;
    sameAs(other) {
        // No error
        return other.x === this.x;
    }
}
/************************************************/
/*
    Caveats
*/
/************************************************/
// private and protected are for ts only
/************************************************/
// can access using bracket notation
class MySafe {
    secretKey = 12345;
}
const s = new MySafe();
// Error
// Not allowed during type checking
// console.log(s.secretKey);
// OK
console.log(s['secretKey']);
/************************************************/
// using # make a member hard private
class Dog {
    #barkAmount = 0;
    personality = 'happy';
    constructor() { }
}

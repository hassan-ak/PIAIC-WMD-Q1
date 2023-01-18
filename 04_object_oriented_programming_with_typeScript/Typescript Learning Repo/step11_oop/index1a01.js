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
/*-------------------*/
/*-- Class Members --*/
/*-------------------*/
/************************************************/
// Empty class
class Point {
}
/************************************************/
/*
    Fields
*/
/************************************************/
// Fields are properties
// Genarly considered as writeable properties
class Point1 {
    x;
    y;
}
const pt = new Point1();
pt.x = 0;
pt.y = 0;
/************************************************/
// Property type is explicit and any if not defined
class Point2 {
    x = 0;
    y = 0;
}
const pt2 = new Point2();
// Prints 0, 0
console.log(`${pt2.x}, ${pt2.y}`);
// type restriction on properties is same as other variables
// Type error
// pt2.x = "0"
/************************************************/
/*
    --strictPropertyInitialization
*/
/************************************************/
// property to be initilized in the constructor
// Error property to be initilized
// class BadGreeter {
//   name: string;
// }
/************************************************/
class GoodGreeter {
    name;
    constructor() {
        this.name = 'hello';
    }
}
/************************************************/
// you can also initilize at other time
// need to add definite assignment assertion operation
class OKGreeter {
    // Not initialized, but no error
    name;
}
/************************************************/
/*
    readonly
*/
/************************************************/
// readonly properties can only be assigned through constructor
class Greeter {
    name = 'world';
    constructor(otherName) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    err() {
        // Cannnot assign readonly property outside constructor
        // this.name = "not ok";
        console.log(g.name);
    }
}
const g = new Greeter('Hassan');
g.err();
// Cannnot assign readonly property outside constructor
// g.name = "also not ok";
/************************************************/
/*
    Constructors
*/
/************************************************/
// almost same as functions
// defaut parameter values
class Point3 {
    x;
    y;
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
/************************************************/
// constructor overloads
class Point4 {
    constructor(xs, y) {
        // TBD
    }
}
let test1 = new Point4('x');
let test2 = new Point4(21, 'x');
/************************************************/
/*
    Super Calls
*/
/************************************************/
// to use value from base need to call super
class Base {
    k = 4;
}
class Derived extends Base {
    constructor() {
        super();
        // This refers to the value from base class
        console.log(this.k);
    }
}
let test3 = new Derived();
/************************************************/
/*
    Methods
*/
/************************************************/
// function on a class is known as methods
class Point5 {
    x = 10;
    y = 10;
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
/************************************************/
// to access a property in a class need to use this
let x = 0;
class C {
    x = 'hello';
    m() {
        // This is trying to modify 'x' from line 1,
        // not the class property
        // x = 'world';
        this.x = 'world';
    }
}
/************************************************/
/*
    Getters / Setters
*/
/************************************************/
// to get or set properties of a class
// of ony get no set it is readonly
// get an set both to be used as property
class C1 {
    _length = 125;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
let newTest = new C1();
console.log(newTest.length);
newTest.length = 852;
console.log(newTest.length);
/************************************************/
// set method can accept other tpes
// need to change to required type before assigning
class Thing {
    _size = 0;
    get size() {
        return this._size;
    }
    set size(value) {
        let num = Number(value);
        // Don't allow NaN, Infinity, etc
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
/************************************************/
/*
    Index Signatures
*/
/************************************************/
// Classes can have index signature same as objects
class MyClass {
    testProperty = false;
    check(s) {
        return this[s];
    }
}

/****************/
/*** Class 18 ***/
/****************/
/************************************************/
class Dog {
    name = '';
}
let pet;
// OK, because of structural typing
pet = new Dog();
let pet1;
// dog's inferred type is { name: string; owner: string; }
let dog = { name: 'Lassie', owner: 'Rudd Weatherwax' };
pet1 = dog;
function greet(pet) {
    console.log('Hello, ' + pet.name);
}
greet(dog); // OK
/************************************************/
/*-----------------------------*/
/*-- Comparing two functions --*/
/*-----------------------------*/
/************************************************/
// for parameters of a function
// all should exist with no extra parameter
let x = (a) => 0;
let y = (b, s) => 0;
y = x; // OK
//x = y; // Error
/************************************************/
// for return of a function
// all should exist with no less parameter
let xx = () => ({ name: 'Alice' });
let yy = () => ({ name: 'Alice', location: 'Seattle' });
xx = yy; // OK
// yy = xx; // Error, because x() lacks a location property
/************************************************/
/*-------------*/
/*-- Classes --*/
/*-------------*/
/************************************************/
// only members are compared
// static mebers and constructs dont effect compatability
class Animal {
    feet;
    constructor(name, numFeet) { }
}
class Size {
    feet;
    constructor(numFeet) { }
}
let a = new Animal('', 1);
let s = new Size(1);
a = s; // OK
s = a; // OK
let x1;
let y1 = {};
x1 = y1; // OK, because y matches structure of x
/************************************************/
let identity = function (x) {
    // ...
};
let reverse = function (y) {
    // ...
};
identity = reverse; // OK, because (x: any) => any matches (y: any) => any
export {};

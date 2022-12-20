/************************************************/
/*** step12a_class_structural_typing_question ***/
/************************************************/

/************************************************/

/*++++++++++++++++++++++++*/
/*++ Type Compatibility ++*/
/*++++++++++++++++++++++++*/

/************************************************/
// Structural typing
interface Pet {
  name: string;
}
class Dog {
  name: string = '';
}
let pet: Pet;
// OK, because of structural typing
pet = new Dog();

/************************************************/

/*------------------*/
/*-- Starting out --*/
/*------------------*/

/************************************************/
// 'x' is compatible with 'y' if 'y' has at least the same members as 'x'
interface Pet1 {
  name: string;
}
let pet1: Pet1;
// dog's inferred type is { name: string; owner: string; }
let dog = { name: 'Lassie', owner: 'Rudd Weatherwax' };
pet1 = dog;
function greet(pet: Pet) {
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
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
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
  feet: number | undefined;
  constructor(name: string, numFeet: number) {}
}
class Size {
  feet: number | undefined;
  constructor(numFeet: number) {}
}
let a: Animal = new Animal('', 1);
let s: Size = new Size(1);
a = s; // OK
s = a; // OK

/************************************************/

/*--------------*/
/*-- Generics --*/
/*--------------*/

/************************************************/
interface Empty<T> {}
let x1: Empty<number>;
let y1: Empty<string> = {};
x1 = y1; // OK, because y matches structure of x

/************************************************/
let identity = function <T>(x: T): void {
  // ...
};
let reverse = function <U>(y: U): void {
  // ...
};
identity = reverse; // OK, because (x: any) => any matches (y: any) => any

/************************************************/

export {};

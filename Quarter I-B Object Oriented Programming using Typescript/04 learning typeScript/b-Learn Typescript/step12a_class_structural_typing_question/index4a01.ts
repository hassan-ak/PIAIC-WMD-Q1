/************************************************/
/*** step12a_class_structural_typing_question ***/
/************************************************/

/************************************************/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++ Structural Typing & Duck Typing in TypeScript ++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

/************************************************/

/************************************************/

/*-------------------------------------*/
/*-- Structural Typing in TypeScript --*/
/*-------------------------------------*/

/************************************************/
interface Dog {
  name: string;
}
interface Cat {
  name: string;
}
interface Person {
  firstName: string;
  lastName: string;
}

let dog: Dog = { name: 'mars' };
let cat: Cat = { name: 'venus' };

dog = cat; //ok
cat = dog; //ok

let person: Person = { firstName: 'jon', lastName: 'snow' };
// dog = person; // Property 'name' is missing in type 'Person' but required in type 'Dog'
// cat = person; //Property 'name' is missing in type 'Person' but required in type 'Cat'.

/************************************************/
interface Dog1 {
  name: string;
  breedName: string;
}
interface Cat1 {
  name: string;
}
let dog1: Dog1 = { name: 'mars', breedName: 'Bull dog' };
let cat1: Cat1 = { name: 'venus' };
cat1 = dog1;
// dog1 = cat1; //Property 'breedName' is missing in type 'Cat' but required in type 'Dog'

/************************************************/

/*-----------------------------------*/
/*-- Classes and Structural Typing --*/
/*-----------------------------------*/

/************************************************/
// If some property is private here will be an error on assignment
class Dog21 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Cat21 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let dog21 = new Dog21('mars', 20);
let cat21 = new Cat21('mars', 20);
dog21 = cat21; //ok
cat21 = dog21; //ok

/************************************************/

export {};

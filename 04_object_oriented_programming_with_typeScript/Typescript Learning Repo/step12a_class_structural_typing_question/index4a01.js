"use strict";
/************************************************/
/*** step12a_class_structural_typing_question ***/
/************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
let dog = { name: 'mars' };
let cat = { name: 'venus' };
dog = cat; //ok
cat = dog; //ok
let person = { firstName: 'jon', lastName: 'snow' };
let dog1 = { name: 'mars', breedName: 'Bull dog' };
let cat1 = { name: 'venus' };
cat1 = dog1;
// dog1 = cat1; //Property 'breedName' is missing in type 'Cat' but required in type 'Dog'
/************************************************/
/*-----------------------------------*/
/*-- Classes and Structural Typing --*/
/*-----------------------------------*/
/************************************************/
// If some property is private here will be an error on assignment
class Dog21 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Cat21 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let dog21 = new Dog21('mars', 20);
let cat21 = new Cat21('mars', 20);
dog21 = cat21; //ok
cat21 = dog21; //ok

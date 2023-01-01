/****************/
/*** Class 18 ***/
/****************/
/************************************************/
/***************************************/
/*** step12b_class_structural_typing ***/
/***************************************/
/************************************************/
//----
// A confusion about Structural Typing:
// Object literals have an associated freshness before
// they're bound to a variable. The same doesn't apply
// for any other expressions.
// The idea is that object literals are often used for option bags
// (where the user has to manually type out each property
// name at each use-site), and this behavior catches typos.
// If you'd like to prevent Animal from being assigned to a Human,
// you can add a private property to Animal,
// since private and protected properties need to originate
// from the same declaration to be compatible.
//----
class Human {
    name;
    constructor(name) {
        this.name = name;
    }
}
//----
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + ' is a Human and is eating');
    }
}
//----
let h1 = new Human('');
let a1 = new Animal('world', 50);
//this is working, but it should not because it is
//a fresh object with extra properties
h1 = new Animal('test', 25);
//----
// Properties missing
// a1 = new Human('zeeshan'); //ERROR
//----
//my common sense is saying this is correct, but?
let a = { name: 'Zia' };
export {};

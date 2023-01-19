/****************/
/*** Class 18 ***/
/****************/
/************************************************/
/***************************************/
/*** step14_classes_private_modifier ***/
/***************************************/
/************************************************/
//---
//In TypeScript, each member is public by default.
class Animal {
    name;
    constructor(theName) {
        this.name = theName;
    }
    move(meters) {
        alert(this.name + ' moved ' + meters + 'm.');
    }
}
var a = new Animal('cat');
// Error
// a.name;
console.log(a);
export {};

"use strict";
/***************************************/
/*** step14_classes_private_modifier ***/
/***************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************/
//---
//In TypeScript, each member is public by default.
class Animal {
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

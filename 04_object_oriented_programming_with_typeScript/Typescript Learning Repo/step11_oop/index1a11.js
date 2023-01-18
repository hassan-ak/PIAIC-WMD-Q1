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
/*----------------------------------*/
/*-- abstract Classes and Members --*/
/*----------------------------------*/
/************************************************/
// abstract has no implementation provided
// purpose is as base for subclasses
class Base {
    printName() {
        console.log('Hello, ' + this.getName());
    }
}
// Error
// const b = new Base();
class Derived extends Base {
    getName() {
        return 'world';
    }
}
const d = new Derived();
d.printName();

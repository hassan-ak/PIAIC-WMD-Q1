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
/*-- Class Expressions --*/
/*-----------------------*/
/************************************************/
// can use expression
// same as anonumus functions
const someClass = class {
    content;
    constructor(value) {
        this.content = value;
    }
};
const m = new someClass('Hello, world');

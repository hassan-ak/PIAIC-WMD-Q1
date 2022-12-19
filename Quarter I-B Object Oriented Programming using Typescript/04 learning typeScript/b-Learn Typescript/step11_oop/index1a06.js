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
/*---------------------*/
/*-- Generic Classes --*/
/*---------------------*/
/************************************************/
// Types can be infered upon usage
/************************************************/
class Box {
    contents;
    constructor(value) {
        this.contents = value;
    }
}
const b = new Box('hello!');
/************************************************/
/*
    Type Parameters in Static Members
*/
/************************************************/
class Box1 {
}

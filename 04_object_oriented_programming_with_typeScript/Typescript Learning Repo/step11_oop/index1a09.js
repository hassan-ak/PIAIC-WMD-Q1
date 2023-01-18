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
/*--------------------------*/
/*-- Parameter Properties --*/
/*--------------------------*/
/************************************************/
// if same names rae in constructor properties no need to define constructor
class Params {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        // No body necessary
    }
}
const a = new Params(1, 2, 3);
console.log(a.x);

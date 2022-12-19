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
/*-----------------------------------*/
/*-- Relationships Between Classes --*/
/*-----------------------------------*/
/************************************************/
class Point1 {
    x = 0;
    y = 0;
}
class Point2 {
    x = 0;
    y = 0;
}
// OK
const p = new Point2();
/************************************************/
class Person {
    name;
    age;
}
class Employee {
    name;
    age;
    salary;
}
// OK
const pp = new Employee();
/************************************************/
class Empty {
}
function fn(x) {
    // can't do anything with 'x', so I won't
}
// All OK!
fn(window);
fn({});
fn(fn);

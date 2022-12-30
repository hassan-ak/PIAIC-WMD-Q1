"use strict";
/**************************************/
/*** step19d_interfaces_array_types ***/
/**************************************/
Object.defineProperty(exports, "__esModule", { value: true });
let myArray = ['Bob', 'Fred'];
var first = myArray[0];
let myDictionary = { first: 'Bob', second: 'Fred' };
var first = myDictionary['first'];
// Will not work, property length is required
// let myDictionary2: Dictionary2 = { first: 'Bob', second: 'Fred' };
// Will work, length property is defined but not much usefull
let myDictionary3 = { first: 'Bob', second: 'Fred', length: '2' };
var first = myDictionary3['first'];

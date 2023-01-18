"use strict";
// step09a_functions
/*********************************************************/
function greeter(fn) {
    fn('Hello, World');
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function greeter1(fn) {
    // ...
}
function doSomething(fn) {
    console.log(fn.description + ' returned ' + fn(6));
}
function fn(ctor) {
    return new ctor('hello');
}
/*********************************************************/
// Generic Function
// Type Any
function firstElement(arr) {
    return arr[0];
}
// Type defined
function firstElement1(arr) {
    return arr[0];
}
// s is of type 'string'
const s = firstElement1(['a', 'b', 'c']);
// n is of type 'number'
const n = firstElement1([1, 2, 3]);
// u is of type undefined
const u = firstElement1([]);
/*********************************************************/
function map(arr, func) {
    return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
/*********************************************************/
function add(x, y) {
    //Named function
    return x + y;
}
/*********************************************************/
var myAdd1 = function (x, y) {
    //Anonymous function
    return x + y;
};
/*********************************************************/
var myAdd2 = function (x, y) {
    //Anonymous function with explict type
    return x + y;
};
/*********************************************************/
var myAdd3 = function (x, y) {
    //type names dont matter
    return x + y;
};
/*********************************************************/
var myAdd4 = (a, b) => a + b; //Lambda functions
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

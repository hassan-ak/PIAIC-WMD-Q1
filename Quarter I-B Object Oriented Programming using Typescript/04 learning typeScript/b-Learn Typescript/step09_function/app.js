"use strict";
function add(x, y) {
    //Named function
    return x + y;
}
var myAdd1 = function (x, y) {
    //Anonymous function
    return x + y;
};
var myAdd2 = function (x, y) {
    //Anonymous function with explict type
    return x + y;
};
var myAdd3 = function (x, y) {
    //type names dont matter
    return x + y;
};
var myAdd4 = (a, b) => a + b; //Lambda functions
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

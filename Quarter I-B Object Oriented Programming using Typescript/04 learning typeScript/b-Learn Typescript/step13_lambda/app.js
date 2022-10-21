"use strict";
var add = (a, b) => {
    return a + b;
};
var add1 = (x, y) => x + y;
//output var add1 = function(x, y){return x + y};
// var myFunction = (f) => {
//   this.x = 'x';
// }; //automatically creating the that-equals-this pattern
/*
When compiled, TypeScript automatically makes sure this points to my class instead of the enclosed function:
var _this = this;
var myFunction = function (f) { _this.x = "x"; };
*/

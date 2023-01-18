"use strict";
// step06_explict_casting
/*******************************************************/
// Casting with as
let x = 'hello';
console.log(x.length);
// returuns undefined
let x1 = 4;
console.log(x1.length);
// returuns undefined
let x2 = 4;
// Error
// // console.log((x2 as boolean).length);
/*******************************************************/
// Casting with <>
let x3 = 'hello';
console.log(x3.length);
/*******************************************************/
let myType = { name: 'Zia', id: 1 };
myType = { id: 2, name: 'Tom' }; // can only assign a type which has the at least the same properties
myType = { id: 3, name: 'Mike', gender: false }; //can add a property
myType = { name: 'Mike', gender: false }; //can even reduce the properties because of initial any explict casting
/*******************************************************/
let myType1 = { name: 'Zia', id: 1 }; //this is an alternative syntax for casting
myType1 = { id: 2, name: 'Tom' }; // can only assign a type which has the at least the same properties
myType1 = { id: 3, name: 'Mike', gender: false }; //can add a property
myType1 = { name: 'Mike', gender: false }; //can even reduce the properties because of initial any explict casting
/*******************************************************/
let a = 2;
//Error
// // let b = a as string;
/*******************************************************/
let myname = 'Zia';
console.log(myname.length);
console.log(myname.length);
/*******************************************************/

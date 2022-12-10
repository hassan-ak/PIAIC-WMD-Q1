"use strict";
// step09c_function_optional_parameter
/***********************************************************/
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
}
let result1 = buildName('Bob'); //ok
// Error
// // let result2 = buildName('Bob', 'Adams', 'Sr.'); //error, too many parameters
var result3 = buildName('Bob', 'Adams'); //also ok
/***********************************************************/
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
};
/***********************************************************/
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
/***********************************************************/
// Error
// // function multiply(a: number, b?: number, c: number): number {
// //   if (typeof c !== 'undefined') {
// //     return a * b * c;
// //   }
// //   return a * b;
// // }
/***********************************************************/

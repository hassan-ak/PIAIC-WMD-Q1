"use strict";
// step09f_function_overloads
//this is not part of the overload list,
//so it has only three overloads
function add(arg1, arg2) {
    return arg1 + arg2;
}
//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add('Hello', 'World'));
console.log(add(true, false));
function len(x) {
    return x.length;
}
len(''); // OK
len([0]); // OK
// Error
// // len(Math.random() > 0.5 ? 'hello' : [0]);
/*********************************************/

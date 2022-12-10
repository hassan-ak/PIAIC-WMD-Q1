"use strict";
//overloads give us type-checked calls
function add(arg1, arg2) {
    //this is not part of the overload list, so it has only three overloads
    return arg1 + arg2;
}
//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add('Hello', 'World'));
console.log(add(true, false));

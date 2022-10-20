"use strict";
/*
    Chapter 5. Functions
    Function Types
*/
// Function Type Aliases
let stringToNumber;
stringToNumber = (input) => input.length; // Ok
function usesNumberToString(numberToString) {
    console.log(`The string is: ${numberToString(1234)}`);
}
usesNumberToString((input) => `${input}! Hooray!`); // Ok
// usesNumberToString((input) => input * 2);
// ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'string'.

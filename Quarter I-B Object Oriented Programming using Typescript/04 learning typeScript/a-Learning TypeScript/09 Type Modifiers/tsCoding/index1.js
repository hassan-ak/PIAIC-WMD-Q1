"use strict";
/*
    Chapter 9. Type Modifiers
    Top Types
*/
// any, Again
let anyValue;
anyValue = 'Lucille Ball'; // Ok
anyValue = 123; // Ok
console.log(anyValue); // Ok
function greetComedian(name) {
    // No type error...
    console.log(`Announcing ${name.toUpperCase()}!`);
}
greetComedian({ name: 'Bea Arthur' });
// Runtime error: name.toUpperCase is not a function

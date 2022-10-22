"use strict";
/*
    Chapter 9. Type Modifiers
    Type Assertions
*/
//   Type Assertion Caveats
const seasonCounts1 = new Map([
    ['Broad City', 5],
    ['Community', 6],
]);
// Type: string
const knownValue1 = seasonCounts1.get('I Love Lucy');
// console.log(knownValue1.toUpperCase()); // No type error, but...
// Runtime TypeError: Cannot read property 'toUpperCase' of undefined.

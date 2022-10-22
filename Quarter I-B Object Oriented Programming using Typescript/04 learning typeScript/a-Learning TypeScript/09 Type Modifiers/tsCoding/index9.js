"use strict";
/*
    Chapter 9. Type Modifiers
    Type Assertions
*/
//   Non-Null Assertions
// Inferred type: Date | undefined
let maybeDate = Math.random() > 0.5 ? undefined : new Date();
// Asserted type: Date
maybeDate;
// Asserted type: Date
maybeDate;
const seasonCounts = new Map([
    ['I Love Lucy', 6],
    ['The Golden Girls', 7],
]);
// Type: string | undefined
const maybeValue = seasonCounts.get('I Love Lucy');
// console.log(maybeValue.toUpperCase());
// ~~~~~~~~~~
// Error: Object is possibly 'undefined'.
// Type: string
const knownValue = seasonCounts.get('I Love Lucy');
// console.log(knownValue.toUpperCase()); // Ok

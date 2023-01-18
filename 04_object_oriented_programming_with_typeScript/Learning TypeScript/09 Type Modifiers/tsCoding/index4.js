"use strict";
/*
    # Chapter 9. Type Modifiers
*/
Object.defineProperty(exports, "__esModule", { value: true });
/***********************************************************/
/*---------------------*/
/*-- Type Assertions --*/
/*---------------------*/
/***********************************************************/
const rawData = `["grace", "frankie"]`;
JSON.parse(rawData);
JSON.parse(rawData);
JSON.parse(rawData);
JSON.parse(rawData);
/***********************************************************/
/************************************/
/*** Asserting Caught Error Types ***/
/************************************/
/***********************************************************/
try {
    // (code that may throw an error)
}
catch (error) {
    console.warn('Oh no!', error.message);
}
/***********************************************************/
try {
    // (code that may throw an error)
}
catch (error) {
    console.warn('Oh no!', error instanceof Error ? error.message : error);
}
/***********************************************************/
/***************************/
/*** Non-Null Assertions ***/
/***************************/
/***********************************************************/
// Inferred type: Date | undefined
let maybeDate = Math.random() > 0.5 ? undefined : new Date();
// Asserted type: Date
maybeDate;
// Asserted type: Date
maybeDate;
/***********************************************************/
const seasonCounts = new Map([
    ['I Love Lucy', 6],
    ['The Golden Girls', 7],
]);
// Type: string | undefined
const maybeValue = seasonCounts.get('I Love Lucy');
// console.log(maybeValue.toUpperCase());
const knownValue = seasonCounts.get('I Love Lucy');
console.log(knownValue.toString()); // Ok
/***********************************************************/
/******************************/
/*** Type Assertion Caveats ***/
/******************************/
/***********************************************************/
const seasonCounts1 = new Map([
    ['Broad City', 5],
    ['Community', 6],
]);
// Type: string
const knownValue1 = seasonCounts.get('I Love Lucy');
console.log(knownValue.toString()); // No type error, but...
// // Error
// const declared: Entertainer = {
//   name: "Moms Mabley",
// };
const asserted = {
    name: 'Moms Mabley',
};
// console.log(declared.acts.join(', '));
console.log(asserted.acts.join(', '));
/***********************************************************/
/*++++++++++++++++++++++++++++++*/
/*+++ Assertion assignability ++*/
/*++++++++++++++++++++++++++++++*/
/***********************************************************/
// let myValue = 'Stella!' as number;
/***********************************************************/
let myValueDouble = '1337';

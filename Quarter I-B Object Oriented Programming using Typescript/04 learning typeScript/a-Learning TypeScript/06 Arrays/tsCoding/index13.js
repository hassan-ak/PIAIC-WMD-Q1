"use strict";
/*
  Chapter 6. Arrays
  Tuples
*/
// Tuple Assignability
//  Tuples as rest parameters
function logPair(name, value) {
    console.log(`${name} has ${value}`);
}
const pairArray = ['Amage', 1];
// logPair(...pairArray);
// Error: A spread argument must either have a
// tuple type or be passed to a rest parameter.
const pairTupleIncorrect = [1, 'Amage'];
// logPair(...pairTupleIncorrect);
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.
const pairTupleCorrect = ['Amage', 1];
logPair(...pairTupleCorrect); // Ok
function logTrio(name, value) {
    console.log(`${name} has ${value[0]} (${value[1]}`);
}
const trios = [
    ['Amanitore', [1, true]],
    ['Æthelflæd', [2, false]],
    ['Ann E. Dunwoody', [3, false]],
];
trios.forEach((trio) => logTrio(...trio)); // Ok
// trios.forEach(logTrio);
// ~~~~~~~
// Argument of type '(name: string, value: [number, boolean]) => void'
// is not assignable to parameter of type
// '(value: [string, [number, boolean]], ...) => void'.
// Types of parameters 'name' and 'value' are incompatible.
// Type '[string, [number, boolean]]' is not assignable to type 'string'.

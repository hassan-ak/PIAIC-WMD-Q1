"use strict";
/*
  Chapter 6. Arrays
  Tuples
*/
// Tuple Assignability
// Type: (boolean | number)[]
const pairLoose = [false, 123];
// const pairTupleLoose: [boolean, number] = pairLoose;
// ~~~~~~~~~~~~~~
// Error: Type '(number | boolean)[]' is not
// assignable to type '[boolean, number]'.
// Target requires 2 element(s) but source may have fewer.
const tupleThree = [false, 1583, 'Nzinga'];
const tupleTwoExact = [tupleThree[0], tupleThree[1]];
// const tupleTwoExtra: [boolean, number] = tupleThree;
// ~~~~~~~~~~~~~
// Error: Type '[boolean, number, string]' is
// not assignable to type '[boolean, number]'.
// Source has 3 element(s) but target allows only 2.

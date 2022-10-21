"use strict";
/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Index Signatures
//     Numeric index signatures
// Ok
const mixesNumbersAndStrings = {
    0: '',
    key1: '',
    key2: undefined,
};
// interface MoreNarrowStrings {
//   [i: number]: string | undefined;
//   // Error: 'number' index type 'string | undefined'
//   // is not assignable to 'string' index type 'string'.
//   [i: string]: string;
// }

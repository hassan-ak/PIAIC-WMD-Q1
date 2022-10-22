"use strict";
/*
    Chapter 9. Type Modifiers
    Type Assertions
*/
//   Type Assertion Caveats
//     Assertion assignability
// let myValue = 'Stella!' as number;
// ~~~~~~~~~~~~~~~~~~~
// Error: Conversion of type 'string' to type 'number'
// may be a mistake because neither type sufficiently
// overlaps with the other. If this was intentional,
// convert the expression to 'unknown' first.
let myValueDouble = '1337'; // Ok, but... eww.

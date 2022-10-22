"use strict";
/*
    Chapter 9. Type Modifiers
    Type Assertions
*/
//   Asserting Caught Error Types
try {
    // (code that may throw an error)
}
catch (error) {
    console.warn('Oh no!', error.message);
}
try {
    // (code that may throw an error)
}
catch (error) {
    console.warn('Oh no!', error instanceof Error ? error.message : error);
}

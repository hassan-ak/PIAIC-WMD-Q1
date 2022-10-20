/*
    Chapter 5. Functions
    Function Types
*/
// Function Type Parentheses

// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;
// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;

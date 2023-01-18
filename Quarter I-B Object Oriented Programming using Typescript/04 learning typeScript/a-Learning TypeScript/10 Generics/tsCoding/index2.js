"use strict";
/*
    # Chapter 10. Generics
*/
/***********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/*-----------------------*/
/*-- Generic Functions --*/
/*-----------------------*/
/***********************************************************/
function identity(input) {
    return input;
}
const numeric = identity('me'); // Type: "me"
const stringy = identity(123); // Type: 123
/***********************************************************/
const identity1 = (input) => input;
identity1(123); // Type: 123
/***********************************************************/
/***********************************/
/*** Explicit Generic Call Types ***/
/***********************************/
/***********************************************************/
function logWrapper(callback) {
    return (input) => {
        console.log('Input:', input);
        callback(input);
    };
}
// Type: (input: string) => void
logWrapper((input) => {
    console.log(input.length);
});
// Type: (input: unknown) => void
// Error
// logWrapper((input) => {
//   console.log(input.length);
// });
/***********************************************************/
// Type: (input: string) => void
logWrapper((input) => {
    console.log(input.length);
});
logWrapper((input) => { });
/***********************************************************/
/*****************************************/
/*** Multiple Function Type Parameters ***/
/*****************************************/
/***********************************************************/
function makeTuple(first, second) {
    return [first, second];
}
let tuple = makeTuple(true, 'abc');
/***********************************************************/
function makePair(key, value) {
    return { key, value };
}
// Ok: neither type argument provided
makePair('abc', 123); // Type: { key: string; value: number }
// Ok: both type arguments provided
makePair('abc', 123); // Type: { key: string; value: number }
makePair('abc', 123); // Type: { key: "abc"; value: 123 }

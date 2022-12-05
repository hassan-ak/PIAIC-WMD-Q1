"use strict";
/*
    Chapter 4. Objects
*/
const hasBoth = {
    firstName: 'Lucille',
    lastName: 'Clifton',
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName = hasBoth;
//
console.log(hasBoth);
console.log(withFirstName);
console.log(withLastName);
// Ok
const hasBoth1 = {
    first: 'Sarojini',
    last: 'Naidu',
};
// Ok: all fields match what's expected in Poet
const poetMatch = {
    born: 1928,
    name: 'Maya Angelou',
};
// Error Extra Property
// // const extraProperty: Poet1 = {
// //   activity: 'walking',
// //   born: 1935,
// //   name: 'Mary Oliver',
// // };
/***********************************************************/
const existingObject = {
    activity: 'walking',
    born: 1935,
    name: 'Mary Oliver',
};
const extraPropertyButOk = existingObject; // Ok
// Ok
const poemMatch = {
    author: {
        firstName: 'Sylvia',
        lastName: 'Plath',
    },
    name: 'Lady Lazarus',
};
// Ok
const ok = {
    author: 'Rita Dove',
    pages: 80,
};
// Ok: author is provided as undefined
const hasRequired = {
    author: undefined,
};
// Error
// // const missingRequired: Writers = {};
/***********************************************************/

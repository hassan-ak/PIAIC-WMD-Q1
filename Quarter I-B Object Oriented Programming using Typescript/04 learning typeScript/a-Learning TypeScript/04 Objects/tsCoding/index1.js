"use strict";
// *** Objects *** //
var hasBoth = {
    firstName: 'Lucille',
    lastName: 'Clifton',
    mid: 'Jack',
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName = hasBoth;
console.log(hasBoth);
console.log(withFirstName);
console.log(withLastName);
// Ok
var hasBoth1 = {
    first: 'Sarojini',
    last: 'Naidu',
};
// Ok: all fields match what's expected in Poet
const poetMatch = {
    born: 1928,
    name: 'Maya Angelou',
};
// const extraProperty: Poet1 = {
//   activity: 'walking',
//   born: 1935,
//   name: 'Mary Oliver',
// };
// Error: Type '{ activity: string; born: number; name: string; }'
// is not assignable to type 'Poet'.
// Object literal may only specify known properties,
// and 'activity' does not exist in type 'Poet'
const existingObject = {
    activity: 'walking',
    born: 1935,
    name: 'Mary Oliver',
};
const extraPropertyButOk = existingObject;
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
// const missingRequired: Writers = {};
// ~~~~~~~~~~~~~~~
// Error: Property 'author' is missing in type
// '{}' but required in type 'Writers'.

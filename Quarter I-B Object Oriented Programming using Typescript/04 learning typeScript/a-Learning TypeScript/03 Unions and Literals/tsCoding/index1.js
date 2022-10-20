"use strict";
// Chapter 3. Unions and Literals
// Union Types
let mathematician = Math.random() > 0.5 ? undefined : 'Mark Goldberg';
// Declaring union types
let thinker = null;
if (Math.random() > 0.5) {
    thinker = 'Susanne Langer'; // Ok
}
// Union properties
let physicist = Math.random() > 0.5 ? 'Marie Curie' : 84;
physicist.toString(); // Ok
// physicist.toUpperCase(); error, dont exist on number
// physicist.toFixed(); error dont exist on string
// Narrowing
// Assignment Narrowing
let admiral;
admiral = 'Grace Hopper';
admiral.toUpperCase(); // Ok: string
// admiral.toFixed(); // error as typed narrowed to string
let inventor = 'Hedy Lamarr';
inventor.toUpperCase(); // Ok: string
// inventor.toFixed(); // error as typed narrowed to string
// Conditional Checks
let scientist = Math.random() > 0.5 ? 'Rosalind Franklin' : 51;
if (scientist === 'Rosalind Franklin') {
    // Type of scientist: string
    scientist.toUpperCase(); // Ok
}
// Typeof Checks
let researcher = Math.random() > 0.5 ? 'Rosalind Franklin' : 51;
if (typeof researcher === 'string') {
    researcher.toUpperCase(); // Ok: string
}
if (!(typeof researcher === 'string')) {
    researcher.toFixed(); // Ok: number
}
else {
    researcher.toUpperCase(); // Ok: string
}
typeof researcher === 'string'
    ? researcher.toUpperCase() // Ok: string
    : researcher.toFixed(); // Ok: number
// Literal Types
const philosopher = 'Hypatia';
let lifespan;
lifespan = 89; // Ok
lifespan = 'ongoing'; // Ok
// lifespan = true; // type error
// Literal Assignability
let specificallyAda;
specificallyAda = 'Ada'; // Ok
// specificallyAda = "Byron"; // type error
let someString = ''; // Type: string
// specificallyAda = someString; // type error
someString = ':)';

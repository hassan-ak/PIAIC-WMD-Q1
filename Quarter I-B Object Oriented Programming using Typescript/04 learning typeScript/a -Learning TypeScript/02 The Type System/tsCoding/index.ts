// ts knows the data type itself
let fName = 'Hassan';
console.log(typeof fName);

// Famous DataTypes
/*
    null;
    undefined;
    boolean; // true or false
    string; // "", "Hi!", "abc123", …
    number; // 0, 2.1, -4, …
    bigint; // 0n, 2n, -4n, …
    symbol; // Symbol(), Symbol("hi"), …
*/

// TS can infer type
// Inferred type: string
let bestSong = Math.random() > 0.5 ? 'Chain of Fools' : 'Respect';
var firstName = 'Whitney';
// firstName.length();

// Error Types
/*
    Syntax error 
    type error
*/

// Assignability
var firstName = 'Carole';
firstName = 'Joan';
// firstName = true;

// Type Annotation
// Evolving any
let rocker; // Type: any
rocker = 'Joan Jett'; // Type: string
rocker.toUpperCase(); // Ok
rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok
// rocker.toUpperCase();
// ~~~~~~~~~~~
// Error: 'toUpperCase' does not exist on type 'number'.

let rocker1: string;
rocker1 = 'Joan Jett';
// rocker1 = 19.58; type error here

// Type Shapes
let rapper = 'Queen Latifah';
rapper.length; // ok
// rapper.push('!'); property error
let cher = {
  firstName: 'Cherilyn',
  lastName: 'Sarkisian',
};
// cher.middleName; property error

// Modules

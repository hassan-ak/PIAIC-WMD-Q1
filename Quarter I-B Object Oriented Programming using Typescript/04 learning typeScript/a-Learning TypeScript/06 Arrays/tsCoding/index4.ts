/*
  Chapter 6. Arrays
  Array Types
*/

// Union-Type Arrays

// Type is either a number or an array of strings
let stringOrArrayOfNumbers: string | number[];
// Type is an array of elements that are each either a number or a string
let arrayOfStringOrNumbers: (string | number)[];
// Type is (string | undefined)[]
const namesMaybe = ['Aqualtune', 'Blenda', undefined];
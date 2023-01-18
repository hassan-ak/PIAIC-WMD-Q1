/*
    # Chapter 6. Arrays
*/

/***********************************************************/

/*-----------------*/
/*-- Array Types --*/
/*-----------------*/

/***********************************************************/
let arrayOfNumbers: number[];
arrayOfNumbers = [4, 8, 15, 16, 23, 42];

/***********************************************************/

/********************************/
/*** Array and Function Types ***/
/********************************/

/***********************************************************/
let createStrings: () => string[];
let stringCreators: (() => string)[];

/***********************************************************/

/*************************/
/*** Union-Type Arrays ***/
/*************************/

/***********************************************************/
// Type is either a number or an array of strings
let stringOrArrayOfNumbers: string | number[];

// Type is an array of elements that are each either a number or a string
let arrayOfStringOrNumbers: (string | number)[];

// Type is (string | undefined)[]
const namesMaybe = ['Aqualtune', 'Blenda', undefined];

/***********************************************************/

/***************************/
/*** Evolving Any Arrays ***/
/***************************/

/***********************************************************/
// Type: any[]
let values = [];
// Type: string[]
values.push('');
// Type: (number | string)[]
values[0] = 0;

/***********************************************************/

/*******************************/
/*** Multidimensional Arrays ***/
/*******************************/

/***********************************************************/
let arrayOfArraysOfNumbers: number[][];
arrayOfArraysOfNumbers = [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
];

/***********************************************************/
// Type: number[][]
let arrayOfArraysOfNumbers1: number[][];

/***********************************************************/

export {};

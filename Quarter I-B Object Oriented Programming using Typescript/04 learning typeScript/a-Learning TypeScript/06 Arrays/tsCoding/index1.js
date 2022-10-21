"use strict";
/*
  Chapter 6. Arrays
*/
const elements = [true, null, undefined, 42];
// elements.push('even', ['more']);
// Value of elements: [true, null, undefined, 42, "even", ["more"]]
const warriors = ['Artemisia', 'Boudica'];
// Ok: "Zenobia" is a string
warriors.push('Zenobia');
// warriors.push(true);
// ~~~~
// Argument of type 'boolean' is not assignable to parameter of type 'string'.

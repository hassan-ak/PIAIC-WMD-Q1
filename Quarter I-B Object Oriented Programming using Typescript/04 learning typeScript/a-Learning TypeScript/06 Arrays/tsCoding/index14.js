"use strict";
/*
  Chapter 6. Arrays
  Tuples
*/
// Tuple Inferences
// Return type: (string | number)[]
function firstCharAndSize(input) {
    return [input[0], input.length];
}
// firstChar type: string | number
// size type: string | number
const [firstChar, size] = firstCharAndSize('Gudit');

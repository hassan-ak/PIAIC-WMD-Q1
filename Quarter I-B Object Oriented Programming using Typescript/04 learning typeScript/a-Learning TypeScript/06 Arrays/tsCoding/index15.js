"use strict";
/*
  Chapter 6. Arrays
  Tuples
*/
// Tuple Inferences
//  Explicit tuple types
// Return type: [string, number]
function firstCharAndSizeExplicit(input) {
    return [input[0], input.length];
}
// firstChar type: string
// size type: number
const [firstChar1, size1] = firstCharAndSizeExplicit('Cathay Williams');

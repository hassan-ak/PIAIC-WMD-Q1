"use strict";
/*
  Chapter 6. Arrays
  Tuples
*/
// Tuple Inferences
//  Const asserted tuples
// Type: (string | number)[]
const unionArray = [1157, 'Tomoe'];
// Type: readonly [1157, "Tomoe"]
const readonlyTuple = [1157, 'Tomoe'];
const pairMutable = [1157, 'Tomoe'];
pairMutable[0] = 1247; // Ok
// const pairAlsoMutable: [number, string] = [1157, 'Tomoe'] as const;
// ~~~~~~~~~~~~~~~
// Error: The type 'readonly [1157, "Tomoe"]' is 'readonly'
// and cannot be assigned to the mutable type '[number, string]'.
const pairConst = [1157, 'Tomoe'];
// pairConst[0] = 1247;
// ~
// Error: Cannot assign to '0' because it is a read-only property.
// Return type: readonly [string, number]
function firstCharAndSizeAsConst(input) {
    return [input[0], input.length];
}
// firstChar type: string
// size type: number
const [firstChar2, size2] = firstCharAndSizeAsConst('Ching Shih');

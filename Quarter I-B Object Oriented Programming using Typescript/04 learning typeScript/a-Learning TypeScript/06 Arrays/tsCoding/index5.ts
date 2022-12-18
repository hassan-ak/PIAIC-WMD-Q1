/*
    # Chapter 6. Arrays
*/
/***********************************************************/

/*------------*/
/*-- Tuples --*/
/*------------*/

/***********************************************************/
let yearAndWarrior: [number, string];
yearAndWarrior = [530, 'Tomyris'];
// Error
// // yearAndWarrior = [false, 'Tomyris'];
// Error
// // yearAndWarrior = [530];

/***********************************************************/
// year type: number
// warrior type: string
let [year, warrior] =
  Math.random() > 0.5 ? [340, 'Archidamia'] : [1828, 'Rani of Jhansi'];

/***********************************************************/

/***************************/
/*** Tuple Assignability ***/
/***************************/

/***********************************************************/
// Type: (boolean | number)[]
const pairLoose = [false, 123];
// Error
// // const pairTupleLoose: [boolean, number] = pairLoose;

/***********************************************************/
const tupleThree: [boolean, number, string] = [false, 1583, 'Nzinga'];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];
// Error
// // const tupleTwoExtra: [boolean, number] = tupleThree;

/***********************************************************/

/*++++++++++++++++++++++++++++++++*/
/*+++ Tuples as rest parameters ++*/
/*++++++++++++++++++++++++++++++++*/

/***********************************************************/
function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`);
}
const pairArray = ['Amage', 1];
// Error
// // logPair(...pairArray);
const pairTupleIncorrect: [number, string] = [1, 'Amage'];
// Error
// // logPair(...pairTupleIncorrect);
const pairTupleCorrect: [string, number] = ['Amage', 1];
logPair(...pairTupleCorrect); // Ok

/***********************************************************/
function logTrio(name: string, value: [number, boolean]) {
  console.log(`${name} has ${value[0]} (${value[1]}`);
}
const trios: [string, [number, boolean]][] = [
  ['Amanitore', [1, true]],
  ['Æthelflæd', [2, false]],
  ['Ann E. Dunwoody', [3, false]],
];
trios.forEach((trio) => logTrio(...trio)); // Ok
// Error
// // trios.forEach(logTrio);

/***********************************************************/

/************************/
/*** Tuple Inferences ***/
/************************/

/***********************************************************/
// Return type: (string | number)[]
function firstCharAndSize(input: string) {
  return [input[0], input.length];
}
// firstChar type: string | number
// size type: string | number
const [firstChar, size] = firstCharAndSize('Gudit');

/***********************************************************/

/*++++++++++++++++++++++++++*/
/*++ Explicit tuple types ++*/
/*++++++++++++++++++++++++++*/

/***********************************************************/
// Return type: [string, number]
function firstCharAndSizeExplicit(input: string): [string, number] {
  return [input[0], input.length];
}
// firstChar type: string
// size type: number
const [firstChar1, size1] = firstCharAndSizeExplicit('Cathay Williams');

/***********************************************************/

/*+++++++++++++++++++++++++++*/
/*++ Const asserted tuples ++*/
/*+++++++++++++++++++++++++++*/

/***********************************************************/
// Type: (string | number)[]
const unionArray = [1157, 'Tomoe'];
// Type: readonly [1157, "Tomoe"]
const readonlyTuple = [1157, 'Tomoe'] as const;

/***********************************************************/
const pairMutable: [number, string] = [1157, 'Tomoe'];
pairMutable[0] = 1247; // Ok
// Error
// // const pairAlsoMutable: [number, string] = [1157, 'Tomoe'] as const;
const pairConst = [1157, 'Tomoe'] as const;
// Error
// // pairConst[0] = 1247;

/***********************************************************/
// Return type: readonly [string, number]
function firstCharAndSizeAsConst(input: string) {
  return [input[0], input.length] as const;
}
// firstChar type: string
// size type: number
const [firstChar2, size2] = firstCharAndSizeAsConst('Ching Shih');

/***********************************************************/

export {};

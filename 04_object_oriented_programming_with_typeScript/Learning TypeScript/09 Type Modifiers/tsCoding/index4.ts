/*
    # Chapter 9. Type Modifiers
*/

/***********************************************************/

/*---------------------*/
/*-- Type Assertions --*/
/*---------------------*/

/***********************************************************/
const rawData = `["grace", "frankie"]`;
JSON.parse(rawData);
JSON.parse(rawData) as string[];
JSON.parse(rawData) as [string, string];
JSON.parse(rawData) as ['grace', 'frankie'];

/***********************************************************/

/************************************/
/*** Asserting Caught Error Types ***/
/************************************/

/***********************************************************/
try {
  // (code that may throw an error)
} catch (error) {
  console.warn('Oh no!', (error as Error).message);
}

/***********************************************************/
try {
  // (code that may throw an error)
} catch (error) {
  console.warn('Oh no!', error instanceof Error ? error.message : error);
}

/***********************************************************/

/***************************/
/*** Non-Null Assertions ***/
/***************************/

/***********************************************************/
// Inferred type: Date | undefined
let maybeDate = Math.random() > 0.5 ? undefined : new Date();
// Asserted type: Date
maybeDate as Date;
// Asserted type: Date
maybeDate!;

/***********************************************************/
const seasonCounts = new Map([
  ['I Love Lucy', 6],
  ['The Golden Girls', 7],
]);
// Type: string | undefined
const maybeValue = seasonCounts.get('I Love Lucy');
// console.log(maybeValue.toUpperCase());
const knownValue = seasonCounts.get('I Love Lucy')!;
console.log(knownValue.toString()); // Ok

/***********************************************************/

/******************************/
/*** Type Assertion Caveats ***/
/******************************/

/***********************************************************/
const seasonCounts1 = new Map([
  ['Broad City', 5],
  ['Community', 6],
]);
// Type: string
const knownValue1 = seasonCounts.get('I Love Lucy')!;
console.log(knownValue.toString()); // No type error, but...
// Runtime TypeError: Cannot read property 'toUpperCase' of undefined.

/***********************************************************/

/*+++++++++++++++++++++++++++++++++++++*/
/*+++ Assertions versus declarations ++*/
/*+++++++++++++++++++++++++++++++++++++*/

/***********************************************************/
interface Entertainer {
  acts: string[];
  name: string;
}
// // Error
// const declared: Entertainer = {
//   name: "Moms Mabley",
// };

const asserted = {
  name: 'Moms Mabley',
} as Entertainer;
// console.log(declared.acts.join(', '));
console.log(asserted.acts.join(', '));

/***********************************************************/

/*++++++++++++++++++++++++++++++*/
/*+++ Assertion assignability ++*/
/*++++++++++++++++++++++++++++++*/

/***********************************************************/
// let myValue = 'Stella!' as number;

/***********************************************************/
let myValueDouble = '1337' as unknown as number;

/***********************************************************/

export {};

/*
    # Chapter 6. Arrays
*/
/***********************************************************/

/*-------------------------*/
/*-- Spreads and Rests s --*/
/*-------------------------*/

/***********************************************************/

/***************/
/*** Spreads ***/
/***************/

/***********************************************************/
// Type: string[]
const soldiers = ['Harriet Tubman', 'Joan of Arc', 'Khutulun'];
// Type: number[]
const soldierAges = [90, 19, 45];
// Type: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];

/***********************************************************/

/*********************************/
/*** Spreading Rest Parameters ***/
/*********************************/

/***********************************************************/
function logWarriors(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}
const warriors = ['Cathay Williams', 'Lozen', 'Nzinga'];
logWarriors('Hello', ...warriors);
const birthYears = [1844, 1840, 1583];
// Error
// // logWarriors('Born in', ...birthYears);

/***********************************************************/

export {};

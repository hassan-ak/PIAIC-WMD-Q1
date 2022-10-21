/*
  Chapter 6. Arrays
  Spreads and Rests
*/
// Spreading Rest Parameters
function logWarriors1(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}
const warriors1 = ['Cathay Williams', 'Lozen', 'Nzinga'];
logWarriors1('Hello', ...warriors1);
const birthYears = [1844, 1840, 1583];
// logWarriors1('Born in', ...birthYears);
// ~~~~~~~~~~~~~
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.

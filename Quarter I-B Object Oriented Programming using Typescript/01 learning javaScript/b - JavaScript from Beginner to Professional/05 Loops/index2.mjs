/*
    do while loops
*/

// do {
//   // code to be executed if the condition is true
// } while (condition);

import promptSync from 'prompt-sync';
const prompt = promptSync();
console.log('\n\n');
let number;
do {
  number = prompt('Please enter a number between 0 and 100: ');
} while (!(number >= 0 && number < 100));

console.log('\n\n');

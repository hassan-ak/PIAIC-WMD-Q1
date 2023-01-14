/*
    Practice exercise 6.2
    We are going to create a program that will randomly describe an inputted name.
      1. Create an array of descriptive words.
      2. Create a function that contains a prompt asking the user for a name.
      3. Select a random value from the array using Math.random.
      4. Output into the console the prompt value and the randomly selected array value.
      5. Invoke the function
*/

import prompSync from 'prompt-sync';
const prompt = prompSync();

let array = ['Lahore', 'Pakistan', 'Punjab', 'UMT', 'PIAIC', 'WMD'];

function testFuncion(array) {
  let name = prompt('Enter your name : ');
  let randomValue = array[Math.floor(Math.random() * array.length)];
  console.log(name, ' ==> ', randomValue);
}

testFuncion(array);

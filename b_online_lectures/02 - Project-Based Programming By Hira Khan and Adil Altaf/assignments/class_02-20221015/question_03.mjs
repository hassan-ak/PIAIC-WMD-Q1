/*
    Evaluating a number game
        Ask the user to enter a number and check whether it's greater than, equal to, or less 
        than a dynamic number value in your code. Output the result to the user.
*/
import prompSync from 'prompt-sync';
const prompt = prompSync();
var userInput = Number(prompt('Enter between 0 and 100 : '));
var variable = Math.floor(Math.random() * 100);
if (userInput > variable) {
  console.log(`${userInput} is greater than ${variable}`);
} else if (userInput === variable) {
  console.log(`${userInput} is equal to ${variable}`);
} else {
  console.log(`${userInput} is less than ${variable}`);
}

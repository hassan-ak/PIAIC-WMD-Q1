/*
    check for palindrome
        - Write a program to take an input from user and check if it is palindrome or not.
        - console accordingly
*/
import chalk from 'chalk';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let userInput = prompt('Enter a value to check for palindrome : ');
let originalWord = userInput.toLowerCase();
console.log(chalk.yellow('Word : ', originalWord));
let originalArray = userInput.split('');
originalArray.reverse();
let reversedWord = originalArray.join('');
if (originalWord === reversedWord) {
  console.log(chalk.green('Entered word is a palindrome'));
} else {
  console.log(chalk.red('Entered word is a not a palindrome'));
}

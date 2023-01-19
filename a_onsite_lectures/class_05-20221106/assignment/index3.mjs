/*
    Number to Word converter
*/

/************************************ Part 00 ************************************/
import { unities, twenties, tens, units } from './conversions.mjs';
import PromptSync from 'prompt-sync';
import chalk from 'chalk';
let prompt = PromptSync();
console.log(`\n${chalk.bold('********************************')}`);
console.log(chalk.bold('*** Number to Word Converter ***'));
console.log(`${chalk.bold('********************************')}\n`);

console.log(
  `${chalk.italic(
    '--- Maximum 201 digits are allowed , decimal part and -ve sign will be ignored --- '
  )}\n`
);

let aNumber = prompt('Enter a number : ');
let check = true;
let result;

/************************************ Part 01 ************************************/
// Check if the entered value is a number or not
// if not a number results out with a message
// if empty string assign 0 and if decimals, drop decimals
// call numberConverter with modified input value as argument
if (isNaN(aNumber)) {
  check = false;
  result =
    'Entered value is not a number, re-run the program and input a proper number';
} else if (aNumber.length >= 202) {
  check = false;
  result =
    'Number of digits more than 201, re-run the program and input a number with less digits';
} else {
  aNumber = aNumber === '' ? '0' : aNumber.split('.')[0];
  numberConverter(aNumber);
}

/************************************ Part 02 ************************************/
// convert the number to a an array of triplets
// if input number starts with -ve sign drop th sign
// reverse the numbers, split into triplets
// push the triplet to an array after reversing them once again
// before pushing drop zeros on the left of an entry
// This will return a numberarray
function numberArrayCreater(params) {
  if (params.charAt(0) === '-') {
    params = params.slice(1);
  }
  aNumber = params;
  console.log('Entered number after dropping decimals and -ve sign : ', params);
  let numberArray = [];
  let reversedNumber = [...params].reverse().join('');
  for (let i = 0; i < reversedNumber.length; i += 3) {
    const element = reversedNumber.slice(i, i + 3);
    const reversedSlice = [...element].reverse().join('');
    numberArray.push(Number(reversedSlice).toString());
  }
  return numberArray;
}

/************************************ Part 03 ************************************/
// Function to convert between 0 and 9
// Map paramaters with the unities array
function singleDigitConverter(params) {
  return unities[params];
}
// Function to convert between 10 and 99
// map params with twnties array when value between 10-19
// when greater than 19 map first digit to tens and last to unities
function doubleDigitConverter(params) {
  if (params[0] === '1') {
    return twenties[params[1]];
  } else {
    let temp =
      params[1] === '0'
        ? tens[params[0]]
        : tens[params[0]] + '-' + singleDigitConverter(params[1]);
    return temp[0] === '-' ? temp.slice(1) : temp;
  }
}
// Function to convert between 100 and 999
// format output to include 'hundred' with the word
function tripleDigitConverter(params) {
  return (
    singleDigitConverter(params[0]) +
    ' hundred ' +
    doubleDigitConverter(params.slice(1))
  );
}

/************************************ Part 04 ************************************/
// function call the digit converter functions based on length / value
function baseConverter(inputNumber) {
  if (inputNumber.length === 1) {
    return singleDigitConverter(inputNumber);
  } else if (inputNumber.length === 2) {
    return doubleDigitConverter(inputNumber);
  } else {
    return tripleDigitConverter(inputNumber);
  }
}

/************************************ Part 05 ************************************/
// function takes input number as argument
// convert number to array using function
// loop over array and convet non zeros to words
// loop over units array too and merge both
function numberConverter(params) {
  let resultArray = [];
  let numberArray = numberArrayCreater(params);
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === '0' && numberArray.length > 1) {
      continue;
    } else {
      result = baseConverter(numberArray[i]) + ' ' + units[i];
      resultArray.unshift(result);
    }
  }
  result = resultArray.join(' ');
}

/************************************ Part 06 ************************************/
// Output Results to console
if (check) {
  console.log(
    `\n${chalk.bgGreen(
      'Result'
    )} : \nValue in Digits : ${aNumber}\nValue in Digits : ${result}\n`
  );
} else {
  console.log(`\n${chalk.red('Error')} : ${result}\n`);
}

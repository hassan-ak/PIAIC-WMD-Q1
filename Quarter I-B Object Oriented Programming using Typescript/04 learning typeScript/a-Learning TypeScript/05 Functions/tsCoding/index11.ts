/*
    Chapter 5. Functions
    Function Types
*/
// Function Type Aliases

type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;
stringToNumber = (input) => input.length; // Ok
// stringToNumber = (input) => input.toUpperCase();
// ~~~~~~~~~~~~~~~~~~~
// Error: Type 'string' is not assignable to type 'number'.

type NumberToString = (input: number) => string;
function usesNumberToString(numberToString: NumberToString) {
  console.log(`The string is: ${numberToString(1234)}`);
}
usesNumberToString((input) => `${input}! Hooray!`); // Ok
// usesNumberToString((input) => input * 2);
// ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'string'.

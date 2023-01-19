/*
  Set timeout order
    Use the arrow format to create functions that output the values one and two to the 
    console. Create a third function that outputs the value three to the console, and then 
    invokes the first two functions.
    Create a fourth function that outputs the word four to the console and also use 
    setTimeout() to invoke the first function immediately and then the third function.
*/

let firstFunction = () => console.log('One');
let secondFunction = () => console.log('Two');
let thirdFunction = () => {
  console.log('Three');
  firstFunction();
  secondFunction();
};
let fourthFunction = () => {
  console.log('Four');
  setTimeout(firstFunction, 0);
  thirdFunction();
};

fourthFunction();

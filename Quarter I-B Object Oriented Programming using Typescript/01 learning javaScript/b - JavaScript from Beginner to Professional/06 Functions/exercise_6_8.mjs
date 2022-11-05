/*
  Practice exercise 6.8
    1. Set a variable name and assign a function to it. Create a function expression 
    with one parameter that outputs a provided argument to the console.
    2. Pass an argument into the function.
    3. Create the same function as a normal function declaration.
*/

let aVar = function testFunction(params) {
  console.log(params);
};
aVar(25);

function testFunction(params) {
  console.log(params);
}
testFunction(21);

/*
    Practice exercise 6.1
        See if you can write a function for yourself. We want to write a function that adds 
        two numbers.
        1. Create a function that takes two parameters, adds the parameters together, 
        and returns the result.
        2. Set up two different variables with two different values.
        3. Use your function on the two variables, and output the result using 
        console.log.
        4. Create a second call to the function using two more numbers as arguments 
        sent to the function.
*/

function addTwoNumbers(num1, num2) {
  let addition = num1 + num2;
  return addition;
}

let num1 = 11;
let num2 = 121;
console.log(addTwoNumbers(num1, num2));

console.log(addTwoNumbers(21, 47));

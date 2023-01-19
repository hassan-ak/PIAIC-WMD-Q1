# Assignemt Class 05 - Project-Based Programming By Hira Khan and Adil Altaf (2022/11/05)

## Question 01

- Find factorial
  - A common problem that we can solve with recursion is calculating the factorial. How are recursive functions going to help us calculate the factorial? We are going to call the function with a lower number until we reach 0. In this exercise, we will use recursion to calculate the factorial result of a numeric value set as the argument of a function.
    1. Create a function that contains a condition within it checking if the argument value is 0.
    2. If the parameter is equal to 0, it should return the value of 1. Otherwise, it should return the value of the argument multiplied by the value returned from the function itself, subtracting one from the value of the argument that is provided. This will result in running the block of code until the value reaches 0.
    3. Invoke the function, providing an argument of whatever number you want to find the factorial of. The code should run whatever number is passed initially into the function, decreasing all the way to 0 and outputting the results of the calculation to the console. It could also contain a console.log() call to print the current value of the argument in the function as it gets invoked.
    4. Change and update the number to see how it affects the results.

## Question 02

- Set timeout order
  - Use the arrow format to create functions that output the values one and two to the console.
  - Create a third function that outputs the value three to the console, and then invokes the first two functions.
  - Create a fourth function that outputs the word four to the console and also use setTimeout() to invoke the first function immediately and then the third function.

## Question 03

- Using CallBack Functions
  - This exercise will demonstrate how to use a callback function, creating a way to pass a value from one function to another by invoking a callback function. We will createa greeting callback using a full name in a string.
    1. Create a function named greet() that takes one argument, fullName. That argument should be an array. Output the items of the array into the console interpolated into a greeting message string.
    2. Create a second function that has two arguments: the first one is a string for the user's full name, and the second is the callback function.
    3. Split the string into an array using the split() method.
    4. Send the full-name array to the greet() function created in the first step.
    5. Invoke the process of the callback function.

## Question 04

- Counter using Promise
  - In this exercise, you will create a counter that will output the values in sequence using Promises.
    1. Set up a Promise that resolves with a value of Start Counting.
    2. Create a function named counter() that has one argument that gets the value and outputs it into the console.
    3. Set up the next function in the Promise with four then() instances, which should output a value into the counter function, and return a value which will provide input for the subsequent then() instance. The returned values should be one, then two, then three.

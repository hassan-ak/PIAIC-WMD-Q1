/*
    Practice exercise 3.3
        1. Create an array containing three values: 1, 2, and 3
        2. Nest the original array into a new array three times.
        3. Output the value 2 from one of the arrays into the console.
*/

let array1 = [1, 2, 3];
console.log(array1);
let newArray = [array1, array1, array1];
console.log(newArray);
console.log(newArray[2][1]);

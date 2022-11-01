# Chapter 05

## Self-check quiz

1. What is the expected output for the following code?

   ```js
   let step = 3;
   for (let i = 0; i < 1000; i += step) {
     if (i > 10) {
       break;
     }
     console.log(i);
   }
   ```

   - result

     ```
     0
     3
     6
     9
     ```

2. What is the final value for myArray, and what is expected in the console?

   ```js
   const myArray = [1, 5, 7];
   for (el in myArray) {
     console.log(Number(el));
     el = Number(el) + 5;
     console.log(el);
   }
   console.log(myArray);
   ```

   - result

     ```
     0
     5
     1
     5
     2
     7
     [1, 5, 7]
     ```

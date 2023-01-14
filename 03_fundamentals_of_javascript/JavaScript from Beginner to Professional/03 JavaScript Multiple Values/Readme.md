# Chapter 03

## Self-check quiz

1. Can you use const and update values within an array?
   - yes
2. Which property in an array gives the number of items contained in the array?
   - length
3. What is the output in the console?
   ```js
   const myArr1 = [1, 3, 5, 6, 8, 9, 15];
   console.log(myArr1.indexOf(0));
   console.log(myArr1.indexOf(3));
   ```
   ```
   Output:
      -1
      1
   ```
4. How do you replace the second element in an array `myArr = [1,3,5,6,8,9,15]` with the value 4?
   ```js
   myArr[1] = 4;
   ```
5. What is the output in the console?
   ```js
   const myArr2 = [];
   myArr2[10] = 'test';
   console.log(myArr2);
   console.log(myArr2[2]);
   ```
   ```
   Output:
      [ <10 empty items>, 'test' ]
      undefined
   ```
6. What is the output in the console?

   ```js
   const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
   myArr3.sort();
   myArr3.length = 0;
   console.log(myArr3[0]);
   ```

   ```
   Output:
      undefined
   ```

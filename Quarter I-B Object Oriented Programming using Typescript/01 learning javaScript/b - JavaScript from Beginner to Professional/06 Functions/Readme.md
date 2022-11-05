# Chapter 06

## Self-check quiz

1. What value is output into the console?

   ```js
   let val = 10;
   function tester(val) {
     val += 10;
     if (val < 100) {
       return tester(val);
     }
     return val;
   }
   tester(val);
   console.log(val);
   ```

   ```
   10
   ```

2. What will be output into the console by the below code?

   ```js
   let testFunction = (function () {
     console.log('Hello');
   })();
   ```

   ```
   Hello
   ```

3. What will be output to the console?

   ```js
   (function () {
     console.log('Welcome');
   })();
   (function () {
     let firstName = 'Laurence';
   })();
   let result = (function () {
     let firstName = 'Laurence';
     return firstName;
   })();
   console.log(result);
   (function (firstName) {
     console.log('My Name is ' + firstName);
   })('Laurence');
   ```

   ```
   Welcome
   Laurence
   My Name is Laurence
   ```

4. What will be output to the console?

   ```js
   let test2 = (num) => num + 5;
   console.log(test2(14));
   ```

   ```
   19
   ```

5. What will be output to the console?

   ```js
   var addFive1 = function addFive1(num) {
     return num + 2;
   };
   let addFive2 = (num) => num + 2;
   console.log(addFive1(14));
   ```

   ```
   16
   ```

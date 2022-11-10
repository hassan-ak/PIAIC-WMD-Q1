# Chapter 07

## Self-check quiz

1. Fix the error in the following code to use the callback function:

   ```js
   function addOne(val) {
     return val + 1;
   }
   function total(a, b, callback) {
     const sum = a + b;
     return callback(sum);
   }
   console.log(total(4, 5, addOne()));
   ```

   ```js
   function addOne(val) {
     return val + 1;
   }
   function total(a, b, callback) {
     const sum = a + b;
     return callback(sum);
   }
   console.log(total(4, 5, addOne));
   ```

2. Write down the result of the following code:

   ```js
   function checker(val) {
     return new Promise((resolve, reject) => {
       if (val > 5) {
         resolve('Ready');
       } else {
         reject(new Error('Oh no'));
       }
     });
   }
   checker(5)
     .then((data) => {
       console.log(data);
     })
     .catch((err) => {
       console.error(err);
     });
   ```

   ```
   Oh no
   ```

3. What line(s) of code need to be added to the preceding function so that there
   is always a result after the function runs that ensures the word done is output
   into the console?

   ```js
   .finally(() => { console.log("done");});
   ```

4. Update the below code to make the function return a Promise:

   ```js
   function myFun() {
     return 'Hello';
   }
   myFun().then(
     function (val) {
       console.log(val);
     },
     function (err) {
       conole.log(err);
     }
   );
   ```

   ```js
   async function myFun() {
     return 'Hello';
   }
   myFun().then(
     function (val) {
       console.log(val);
     },
     function (err) {
       conole.log(err);
     }
   );
   ```

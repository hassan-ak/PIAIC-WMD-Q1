/*
  Counter using Async Await
    This exercise will demonstrate how to use await to wait on a Promise inside an async
    function. Using await and async, create a counter with timeout(), and increment a 
    global counter value.
    1. Create a global value for a counter.
    2. Create a function that takes one argument. Return the result of a new 
    Promise, setting a setTimeout() function that will contain the resolve 
    instance.
    3. Increment the counter within setTimeout(), adding one every second. 
    Resolve the Promise with the value of the counter and the value of the 
    variable that was in the function argument.
    4. Create an asynchronous function that outputs into the console the value of 
    the global counter and the value of the argument of the function.
    5. Create a variable to capture the returned resolve value from the await
    function. Output that result into the console.
    6. Create a loop to iterate 10 times, incrementing the value and invoking the 
    async function, passing the value of the increment variable as the parameter 
    in the function.
*/

let counter = 0;
function promiseFunction(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      counter++;
      resolve(`x value ${val} counter:${counter}`);
    }, 5000);
  });
}

async function asyFunction(x) {
  console.log(`ready ${x} counter:${counter}`);
  let check = await promiseFunction(x);
  console.log(check);
}

for (let i = 1; i <= 10; i++) {
  asyFunction(i);
}

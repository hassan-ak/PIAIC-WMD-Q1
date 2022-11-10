/*
  Practice exercise 13.2
    In this exercise, you will create a counter that will output the values in
    sequence using Promises.
    1. Set up a Promise that resolves with a value of Start Counting.
    2. Create a function named counter() that has one argument that gets the value
    and outputs it into the console.
    3. Set up the next function in the Promise with four then() instances, which
    should output a value into the counter function, and return a value which
    will provide input for the subsequent then() instance. The returned values
    should be one, then two, then three.
*/

const promise = new Promise((resolve,reject)=>{
  resolve("Start Counting")
})

function counter(value){
  console.log(value)
}

promise
 .then(value => {counter(value); return "one"})
 .then(value => {counter(value); return "two"})
 .then(value => {counter(value); return "three"})
 .then(value => {counter(value);});

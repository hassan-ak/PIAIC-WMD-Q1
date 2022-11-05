/*
  Create a recursive function
    Create a recursive function that counts up to 10. Invoke the function with different 
    start numbers as the arguments that are passed into the function. The function 
    should run until the value is greater than 10.
*/

function countUp(params) {
  if (params <= 10) {
    console.log('Counting Up : ', params);
    countUp(++params);
  } else {
    setTimeout(() => console.log('CountUp finished'), 1000);
  }
}
countUp(3);

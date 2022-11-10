/* -------------------------------------------------------------------------- */
/*
  Callbacks
    - It is just a function that takes another function as an argument, which is
    then called when the rest of the initial function has finished.
    -it's just a function calling a function
*/
//
function doSomething(callback) {
  callback();
}
function sayHi() {
  console.log('Hi!');
}
doSomething(sayHi);
/* -------------------------------------------------------------------------- */
function judge(grade) {
  switch (true) {
    case grade == 'A':
      console.log('You got an', grade, ': amazing!');
      break;
    case grade == 'B':
      console.log('You got a', grade, ': well done!');
      break;
    case grade == 'C':
      console.log('You got a', grade, ': alright.');
      break;
    case grade == 'D':
      console.log('You got a', grade, ': hmmm...');
      break;
    default:
      console.log('An', grade, '! What?!');
  }
}
function getGrade(score, callback) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = 'A';
      break;
    case score >= 80:
      grade = 'B';
      break;
    case score >= 70:
      grade = 'C';
      break;
    case score >= 60:
      grade = 'D';
      break;
    default:
      grade = 'F';
  }
  callback(grade);
}
getGrade(85, judge);
//
/*
  - when calling the function as an argument, we do not include the parantheses
  - let suppose we need to add some new functionality no need to edit a function
  just add new function and use it as call back (email sending)
  - executed after a certain time in the case of a timeout and every certain
  amount of time for the specified interval
*/
/* -------------------------------------------------------------------------- */
setInterval(encourage, 500);
function encourage() {
  console.log("You're doing great, keep going!");
}
//
/*
  - functions that are inserted as arguments are called callbacks
  - multiple nested callbacks make code difficult to read
  - When this is all written as one function with anonymous functions inside,
  this gets very indented as well
  - callback hell or the Christmas tree problem
*/

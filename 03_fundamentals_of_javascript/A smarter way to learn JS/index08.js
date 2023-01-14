//***********************
//*** Chapter 35 - 38 ***
//***********************

function chapterStart(params) {
  console.log('******************');
  console.log('*** Chapter ' + params + ' ***');
  console.log('******************');
}
function chapterEnd() {
  console.log(' ');
  console.log(' ');
  console.log(' ');
}

//******************
//*** Chapter 35 ***
//******************
chapterStart(35);
function tellTime() {
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  console.log('Current time: ' + theHr + ':' + theMin);
}
tellTime();
chapterEnd();

//******************
//*** Chapter 36 ***
//******************
chapterStart(36);
function greetUser() {
  console.log('Hello, there.');
}
greetUser();
console.log('---');
var greeting = 'Hello, there.';
function greetUser1(message) {
  console.log(message);
}
greetUser1(greeting);
console.log('---');
function showMessage(m, string, num) {
  console.log(m + string + num);
}
var month = 'March';
showMessage(month, "'s winner number is ", 23);
chapterEnd();

//******************
//*** Chapter 37 ***
//******************
chapterStart(37);
function calcTot(merchTot) {
  var orderTot;
  if (merchTot >= 100) {
    orderTot = merchTot;
  } else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
  } else {
    orderTot = merchTot + 5 + 0.03 * (merchTot - 50);
  }
  return orderTot;
}
var totalToCharge = calcTot(79.99);
console.log(totalToCharge);

chapterEnd();

//******************
//*** Chapter 38 ***
//******************
chapterStart(38);
var theSum;
function addNumbers() {
  theSum = 2 + 2;
}
addNumbers();
console.log(theSum);
console.log('---');
function addNumbers1() {
  var theSum1 = 5 + 2;
  console.log(theSum1);
}
addNumbers1();
console.log('---');
var theSum2;
function addNumbers2() {
  var theSum2 = 5 + 2;
  console.log('Local = ', theSum2);
}
addNumbers2();
console.log('Global = ', theSum2);
console.log('---');
var theSum3;
function addNumbers3() {
  var theSum3 = 5 + 2;
  console.log('Local = ', theSum3);
  return theSum3;
}
addNumbers3();
console.log('Global = ', theSum3);
chapterEnd();

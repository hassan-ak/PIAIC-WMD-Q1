/*
    Default or unsuitable parameters
*/
function addTwoNumbers1(x, y) {
  console.log(x + y);
}
addTwoNumbers1();

function addTwoNumbers(x = 2, y = 3) {
  console.log(x + y);
}
addTwoNumbers();
addTwoNumbers(6, 6);
addTwoNumbers(10);
addTwoNumbers(1, 2, 3, 4);

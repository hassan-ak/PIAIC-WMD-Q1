/*
    Variable scope in functions
*/

/*
    Local variables in functions
*/
function testAvailability(x) {
  console.log('Available here:', x);
}
testAvailability('Hi!');
// console.log('Not available here:', x);

function testAvailability1() {
  let y = 'Local variable!';
  console.log('Available here:', y);
}
testAvailability1();
// console.log('Not available here:', y);

function testAvailability2() {
  let y = "I'll return";
  console.log('Available here:', y);
  return y;
}
let z = testAvailability2();
console.log('Outside the function:', z);
// console.log('Not available here:', y);

/*
  let versus var variables
*/
function doingStuff() {
  if (true) {
    var x = 'local';
  }
  console.log(x);
}
doingStuff();

function doingStuff1() {
  if (true) {
    let x = 'local';
  }
  // console.log(x);
}
doingStuff1();

function doingStuff2() {
  if (true) {
    // console.log(x);
    let x = 'local';
  }
}
doingStuff2();

function doingStuff3() {
  if (true) {
    console.log(x);
    var x = 'local';
  }
}
doingStuff3();

/*
  const scope
 */
function doingStuff4() {
  if (true) {
    const X = 'local';
  }
  // console.log(X);
}
doingStuff4();

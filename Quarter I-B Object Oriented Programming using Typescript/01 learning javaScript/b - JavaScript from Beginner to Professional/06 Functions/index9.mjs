/*
    Nested functions
*/

function doOuterFunctionStuff(nr) {
  console.log('Outer function');
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log('I can access outer variables:', nr);
  }
}
doOuterFunctionStuff(2);

function doOuterFunctionStuff1(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
  }
  // console.log('Not accessible:', z);
}
doOuterFunctionStuff1(2);

function doOuterFunctionStuff2(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
  }
}
// doInnerFunctionStuff(3);

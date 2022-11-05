/*
    Function callbacks
*/

let functionVariable = function () {
  console.log('Not so secret though.');
};
function doFlexibleStuff(executeStuff) {
  executeStuff();
  console.log('Inside doFlexibleStuffFunction.');
}
doFlexibleStuff(functionVariable);

let anotherFunctionVariable = function () {
  console.log('Another anonymous function implementation.');
};
doFlexibleStuff(anotherFunctionVariable);

let youGotThis = function () {
  console.log("You're doing really well, keep coding!");
};
setTimeout(youGotThis, 1000);
setInterval(youGotThis, 1000);

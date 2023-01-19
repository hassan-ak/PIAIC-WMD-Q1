// Class 05

/*
  Changing case
*/
let cityToCheck = 'pakistan';
var firstChar = cityToCheck.slice(0, 1); //p
var otherChars = cityToCheck.slice(1); // akistan
firstChar = firstChar.toUpperCase(); // P
otherChars = otherChars.toLowerCase(); // akistan
var cappedCity = firstChar + otherChars; // Pakistan

var month = 'MarCh';
var charsInMonth = month.length;
if (charsInMonth > 3) {
  var monthAbbrev = month.slice(0, 3);
  console.log(monthAbbrev);
}

/*
  Strings: Finding segments
*/

/*
  Strings: Finding a character at a location
*/

/*
  Strings: Replacing characters 
*/
// Example 1
var text = 'Visit Microsoft!';
var result = text.replace('Microsoft', 'W3Schools'); // Visit W3Schools!

// Example 2
var text = 'Mr Blue has a blue house and a blue car';
var result = text.replace(/blue/g, 'red'); // Mr Blue has a red house and a red car

/*
  Rounding numbers 
*/
var scoreAvg = 132.23;
var numberOfStars = Math.round(scoreAvg); // 132

var a = Math.ceil(0.6); // 1
var b = Math.ceil(-4.4); // -4

var c = Math.floor(0.6); // 0
var d = Math.floor(-4.4); // -5

/*
  Generating random numbers
*/
var x = Math.random(); // 0.0000000000000000 - 0.9999999999999999
var y = Math.random() * 10; // 0 - 9.999
var z = Math.random() * 100; // 0 - 99.999999

/*
  Converting strings to integers and decimals 
*/
// parseInt
var x = parseInt('10'); // 10
var y = parseInt('10.00'); // 10
var z = parseInt('10.33'); // 10
var p = parseInt('Hello'); // NaN
// parseFloat
var x = parseFloat('10'); // 10
var y = parseFloat('10.00'); // 10
var z = parseFloat('10.33'); // 10.33
var p = parseFloat('Hello'); // NaN

/*
  Converting strings to numbers, numbers to strings 
*/
// Number()
var x = Number('10'); // 10
var z = Number('10.33'); // 10.33
var y = Number(true); // 1
var p = Number('Hello'); // NaN
// String()& .toString()
var p = String(22); // "22"
var p2 = 44;
var p3 = p2.toString(); // "44"

/*
  Controlling the length of decimals
*/
let total = 25.154123;
let prettyTotal = total.toFixed(2); // 25.15

/*
  Javascript Built-in Constructors
*/
new String(); // A new String object
new Number(); // A new Number object
new Boolean(); // A new Boolean object
new Object(); // A new Object object
new Array(); // A new Array object
new Function(); // A new Function object
new Date(); // A new Date object

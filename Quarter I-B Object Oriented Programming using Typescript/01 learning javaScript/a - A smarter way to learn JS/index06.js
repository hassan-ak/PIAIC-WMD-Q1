//***********************
//*** Chapter 26 - 30 ***
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
//*** Chapter 26 ***
//******************
chapterStart(26);
var n = 21.678437;
var roundedN = Math.round(n);
var ceiledN = Math.ceil(n);
var flooredN = Math.floor(n);
console.log('Original Number : ', n);
console.log('Rounded Number  : ', roundedN);
console.log('Ceiled Number   : ', ceiledN);
console.log('Floored Number  : ', flooredN);

chapterEnd();

//******************
//*** Chapter 27 ***
//******************
chapterStart(27);
var randomNumber = Math.random();
console.log('Random Number  : ', randomNumber);
console.log('---');
console.log('Dice throws for 6 times');
for (let index = 1; index < 7; index++) {
  var bigDecimal = Math.random();
  var improvedNum = bigDecimal * 6 + 1;
  var numberOfStars = Math.floor(improvedNum);
  console.log('Dice ', index, ' : ', numberOfStars);
}
chapterEnd();

//******************
//*** Chapter 28 ***
//******************
chapterStart(28);
var profit = '200' - '150';
console.log("'200' - '150' = ", profit);
console.log('---');
var currentAge = '24.5';
var qualifyingAge = currentAge + 12;
console.log(qualifyingAge);
var qualifyingAge = parseInt(currentAge) + 12;
console.log(qualifyingAge);
var myFractional = parseFloat(currentAge) + 12;
console.log(myFractional);
chapterEnd();

//******************
//*** Chapter 29 ***
//******************
chapterStart(29);
console.log("'1234'     ---> ", Number(1234));
console.log("'1234.875' ---> ", Number(1234.875));
var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();
console.log(numberAsString);

chapterEnd();

//******************
//*** Chapter 30 ***
//******************
chapterStart(30);
price = 9.95;
taxRate = 6.5 / 100;
var total = price + price * taxRate;
console.log('Original : ', total);
var prettyTotal = total.toFixed(2);
console.log('Rounded : ', prettyTotal);
console.log('---');
var num = 1.555;
var str = num.toString();
if (str.charAt(str.length - 1) === '5') {
  str = str.slice(0, str.length - 1) + '6';
}
num = Number(str);
prettyNum = num.toFixed(2);
console.log(prettyNum);

chapterEnd();

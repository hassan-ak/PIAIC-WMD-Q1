//***********************
//*** Chapter 01 - 09 ***
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
//*** Chapter 01 ***
//******************
chapterStart(01);
console.log('Thanks for your input!');
//alert('Thanks for your input!');
chapterEnd();

//******************
//*** Chapter 02 ***
//******************
chapterStart(02);
var fName = 'Hassan';
console.log('Name : ', fName);
fName = 'Zubair';
console.log('Name : ', fName);
console.log('---');
var nationality;
console.log('Nationality : ', nationality);
nationality = 'Pakistani';
console.log('nationality : ', nationality);
chapterEnd();

//******************
//*** Chapter 03 ***
//******************
chapterStart(03);
var age = 20;
console.log('Age : ', age);
console.log('Age : ', age + 7);
console.log('---');
var originalNum = 23;
var newNum = originalNum + 7;
console.log('Sum of number and numVar : ', newNum);
console.log('---');
var originalNum = 23;
var newNum = 27;
console.log('Sum of numVars : ', newNum + originalNum);
console.log('---');
var originalNum = 90;
console.log('numVar : ', originalNum);
originalNum = originalNum + 10;
console.log('numVar after self update : ', originalNum);
chapterEnd();

//******************
//*** Chapter 04 ***
//******************
chapterStart(04);
chapterEnd();

//******************
//*** Chapter 05 ***
//******************
chapterStart(05);
console.log('6 + 2 = ', 6 + 2);
console.log('6 - 2 = ', 6 - 2);
console.log('6 * 2 = ', 6 * 2);
console.log('6 / 2 = ', 6 / 2);
console.log('6 % 2 = ', 6 % 2);
chapterEnd();

//******************
//*** Chapter 06 ***
//******************
chapterStart(06);
var num = 1;
console.log('num : ', num);
var newNum = num++;
console.log('newNum = num++;');
console.log('num : ', num);
console.log('newNum : ', newNum);
console.log('---');
var num = 1;
console.log('num : ', num);
var newNum = ++num;
console.log('newNum = ++num;');
console.log('num : ', num);
console.log('newNum : ', newNum);
chapterEnd();

//******************
//*** Chapter 07 ***
//******************
chapterStart(07);
chapterEnd();

//******************
//*** Chapter 08 ***
//******************
chapterStart(08);
console.log('Thanks, ' + fName + '!');
console.log('---');
console.log('2' + '2');
console.log('---');
console.log('2' + 2);
chapterEnd();

//******************
//*** Chapter 09 ***
//******************
chapterStart(09);
var question = 'Your species?';
var defaultAnswer = 'unKnown';
var spec;
// var spec = prompt(question, defaultAnswer);
console.log(spec);
chapterEnd();

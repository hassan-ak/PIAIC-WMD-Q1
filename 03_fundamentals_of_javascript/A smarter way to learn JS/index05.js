//***********************
//*** Chapter 21 - 25 ***
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
//*** Chapter 21 ***
//******************
chapterStart(21);
var aS = 'HeLlO';
var lAS = aS.toLowerCase();
var uAS = aS.toUpperCase();

console.log('Original text  : ', aS);
console.log('LowerCase text : ', lAS);
console.log('UpperCase text : ', uAS);
chapterEnd();

//******************
//*** Chapter 22 ***
//******************
chapterStart(22);
var aS = 'HeLlO';
var firstChar = aS.slice(0, 1);
var otherChars = aS.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedS = firstChar + otherChars;
console.log('Capped text : ', cappedS);
console.log('---');
var str = 'HeL  lO';
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
  if (str.slice(i, i + 2) === '  ') {
    console.log('Double space!');
    break;
  }
}
chapterEnd();

//******************
//*** Chapter 23 ***
//******************
chapterStart(23);
var text =
  'It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his.';
var firstChar = text.indexOf('World War II');
console.log("Index of 'World War II' : ", firstChar);
for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === 'World War II') {
    text = text.slice(0, i) + 'the Second World War' + text.slice(i + 12);
  }
}
console.log(text);
if (firstChar !== -1) {
  var text1 =
    text.slice(0, firstChar) +
    'the Second World War' +
    text.slice(firstChar + 12);
}
console.log(text1);
console.log('---');
var text = 'To be or not to be.';
var segIndex = text.lastIndexOf('be');
console.log("Last index of 'be' : ", segIndex);

chapterEnd();

//******************
//*** Chapter 24 ***
//******************
chapterStart(24);
var firstName = 'Hassan';
console.log('Name = ', firstName);
var firstChar = firstName.charAt(0);
console.log('First character = ', firstChar);
var lastChar = firstName.charAt(firstName.length - 1);
console.log('Last character = ', lastChar);

chapterEnd();

//******************
//*** Chapter 25 ***
//******************
chapterStart(25);
var text = 'To be or not to be.';
console.log('Original text   : ', text);
var text1 = text.replace('be', 'me');
console.log('Replaced text   : ', text1);
var text2 = text.replace(/be/g, 'me');
console.log('Replaced global : ', text2);
chapterEnd();

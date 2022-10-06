document.write('<h1>Assignment 04</h1>');
document.write('<hr/>');

// *****************
// ***  Task 01  ***
// *****************
var city = 'Hyderabad';
document.write(`<p>City: ${city}</p>`);
var rCity = city.replace('Hyder', 'Islam');
document.write(`<p>After replacement: ${rCity}</p>`);
document.write('<hr/>');

// *****************
// ***  Task 02  ***
// *****************
var value = '472';
document.write(`<p>Value: ${value}</p>`);
document.write(`<p>Type: ${typeof value}</p>`);
value = Number(value);
document.write(`<p>Value: ${value}</p>`);
document.write(`<p>Type: ${typeof value}</p>`);
document.write('<hr/>');

// *****************
// ***  Task 03  ***
// *****************
var flag = true;
var testFlag = false;
let password = 'jackSmith321';
while (flag) {
  if (password[0] !== '0') {
    for (i = 0; i < password.length; i++) {
      if (
        (password[i] >= 'a' && password[i] <= 'z') ||
        (password[i] >= 'A' && password[i] <= 'Z') ||
        (password[i] >= '0' && password[i] <= '9')
      ) {
        testFlag = true;
        continue;
      } else {
        document.write(`<p>Enter a valid password.</p>`);
        var testFlag = false;
        break;
      }
    }
  } else {
    document.write(`<p>Enter a valid password.</p>`);
    break;
  }
  if (password.length >= 8 && testFlag) {
    document.write(`<p>Valid password.</p>`);
  } else {
    document.write(`<p>Enter a valid password.</p>`);
  }
  flag = false;
}
document.write('<hr/>');

// *****************
// ***  Task 04  ***
// *****************

var text = 'test@test.com';
var c1 = false;
var c2 = false;
var c3 = false;
var c4 = false;
if (text.indexOf('@') !== -1) {
  c1 = true;
}
for (i = 0; i < text.length; i++) {
  if (text[i] === '@' || text[i] === '.') {
    continue;
  } else {
    if (
      (text[i] >= 'a' && text[i] <= 'z') ||
      (text[i] >= 'A' && text[i] <= 'Z') ||
      (text[i] >= '0' && text[i] <= '9')
    ) {
      c2 = true;
    } else {
      c2 = false;
      break;
    }
  }
}
if (text.lastIndexOf('@') !== -1) {
  subText = text.slice(text.lastIndexOf('@'));
  for (i = 0; i < subText.length; i++) {
    if (subText[i] === '.') {
      c4 = true;
    }
    if (subText[i] === '@' || subText[i] === '.') {
      continue;
    } else {
      if (
        (subText[i] >= 'a' && subText[i] <= 'z') ||
        (subText[i] >= 'A' && subText[i] <= 'Z') ||
        (subText[i] >= '0' && subText[i] <= '9')
      ) {
        c3 = true;
      } else {
        c3 = false;
        break;
      }
    }
  }
}
if (c1 * c2 * c3 * c4 === 1) {
  document.write(`<p>Valid email</p>`);
} else {
  document.write(`<p>In-Valid email</p>`);
}
document.write('<hr/>');

// *****************
// ***  Task 05  ***
// *****************
var num = '3.45214';
num = Number(num);
document.write(`<p>number: ${num}</p>`);
document.write(`<p>round off value: ${Math.round(num)}</p>`);
document.write(`<p>floor value: ${Math.floor(num)}</p>`);
document.write(`<p>ceil value: ${Math.ceil(num)}</p>`);
document.write('<hr/>');

// *****************
// ***  Task 06  ***
// *****************
document.write(`<p>random dice value: ${Math.round(Math.random() * 6)}</p>`);
document.write(`<p>random dice value: ${Math.round(Math.random() * 6)}</p>`);
document.write(`<p>random dice value: ${Math.round(Math.random() * 6)}</p>`);
document.write(`<p>random dice value: ${Math.round(Math.random() * 6)}</p>`);
document.write(`<p>random dice value: ${Math.round(Math.random() * 6)}</p>`);
document.write(`<p>random dice value: ${Math.round(Math.random() * 6)}</p>`);
document.write('<hr/>');

// *****************
// ***  Task 07  ***
// *****************

var text = 'The quick brown fox jumps over the lazy dog';
var count = 0;
var aList = text.split(' ');
for (i = 0; i < aList.length; i++) {
  if (aList[i].toLowerCase() === 'the') {
    count++;
  }
}
document.write(`<p>Text: ${text}</p>`);
document.write(`<p>There are ${count} occurrence(s) of word 'the</p>`);
document.write('<hr/>');
// *****************
// ***  Task 08  ***
// *****************

function doConvert(numb) {
  let numberInput = numb;
  let oneToTwenty = [
    '',
    'one ',
    'two ',
    'three ',
    'four ',
    'five ',
    'six ',
    'seven ',
    'eight ',
    'nine ',
    'ten ',
    'eleven ',
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen ',
    'eighteen ',
    'nineteen ',
  ];
  let tenth = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (numberInput.toString().length > 7) return 'overlimit';
  let num = ('0000000' + numberInput)
    .slice(-7)
    .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
  if (!num) return;
  let outputText =
    num[1] != 0
      ? (oneToTwenty[Number(num[1])] ||
          `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + ' million '
      : '';
  outputText +=
    num[2] != 0
      ? (oneToTwenty[Number(num[2])] ||
          `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + 'hundred '
      : '';
  outputText +=
    num[3] != 0
      ? (oneToTwenty[Number(num[3])] ||
          `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + ' thousand '
      : '';
  outputText +=
    num[4] != 0
      ? (oneToTwenty[Number(num[4])] ||
          `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + 'hundred '
      : '';
  outputText +=
    num[5] != 0
      ? oneToTwenty[Number(num[5])] ||
        `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `
      : '';

  return outputText;
}
var testN = '4285';
result = doConvert(testN);
document.write(`<p>Output: ${testN}</p>`);
document.write(`<p>Output: ${result}</p>`);
document.write('<hr/>');

// *****************
// ***  Task 09  ***
// *****************
text = '<p><strong><em>Only print this</em></strong></p>';
flag = true;
while (flag) {
  s = text.indexOf('<');
  e = text.indexOf('>');
  if (s === -1 || e === -1) {
    flag = false;
  } else {
    text = text.replace(text.slice(s, e + 1), '');
  }
}
document.write(`<p>Output: ${text}</p>`);
document.write('<hr/>');

// *****************
// ***  Task 10  ***
// *****************
var num = -9.3079499;
var ro = 4;
document.write(`<p>Input : ${num}</p>`);
document.write(`<p>Outout : ${num.toFixed(ro)}</p>`);
document.write('<hr/>');

// *****************
// ***  Task 11  ***
// *****************
var num = '666';
document.write(`<p>Input : ${num}</p>`);
aList = num.split('');
aLength = num.length;
sum = 0;
for (i = 0; i < aLength; i++) {
  sum += Number(aList[i]);
}
result = sum / aLength;
document.write(`<p>Outpt : ${result}</p>`);
document.write('<hr/>');

// *****************
// ***  Task 12  ***
// *****************
d1 = new Date();
if (d1.getDate() < 15) {
  document.write(`<p>First fifteen days of the month</p>`);
} else {
  document.write(`<p>Last days of the month</p>`);
}
document.write('<hr/>');

// *****************
// ***  Task 13  ***
// *****************
d1 = new Date();
document.write(`<p>Current date : ${d1}</p>`);
ml = d1.getTime();
document.write(`<p>Elapsed milliseconds since January 1,1970 : ${ml}</p>`);
minutes = ml / 1000 / 60;
document.write(`<p>Elapsed minutes since January 1,1970 : ${minutes}</p>`);
document.write('<hr/>');

// *****************
// ***  Task 14  ***
// *****************
d1 = new Date();
document.write(`<p>Current date : ${d1}</p>`);
d1.setHours(d1.getHours() - 1);
document.write(`<p>1 hour ago, it was ${d1}</p>`);
document.write('<hr/>');

// *****************
// ***  Task 15  ***
// *****************
var d1 = new Date();
var age = 28;
document.write(`<p>Your age is ${age}</p>`);
document.write(`<p>Your birth year is ${d1.getFullYear() - age}</p>`);

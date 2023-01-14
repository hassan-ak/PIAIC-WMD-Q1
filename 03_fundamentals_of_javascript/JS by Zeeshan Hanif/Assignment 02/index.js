document.write('<h1>Assignment 02</h1>');
document.write('<hr/>');

// *****************
// ***  Task 01  ***
// *****************
var cityName = prompt('Enter city name : ');
if (cityName === 'Karachi') {
  document.write('Welcome to city of Lights');
}
document.write('<hr/>');

// *****************
// ***  Task 02  ***
// *****************
var signalColor = prompt('Enter signal color : ');
var message;
if (signalColor === 'Red') {
  message = 'Must Stop';
} else if (signalColor === 'Yellow') {
  message = 'Ready to move';
} else if (signalColor === 'Green') {
  message = 'Move now';
}
document.write(`
  <table border="2">
    <tr>
      <th>Signal Color</th>
      <th>Message</th>
    </tr>
    <tr>
      <td>${signalColor}</td>
      <td>${message}</td>
    </tr>
  </table>
`);
document.write('<hr/>');

// *****************
// ***  Task 03  ***
// *****************
var a = 4;
if (++a === 5) {
  document.write('given condition for variable a is true');
  document.write('<br/>');
}
var b = 82;
if (b++ === 83) {
  document.write('given condition for variable b is true');
  document.write('<br/>');
}
var c = 12;
if (c++ === 13) {
  document.write('condition 1 is true');
  document.write('<br/>');
}
if (c === 13) {
  document.write('condition 2 is true');
  document.write('<br/>');
}
if (++c < 14) {
  document.write('condition 3 is true');
  document.write('<br/>');
}
if (c === 14) {
  document.write('condition 4 is true');
  document.write('<br/>');
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  document.write('The cost equals');
  document.write('<br/>');
}
if (true) {
  document.write('True');
  document.write('<br/>');
}
if (false) {
  document.write('False');
  document.write('<br/>');
}
if ('car' < 'cat') {
  document.write('car is smaller than cat');
  document.write('<br/>');
}
document.write('<hr/>');

// *****************
// ***  Task 04  ***
// *****************
var obtainedMarks1 = prompt('Enter obtained marks of subject 01 : ');
var totalMarks1 = prompt('Enter total marks of subject 01 : ');
var obtainedMarks2 = prompt('Enter obtained marks of subject 02 : ');
var totalMarks2 = prompt('Enter total marks of subject 02 : ');
var obtainedMarks3 = prompt('Enter obtained marks of subject 03 : ');
var totalMarks3 = prompt('Enter total marks of subject 03 : ');
var obtainedMarks =
  Number(obtainedMarks1) + Number(obtainedMarks2) + Number(obtainedMarks3);
var totalMarks =
  Number(totalMarks1) + Number(totalMarks2) + Number(totalMarks3);
var percentage = Math.round((obtainedMarks / totalMarks) * 100, 2);
var Grade;
var Remarks;
if (percentage >= 80) {
  Grade = 'A-one';
  Remarks = 'Excellent';
} else if (percentage >= 70) {
  Grade = 'A';
  Remarks = 'Good';
} else if (percentage >= 60) {
  Grade = 'B';
  Remarks = 'You need to improve';
} else {
  Grade = 'Fail';
  Remarks = 'Sorry';
}
document.write(`
  <div style=" border: 1px solid blue; max-width: 500px; max-height: 300px; padding: 15px;">
    <h2>Mark Sheet</h2>
    <div style="padding: 15px">
      <p>Total Marks : ${totalMarks}</p>
      <p>Marks Obtained : ${obtainedMarks}</p>
      <p>Percentage : ${percentage}%</p>
      <p>Grade : ${Grade}</p>
      <p>Remarks : ${Remarks}</p>
    </div>
  </div>
`);
document.write('<hr/>');

// *****************
// ***  Task 05  ***
// *****************
var theNumber = 8;
var gussedNumber = Number(prompt('Guess the number : '));
if (gussedNumber === theNumber) {
  document.write('Bingo! Correct answer');
} else if (gussedNumber + 1 === theNumber) {
  document.write('Close enough to the correct answer');
}
document.write('<hr/>');

// *****************
// ***  Task 06  ***
// *****************
var gussedNumber = Number(prompt('Enter the number : '));
if (gussedNumber % 2 === 0) {
  document.write('Even number');
} else {
  document.write('Odd number');
}
document.write('<hr/>');

// *****************
// ***  Task 07  ***
// *****************
var firstNumber = Number(prompt('Enter the 1st number : '));
var secondNumber = Number(prompt('Enter the 2nd number : '));
var operation = prompt('Enter the operation : ');
var result;
if (operation === '+') {
  result = firstNumber + secondNumber;
} else if (operation === '-') {
  result = firstNumber - secondNumber;
} else if (operation === '*') {
  result = firstNumber * secondNumber;
} else if (operation === '/') {
  result = firstNumber / secondNumber;
} else if (operation === '%') {
  result = firstNumber * secondNumber;
}
if (result) {
  document.write(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
}
document.write('<hr/>');

// *****************
// ***  Task 08  ***
// *****************
var firstNumber = Number(prompt('Enter the number : '));
if (firstNumber > 0) {
  document.write(`Number is a +ve`);
} else if (firstNumber === 0) {
  document.write(`Number is a Zero`);
} else {
  document.write(`Number is a -ve`);
}
document.write('<hr/>');

// *****************
// ***  Task 09  ***
// *****************
var ch = prompt('Enter the letter : ');
if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
  letter = ch.toLowerCase();
  if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u'
  ) {
    document.write('vowel');
  } else {
    document.write('constant');
  }
}
document.write('<hr/>');

// *****************
// ***  Task 10  ***
// *****************
var correctPassword = 'jackSmith321';
var pass = prompt('Enter password : ');
if (!pass) {
  document.write('Please enter your password');
} else if (correctPassword === pass) {
  document.write(
    'Correct! The password you entered matches the original password'
  );
} else {
  document.write('Incorrect password');
}
document.write('<hr/>');

// *****************
// ***  Task 11  ***
// *****************
var time = Number(prompt('Enter 24 hours clock format like: 1900 = 7pm.'));
if (time >= 2100 && time <= 2359) {
  document.write('Good Night');
} else if (time >= 1700 && time <= 2100) {
  document.write('Good Evening');
} else if (time >= 1200 && time <= 1700) {
  document.write('Good Afternoon');
} else if (time >= 0 && time <= 1200) {
  document.write('Good Morning');
} else {
  document.write('Time in wrong format');
}
document.write('<hr/>');

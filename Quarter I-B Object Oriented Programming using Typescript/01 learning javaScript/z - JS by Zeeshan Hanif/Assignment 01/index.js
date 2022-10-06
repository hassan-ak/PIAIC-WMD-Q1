document.write('<h1>Assignment 01</h1>');

// *****************
// ***  Task 01  ***
// *****************

console.log('Task 01');
alert('Welcome to JS Land... \n Happy Coding!');

// *****************
// ***  Task 02  ***
// *****************

console.log('Task 02');
var fullName = 'Jhone Doe';
var age = '15 years old';
var course = 'Certified Mobile Application Development';
alert(fullName);
alert(age);
alert(course);

// *****************
// ***  Task 03  ***
// *****************

console.log('Task 03');
var email = 'example@example.com';
var message = 'My email address is ';
var result = message + email;
alert(result);

// *****************
// ***  Task 04  ***
// *****************
document.write('<hr/>');
console.log('Task 04');
document.write('Yah! I can write HTML content through JavaScript');

// *****************
// ***  Task 05  ***
// *****************

console.log('Task 05');
var age = 15;
var message1 = 'I am ';
var message2 = ' years old ';
var result = message1 + age + message2;
alert(result);

// *****************
// ***  Task 06  ***
// *****************
document.write('<br/>');
document.write('<br/>');
document.write('<hr/>');

console.log('Task 06');
var birthYear = 1992;
document.write(
  'My birth year is ' +
    birthYear +
    '<br />' +
    'Data type of my declared variable is ' +
    typeof birthYear
);

// *****************
// ***  Task 07  ***
// *****************
document.write('<br/>');
document.write('<br/>');
document.write('<hr/>');

console.log('Task 07');
document.write(
  '<h2>Rules for naming JS variables</h2>' +
    '<p>Variable names can only contain letter, numbers, $, and _. For example $my_1stVariable.</p>' +
    '<p>Variables must begin with a $, _ or letter. _____. For example $name, _name or name</p>' +
    '<p>Variable names are case sentive</p>' +
    '<p>Variable names should not be JS keyword</p>'
);

// *****************
// ***  Task 08  ***
// *****************
document.write('<br/>');
document.write('<br/>');
document.write('<hr/>');

console.log('Task 08');
a = 3;
b = 5;
c = a + b;
document.write('Sum of ' + a + ' and ' + b + ' is ' + c);

// *****************
// ***  Task 09  ***
// *****************
document.write('<br/>');
document.write('<br/>');
document.write('<hr/>');

console.log('Task 09');
d = a - b;
document.write('Subtraction of ' + a + ' and ' + b + ' is ' + d);
document.write('<br/>');
e = a * b;
document.write('Multiplication of ' + a + ' and ' + b + ' is ' + e);
document.write('<br/>');
f = a / b;
document.write('Division of ' + a + ' and ' + b + ' is ' + f);
document.write('<br/>');
g = a % b;
document.write('Modulus of ' + a + ' and ' + b + ' is ' + g);

// *****************
// ***  Task 10  ***
// *****************
document.write('<br/>');
document.write('<br/>');
document.write('<hr/>');

console.log('Task 10');
var newVariable;
document.write('Value after variable declaration is : ' + newVariable);
newVariable = 5;
document.write('<br/> Initial value : ' + newVariable);
++newVariable;
document.write('<br/> Value after increment is : ' + newVariable);
newVariable += 7;
document.write('<br/> Value after addition is : ' + newVariable);
--newVariable;
document.write('<br/> Value after decrement is : ' + newVariable);
document.write('<br/> The remainder is : ' + (newVariable % 3));

// *****************
// ***  Task 11  ***
// *****************
document.write('<br/>');
document.write('<br/>');
document.write('<hr/>');

console.log('Task 11');

tempC = 25;
tempF = (tempC * 9) / 5 + 32;
document.write(tempC + '<sup>o</sup>C is ' + tempF + '<sup>o</sup>F');
document.write('<br/>');
tempF = 70;
tempC = ((tempF - 32) * 5) / 9;
document.write(tempF + '<sup>o</sup>F is ' + tempC + '<sup>o</sup>C');

// *****************
// ***  Task 12  ***
// *****************
document.write('<br/>');
document.write('<br/>');
document.write('<hr/>');

console.log('Task 12');

var dollars = 10;
var Riyals = 25;
pkr = dollars * 155 + Riyals * 41;
document.write(
  `<h2>Currency in PKR</h2> <p>Total currency in PKR : ${pkr}</p>`
);

// *****************
// ***  Task 13  ***
// *****************
document.write('<br/>');
document.write('<br/>');
document.write('<hr/>');

console.log('Task 13');
var a = 10;
document.write(
  `Result : <br/> Value of a is : ${a} <br/> <br/> **********<br/><br/>`
);
document.write(
  `Value of ++a is : ${++a} <br/> Now the value of a is : ${a}<br/><br/>`
);
document.write(
  `Value of a++ is : ${a++} <br/> Now the value of a is : ${a}<br/><br/>`
);
document.write(
  `Value of --a is : ${--a} <br/> Now the value of a is : ${a}<br/><br/>`
);
document.write(
  `Value of a-- is : ${a--} <br/> Now the value of a is : ${a}<br/><br/>`
);

// *****************
// ***  Task 14  ***
// *****************
document.write('<br/>');
document.write('<br/>');
document.write('<hr/>');

console.log('Task 14');
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

document.write(`a is ${a} <br/>`);
document.write(`b is ${b} <br/>`);
document.write(`result is ${result} <br/>`);

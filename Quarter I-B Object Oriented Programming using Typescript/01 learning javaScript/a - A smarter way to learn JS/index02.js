//***********************
//*** Chapter 10 - 14 ***
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
//*** Chapter 10 ***
//******************
chapterStart(10);
// var x = prompt('Where does the Pope live?');
var x = 'Vatican';
if (x === 'Vatican') {
  console.log('Correct!');
}
chapterEnd();

//******************
//*** Chapter 11 ***
//******************
chapterStart(11);
var yourTicketNumber;
if (yourTicketNumber !== 487208) {
  console.log('Better luck next time.');
}
chapterEnd();

//******************
//*** Chapter 12 ***
//******************
chapterStart(12);
// var x = prompt('Where does the Pope live?');
var x = 'The Vatican';
if (x === 'Vatican') {
  console.log('Correct!');
}
if (x !== 'Vatican') {
  console.log('Not Correct!');
}
console.log('---');
// var x = prompt('Where does the Pope live?');
var x = 'The Vatican';
if (x === 'Vatican') {
  console.log('Correct!');
} else {
  console.log('Not Correct!');
}
console.log('---');
// var x = prompt('Where does the Pope live?');
var x = 'Rome';
if (x === 'Vatican') {
  console.log('Correct!');
} else if (x === 'Rome') {
  console.log('Incorrect but close');
} else {
  console.log('Not Correct!');
}
chapterEnd();

//******************
//*** Chapter 13 ***
//******************
chapterStart(13);
var weight = 345;
var time = 5;
if (weight > 300 && time < 6) {
  console.log('Come to our tryout!');
} else {
  console.log('Come to our cookout!');
}
console.log('---');
var SAT = 5;
var avg = 1;
var sport;
if (SAT > avg || GPA > 2.5 || sport === 'football') {
  console.log('Welcome to Bubba State!');
} else {
  console.log('Have you looked into appliance repair?');
}
chapterEnd();

//******************
//*** Chapter 14 ***
//******************
chapterStart(14);
var a = 11;
var b = 1;
var c = 1;
var d = 1;
var x = 11;
var y = 1;
if (c === d) {
  if (x === y) {
    console.log('if + if');
  } else if (a === b) {
    console.log('if + if + else + if');
  } else {
    console.log('if + if + else ');
  }
} else {
  console.log('if + else ');
}

chapterEnd();

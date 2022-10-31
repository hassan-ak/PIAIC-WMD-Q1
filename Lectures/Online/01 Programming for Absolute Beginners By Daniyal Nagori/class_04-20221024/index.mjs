// Class 04

/*
  JavaScript Objects
*/
const car = { type: 'Fiat', model: '500', color: 'white' };

// Person Object - Key Value Pair syntax
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  'eye-Color': 'blue',
};

// Access Obj Properties
person.age; // 50
person['eye-Color']; // blue

/*
  The Arrays Object
*/
// Persons Array - Key Value Pair syntax
const persons = [
  {
    firstName: 'Hamzah',
    lastName: 'Syed',
    age: 22,
    'eye-Color': 'brown',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    'eye-Color': 'blue',
  },
];

// Access Person 1
persons[0].age; // 22
persons[1].age; // 50

/*
  For Loops
*/
/*
// Syntax:
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
*/
for (let i = 0; i < 3; i++) {
  console.log('Hello World');
}

for (let i = 0; i < 3; i++) {
  console.log('Hello World' + i);
}

var cleanestCities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'];
for (var i = 0; i <= 4; i++) {
  if ('Islamabad' === cleanestCities[i]) {
    console.log("It's one of the cleanest cities");
    break;
  }
}

var cleanestCities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'];
var matchFound = 'no';
for (var i = 0; i <= 4; i++) {
  if ('Islambad' === cleanestCities[i]) {
    matchFound = 'yes';
    console.log("It's one of the cleanest cities");
  }
}
if (matchFound === 'no') {
  console.log("It's not on the list");
}

var cleanestCities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'];
var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++) {
  if ('Islamabad' === cleanestCities[i]) {
    matchFound = true;
    console.log("It's one of the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  console.log("It's not on the list");
}

/*
  Nested For Loops
*/
var firstNames = ['BlueRay ', 'Upchuck ', 'Lojack ', 'Gizmo ', 'Do-Rag '];
var lastNames = ['Zzz', 'Burp', 'Dogbone', 'Droop'];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}
console.log(fullNames);

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
  monthAbbrev = month.slice(0, 3);
}
console.log(monthAbbrev);

/*
  Strings: Finding segments
*/

/*
  Strings: Finding a character at a location
*/

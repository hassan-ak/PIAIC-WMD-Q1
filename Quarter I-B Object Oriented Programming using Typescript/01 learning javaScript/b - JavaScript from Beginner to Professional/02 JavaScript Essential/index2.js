// varibale string
let singleString = 'Hi there!';
console.log('Single quote : ', singleString);
let doubleString = 'How are you?';
console.log('double quote : ', doubleString);
let funActivity = "Let's learn JavaScript";
console.log('Single in a double quote : ', funActivity);
let question = 'Do you want to learn JavaScript? "Yes!"';
console.log('Double in a single quote : ', question);
let language = 'JavaScript';
let message = `Let's learn ${language}`;
console.log('Backtick : ', message);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log('Escape Character : ', str2);
let str3 = 'New \nline.';
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);
console.log('******');
console.log('******');
console.log('******');

// Variable Number
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; //decimal version would be 8
let hexNr = 0x3e8; //decimal version would be 1000
let binNr = 0b101; //decimal version would be 5

// Bigint
let bigNr = 90071992547409920n;

// Boolean
let bool1 = false;
let bool2 = true;

// Symbols
let str101 = 'JavaScript is fun!';
let str102 = 'JavaScript is fun!';
console.log('These two strings are the same:', str101 === str102);
let sym1 = Symbol('JavaScript is fun!');
let sym2 = Symbol('JavaScript is fun!');
console.log('These two Symbols are the same:', sym1 === sym2);
console.log('******');
console.log('******');
console.log('******');

// Undefined
let unassigned;
console.log(unassigned);
console.log('******');
console.log('******');
console.log('******');

// Null
let terribleThingToDo = undefined;
let lastName;
console.log('Same undefined:', lastName === terribleThingToDo);
let betterOption = null;
console.log('Same null:', lastName === betterOption);

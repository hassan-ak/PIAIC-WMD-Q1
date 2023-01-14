let nr1 = 2;
let nr2 = '2';
console.log(nr1 * nr2);

let nr3 = 2;
let nr4 = '2';
console.log(nr3 + nr4);

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = '12';
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = 'any string will return true';
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log('null', nullToNr, typeof nullToNr);

let strToNr1 = '';
strToNr1 = Number(strToNr1);
console.log('empty string', strToNr, typeof strToNr1);

let strToNr2 = 'hello';
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);

let strToBool1 = '';
strToBool1 = Boolean(strToBool1);
console.log(strToBool1, typeof strToBool1);

let strToBool2 = 'false';
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let nr101 = 2;
let nr201 = '2';
console.log(nr101 + Number(nr201));

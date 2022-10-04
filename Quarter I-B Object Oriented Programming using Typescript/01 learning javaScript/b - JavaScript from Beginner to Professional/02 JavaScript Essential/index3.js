// typeof
testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof testVariable;
console.log(variableTypeTest1);
console.log(variableTypeTest2);
let str = 'Hello';
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol('unique');
let undef = undefined;
let unknown = null;

console.log('str', typeof str);
console.log('nr', typeof nr);
console.log('bigNr', typeof bigNr);
console.log('bool', typeof bool);
console.log('sym', typeof sym);
console.log('undef', typeof undef);
console.log('unknown', typeof unknown);

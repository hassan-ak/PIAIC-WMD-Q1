"use strict";
// Strict Null Checking
// The Billion-Dollar Mistake
// strict null check false following code will run ok.
let nameMaybe = Math.random() > 0.5 ? 'Tony Hoare' : undefined;
// nameMaybe.toLowerCase();
// Truthiness Narrowing
let geneticist = Math.random() > 0.5 ? 'Barbara McClintock' : undefined;
if (geneticist) {
    geneticist.toUpperCase(); // Ok: string
}
// geneticist.toUpperCase(); // property error
geneticist && geneticist.toUpperCase(); // Ok: string | undefined
geneticist === null || geneticist === void 0 ? void 0 : geneticist.toUpperCase(); // Ok: string | undefined
// Variables Without Initial Values
let mathematician1;
// mathematician1?.length;
// Error: Variable 'mathematician' is used before being assigned.
let mathematician2;
console.log(mathematician2 === null || mathematician2 === void 0 ? void 0 : mathematician2.length); // Ok
mathematician2 = 'Mark Goldberg';
mathematician2.length; // Ok
// Type Aliases
// each variale can be off any four types
let rawDataFirst;
let rawDataSecond;
let rawDataThird;
let rawDataFirst1;
let rawDataSecond1;
let rawDataThird1;

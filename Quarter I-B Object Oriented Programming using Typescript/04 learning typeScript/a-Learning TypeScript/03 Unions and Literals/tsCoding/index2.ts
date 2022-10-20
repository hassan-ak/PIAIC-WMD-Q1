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
geneticist?.toUpperCase(); // Ok: string | undefined

// Variables Without Initial Values
let mathematician1: string;
// mathematician1?.length;
// Error: Variable 'mathematician' is used before being assigned.
let mathematician2: string | undefined;
console.log(mathematician2?.length); // Ok
mathematician2 = 'Mark Goldberg';
mathematician2.length; // Ok

// Type Aliases
// each variale can be off any four types
let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined;
// above code can be transformed to
type RawData = boolean | number | string | null | undefined;
let rawDataFirst1: RawData;
let rawDataSecond1: RawData;
let rawDataThird1: RawData;

// Type Aliases Are Not JavaScript
type SomeType = string | undefined;
// console.log(SomeType); error

// Combining Type Aliases
type Id = number | string;
type IdMaybe = Id | undefined | null;

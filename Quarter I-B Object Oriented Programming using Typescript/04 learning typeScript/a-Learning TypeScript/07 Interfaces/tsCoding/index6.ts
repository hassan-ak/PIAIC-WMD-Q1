/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Index Signatures

interface WordCounts {
  [i: string]: number;
}
const counts: WordCounts = {};
counts.apple = 0; // Ok
counts.banana = 1; // Ok
// counts.cherry = false;
// Error: Type 'boolean' is not assignable to type 'number'.

interface DatesByName {
  [i: string]: Date;
}
const publishDates: DatesByName = {
  Frankenstein: new Date('1 January 1818'),
};
publishDates.Frankenstein; // Type: Date
console.log(publishDates.Frankenstein.toString()); // Ok
// publishDates.Beloved; // Type: Date, but runtime value of undefined!
// console.log(publishDates.Beloved.toString());
// Ok in the type system, but...
// Runtime error: Cannot read property 'toString'
// of undefined (reading publishDates.Beloved)

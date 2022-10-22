/* 
    Chapter 9. Type Modifiers
    Type Assertions
*/
//   Type Assertion Caveats
//     Assertions versus declarations

interface Entertainer {
  acts: string[];
  name: string;
}
// const declared: Entertainer = {
//   name: 'Moms Mabley',
// };
// Error: Property 'acts' is missing in type
// '{ one: number; }' but required in type 'Entertainer'.
const asserted = {
  name: 'Moms Mabley',
} as Entertainer; // Ok, but...
// Both of these statements would fail at runtime with:
// Runtime TypeError: Cannot read properties of undefined (reading 'toPrecision')
// console.log(declared.acts.join(', '));
console.log(asserted.acts.join(', '));

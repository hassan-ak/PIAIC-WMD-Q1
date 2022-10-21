/*
    Chapter 7. Interfaces
    Interface Extensions
*/
//   Overridden Properties
interface WithNullableName {
  name: string | null;
}
interface WithNonNullableName extends WithNullableName {
  name: string;
}
// interface WithNumericName extends WithNullableName {
//   name: number | string;
// }
// Error: Interface 'WithNumericName' incorrectly
// extends interface 'WithNullableName'.
// Types of property 'name' are incompatible.
// Type 'string | number' is not assignable to type 'string | null'.
// Type 'number' is not assignable to type 'string'.

/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Read-Only Properties

interface HasBothFunctionTypes {
  property: () => string;
  method(): string;
}
const hasBoth: HasBothFunctionTypes = {
  property: () => '',
  method() {
    return '';
  },
};
hasBoth.property(); // Ok
hasBoth.method(); // Ok

interface OptionalReadonlyFunctions {
  optionalProperty?: () => string;
  optionalMethod?(): string;
}

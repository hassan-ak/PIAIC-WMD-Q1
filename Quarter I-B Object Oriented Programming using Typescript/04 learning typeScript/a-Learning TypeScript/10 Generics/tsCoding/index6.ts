/*
    # Chapter 10. Generics
*/

/***********************************************************/

/*-----------------------*/
/*-- Generic Modifiers --*/
/*-----------------------*/

/***********************************************************/

/************************/
/*** Generic Defaults ***/
/************************/

/***********************************************************/
interface Quote<T = string> {
  value: T;
}
let explicit: Quote<number> = { value: 123 };
let implicit: Quote = {
  value: 'Be yourself. The world worships the original.',
};
// let mismatch: Quote = { value: 123 };

/***********************************************************/
interface KeyValuePair<Key, Value = Key> {
  key: Key;
  value: Value;
}
// Type: KeyValuePair<string, string>
let allExplicit: KeyValuePair<string, number> = {
  key: 'rating',
  value: 10,
};
// Type: KeyValuePair<string>
let oneDefaulting: KeyValuePair<string> = {
  key: 'rating',
  value: 'ten',
};
// let firstMissing: KeyValuePair = {
//   key: 'rating',
//   value: 10,
// };

/***********************************************************/
function inTheEnd<First, Second, Third = number, Fourth = string>() {} // Ok
// function inTheMiddle<First, Second = boolean, Third = number, Fourth>() {}

/***********************************************************/

export {};

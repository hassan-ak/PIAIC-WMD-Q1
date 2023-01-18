/*
    # Chapter 10. Generics
*/
/***********************************************************/

/*-----------------------*/
/*-- Generic Functions --*/
/*-----------------------*/

/***********************************************************/
function identity<T>(input: T) {
  return input;
}
const numeric = identity('me'); // Type: "me"
const stringy = identity(123); // Type: 123

/***********************************************************/
const identity1 = <T>(input: T) => input;
identity1(123); // Type: 123

/***********************************************************/

/***********************************/
/*** Explicit Generic Call Types ***/
/***********************************/

/***********************************************************/
function logWrapper<Input>(callback: (input: Input) => void) {
  return (input: Input) => {
    console.log('Input:', input);
    callback(input);
  };
}
// Type: (input: string) => void
logWrapper((input: string) => {
  console.log(input.length);
});
// Type: (input: unknown) => void
// Error
// logWrapper((input) => {
//   console.log(input.length);
// });

/***********************************************************/
// Type: (input: string) => void
logWrapper<string>((input) => {
  console.log(input.length);
});
logWrapper<string>((input: string) => {});

/***********************************************************/

/*****************************************/
/*** Multiple Function Type Parameters ***/
/*****************************************/

/***********************************************************/
function makeTuple<First, Second>(first: First, second: Second) {
  return [first, second] as const;
}
let tuple = makeTuple(true, 'abc');

/***********************************************************/
function makePair<Key, Value>(key: Key, value: Value) {
  return { key, value };
}
// Ok: neither type argument provided
makePair('abc', 123); // Type: { key: string; value: number }
// Ok: both type arguments provided
makePair<string, number>('abc', 123); // Type: { key: string; value: number }
makePair<'abc', 123>('abc', 123); // Type: { key: "abc"; value: 123 }
// makePair<string>('abc', 123);

/***********************************************************/

export {};

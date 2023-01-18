/*
    # Chapter 10. Generics
*/

/***********************************************************/
function identity(input: any) {
  return input;
}
let value1 = identity(42);
let value2 = identity('abc');
let value3 = identity(123);
let value4 = identity({
  quote: 'I think your self emerges more clearly over time.',
});

/***********************************************************/

export {};

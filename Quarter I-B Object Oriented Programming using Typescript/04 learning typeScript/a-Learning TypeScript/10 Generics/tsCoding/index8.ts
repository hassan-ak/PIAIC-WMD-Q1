/*
    # Chapter 10. Generics
*/

/***********************************************************/

/*--------------*/
/*-- Promises --*/
/*--------------*/

/***********************************************************/

/*************************/
/*** Creating Promises ***/
/*************************/

/***********************************************************/
class PromiseLike<Value> {
  constructor(
    executor: (
      resolve: (value: Value) => void,
      reject: (reason: unknown) => void
    ) => void
  ) {
    /* ... */
  }
}

/***********************************************************/
// Type: Promise<unknown>
const resolvesUnknown = new Promise((resolve) => {
  setTimeout(() => resolve('Done!'), 1000);
});
// Type: Promise<string>
const resolvesString = new Promise<string>((resolve) => {
  setTimeout(() => resolve('Done!'), 1000);
});

/***********************************************************/
// Type: Promise<string>
const textEventually = new Promise<string>((resolve) => {
  setTimeout(() => resolve('Done!'), 1000);
});
// Type: Promise<number>
const lengthEventually = textEventually.then((text) => text.length);

/***********************************************************/

/***********************/
/*** Async Functions ***/
/***********************/

/***********************************************************/
// Type: (text: string) => Promise<number>
async function lengthAfterSecond(text: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return text.length;
}
// Type: (text: string) => Promise<number>
async function lengthImmediately(text: string) {
  return text.length;
}

/***********************************************************/
// Ok
async function givesPromiseForString(): Promise<string> {
  return 'Done!';
}
// async function givesString(): string {
//   return 'Done!';
// }

/***********************************************************/

export {};

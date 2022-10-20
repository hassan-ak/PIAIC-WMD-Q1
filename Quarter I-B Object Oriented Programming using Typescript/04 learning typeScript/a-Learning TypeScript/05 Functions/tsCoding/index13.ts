/*
    Chapter 5. Functions
    More Return Types
*/
// Never Returns
function fail(message: string): never {
  throw new Error(`Invariant failure: ${message}.`);
}
function workWithUnsafeParam(param: unknown) {
  if (typeof param !== 'string') {
    fail(`param should be a string, not ${typeof param}`);
  }
  // Here, param is known to be type string
  param.toUpperCase(); // Ok
}

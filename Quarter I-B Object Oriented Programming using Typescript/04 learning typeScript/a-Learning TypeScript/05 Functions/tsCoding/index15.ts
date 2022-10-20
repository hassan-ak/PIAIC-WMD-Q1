/*
    Chapter 5. Functions
    Function Overloads
*/
// Call-Signature Compatibility

function format(data: string): string; // Ok
function format(data: string, needle: string, haystack: string): string; // Ok
// function format(getData: () => string): string;
// ~~~~~~
// This overload signature is not compatible with its implementation signature.
function format(data: string, needle?: string, haystack?: string) {
  return needle && haystack ? data.replace(needle, haystack) : data;
}

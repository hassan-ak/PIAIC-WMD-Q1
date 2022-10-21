"use strict";
/*
  Chapter 6. Arrays
  Array Members
*/
// Caveat: Unsound Members
function withElements(elements) {
    console.log(elements[9001].length); // No type error
}
withElements(["It's", 'over']);

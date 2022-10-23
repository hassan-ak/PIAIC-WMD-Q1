"use strict";
//We can use interfaces to describe an array also, please note this is different from Java or C#
//where we can only use interfaces to describe class types.
let myArray = ['Bob', 'Fred'];
var first = myArray[0];
let myDictionary = { first: 'Bob', second: 'Fred' };
var first = myDictionary['first'];
// let myDictionary2: Dictionary2 = { first: 'Bob', second: 'Fred' }; // Will not work, property length is required
let myDictionary3 = { first: 'Bob', second: 'Fred', length: '2' }; // Will work, length property is defined but not much usefull
var first = myDictionary3['first'];
//It is possible to support both types of index,
//with the restriction that the type returned from the numeric index must be a subtype of the type returned from the string index.
//While index signatures are a powerful way to describe the array and 'dictionary' pattern,
//they also enforce that all properties match their return type. In this example,
//the property does not match the more general index, and the type-checker gives an error:
// interface AnotherDictionary {
//   [index: string]: string; //Note there is no name assigned to the function signature
//   length: number; // error, the type of 'length' is not a subtype of the indexer
// }

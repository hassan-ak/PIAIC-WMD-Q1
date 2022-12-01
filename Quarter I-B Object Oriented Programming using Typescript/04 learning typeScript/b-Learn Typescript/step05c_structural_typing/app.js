"use strict";
// step05c_structural_typing
let pet;
// dog's inferred type is { name: string; owner: string; }
let dog = { name: 'Lassie', owner: 'Rudd Weatherwax' };
// We can assign an object with more types to an object with less types (all included)
pet = dog;
let dog1 = { name: 'mars' };
let cat1 = { name: 'venus' };
let person = { firstName: 'jon', lastName: 'snow' };
dog1 = cat1; //ok
cat1 = dog1; //ok
let dog2 = { name: 'mars', breedName: 'Bull dog' };
let cat2 = { name: 'venus' };
cat2 = dog2;
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let tube = { diameter: 12, length: 3 };
//tube = ball;//Error
ball = tube;
// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.
// TypeScript is comparing each member in the type against
// each other to verify their equality.
/***********************************************************/
// Now lets do it Case By Case
//Case when "FRESH"" object literal are assigned to a variable
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type,
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost.
let myType = { name: 'Zia', id: 1 };
//Case 1
myType = { id: 2, name: 'Tom' }; //Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type
//Case 2a
// myType = { id: 2, name_person: 'Tom' }; //Case 2a: Error, renamed or missing property
//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
var x; //Note now 'x' can have any name, just that the property should be of type string
x = { id: 1, fullname: 'Zia' }; // Ok, `fullname` matched by index signature
//Case 3
// myType = { id: 2, name: 'Tom', age: 22 }; //Case 3: Error, excess property
/***********************************************************/
//Case when STALE object literal are assigned to a variable
//Case 1
let myType2 = { id: 2, name: 'Tom' };
myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object
//Case 2a
let myType3 = { id: 2, name_person: 'Tom' };
// myType = myType3; //Case 2: Error, renamed or missing property, rule same for stale and fresh object
//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
var x; //Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: 'Zia' };
x = y; // Ok, `fullname` matched by index signature
//Case 3
var myType4 = { id: 2, name: 'Tom', age: 22 };
myType = myType4; //Case 3: Ok, excess property allowed in case of stale object which is different from fresh object
/***********************************************************/
var xx;
// xx = { foo: 1, baz: 2 }; // Error, excess property `baz`
var yy;
// yy = { foo: 1, baz: 2 }; // Error, excess or misspelled property `baz`
var a;
var a1 = { foo: 1, baz: 2 };
a = a1; //No Error
var z;
var z1 = { foo: 1, baz: 2 };
z = z1; //No Error
/***********************************************************/

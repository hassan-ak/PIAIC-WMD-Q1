// step04_unions_literals

/********************************************************/
// Union Types
/********************************************************/

function printId(id: number | string) {
  console.log('Your ID is: ' + id);
  // Error
  // // console.log(id.toUpperCase());
  // Narrowing
  if (typeof id === 'string') {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
// OK
printId(101);
// OK
printId('202');
// Error
// // printId({ myID: 22342 });

/*------------------------------------------------------*/
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log('Hello, ' + x.join(' and '));
  } else {
    // Here: 'x' is 'string'
    console.log('Welcome lone traveler ' + x);
  }
}

/*------------------------------------------------------*/
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

/*------------------------------------------------------*/
let myname: string | null;
myname = null;
console.log(myname);

myname = 'zia';
console.log(myname);

//Error
// // myname = undefined;

//Error
// //myname = 12;

/********************************************************/
// Narrowing
/********************************************************/

// *** Type Guard
// // "string"
// // "number"
// // "bigint"
// // "boolean"
// // "symbol"
// // "undefined"
// // "object"
// // "function"
function padLeft(padding: number | string, input: string): string {
  // throw new Error('Not implemented yet!');
  // Error
  // // return ' '.repeat(padding) + input;
  // type guard
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

/*------------------------------------------------------*/
// *** Truthiness narrowing
// // 0
// // NaN
// // "" (the empty string)
// // 0n (the bigint version of zero)
// // null
// // undefined
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

/*------------------------------------------------------*/
// both of these result in 'true'
Boolean('hello'); // type: boolean, value: true
!!'world'; // type: true,    value: true

/*------------------------------------------------------*/
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  }
}

/*------------------------------------------------------*/
function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

/*------------------------------------------------------*/
// *** Equality narrowing

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

/*------------------------------------------------------*/
function printAll1(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

/*------------------------------------------------------*/
interface Container {
  value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);
    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

/*------------------------------------------------------*/
// *** The in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    return animal;
  }
  return animal;
}

/*------------------------------------------------------*/
// *** instanceof narrowing
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
/*------------------------------------------------------*/
// *** Assignments
let x2 = Math.random() < 0.5 ? 10 : 'hello world!';
x2 = 1;
console.log(x2);
// Error
// x2 = true;
x2 = 'goodbye!';
console.log(x2);

/*------------------------------------------------------*/
let yourName = Math.random() > 0.6 ? 'Hira Khan' : undefined;
if (yourName) {
  yourName.toUpperCase(); // Ok: string
}
// Error
// //yourName.toUpperCase();
yourName?.toUpperCase(); //OK

/*------------------------------------------------------*/
let myAge: string | number;
myAge = 16; //narrowing
console.log(myAge);
//Error
// //console.log(myAge.toLowerCase());
myAge = 'Dont Know'; //narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string because of narrowing

/*------------------------------------------------------*/
let newAge = Math.random() > 0.6 ? 'Khan' : 60;
// Error
// //newAge.toLowerCase();
if (newAge === 'Khan') {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}
if (typeof newAge === 'string') {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}
typeof newAge === 'string'
  ? newAge.toUpperCase() // Ok: string
  : newAge.toFixed(); // Ok: number

/********************************************************/
// Using type predicates
/********************************************************/
/*
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === 'sharkey') return false;
  return isFish(pet);
});
*/

/********************************************************/
// Discriminated unions
/********************************************************/
interface Shape {
  kind: 'circle' | 'square';
  radius?: number;
  sideLength?: number;
}
function handleShape(shape: Shape) {
  // Error
  // // if (shape.kind === 'rect') {}
}
function getArea(shape: Shape) {
  // Error
  // // return Math.PI * shape.radius ** 2;
}
function getArea1(shape: Shape) {
  if (shape.kind === 'circle') {
    // Error
    // return Math.PI * shape.radius ** 2;
  }
}
function getArea2(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius! ** 2;
  }
}
/*------------------------------------------------------*/
interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  sideLength: number;
}
type Shape1 = Circle | Square;
function getArea3(shape: Shape1) {
  // Error
  // // return Math.PI * shape.radius ** 2;
}
function getArea4(shape: Shape1) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
}
function getArea5(shape: Shape1) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
  }
}
/*------------------------------------------------------*/
let age: number | 'died' | 'unknown';

age = 90; //OK
age = 'died'; //OK
age = 'unknown'; //OK
//age = "living";//Error

let zia: 'zia';

zia = 'zia';
//zia = "khan";//Error

/********************************************************/
// The never type
/********************************************************/
type Shape2 = Circle | Square;

function getArea6(shape: Shape2) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

/*------------------------------------------------------*/
interface Triangle {
  kind: 'triangle';
  sideLength: number;
}

type Shape3 = Circle | Square | Triangle;

function getArea7(shape: Shape3) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
    // Error
    // const _exhaustiveCheck: never = shape;
    // return _exhaustiveCheck;
  }
}

/*------------------------------------------------------*/
// You can also define a type alias
type RawData = boolean | number | string | null | undefined;
let data: RawData;

/*------------------------------------------------------*/
// You can even combine them
type Id = number | string;
type IdMaybe = Id | undefined | null;

/********************************************************/
// Literal Types
/********************************************************/
let changingString = 'Hello World';
changingString = 'Olá Mundo';
changingString;
const constantString = 'Hello World';
constantString;

/*------------------------------------------------------*/
let x10: 'hello' = 'hello';
// OK
x10 = 'hello';
// Error
// // x10 = "howdy";

/*------------------------------------------------------*/
function printText(s: string, alignment: 'left' | 'right' | 'center') {}
printText('Hello, world', 'left');
// Error
// // printText("G'day, mate", 'centre');

/*------------------------------------------------------*/
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

/*------------------------------------------------------*/
interface Options {
  width: number;
}
function configure(x: Options | 'auto') {}
configure({ width: 100 });
configure('auto');
// Error
// // configure('automatic');

/*------------------------------------------------------*/
const obj = { counter: 0 };
if (true) {
  obj.counter = 1;
}

/********************************************************/
// type aliases
/********************************************************/

// A new type is created
type type_alias = number | string | boolean;
// Variable is declared of the new type created
let variable: type_alias;
variable = 1;
console.log(variable);
variable = 'geeksforgeeks';
console.log(variable);
variable = true;
console.log(variable);

/*------------------------------------------------------*/
// A new type is created
type type_alias1 = number | string | boolean;
// Variable is declared of the new type created
let variable1: type_alias1;
// Error
// // variable1 = function () {};

/*------------------------------------------------------*/

// A new type is created
type anotherType = number | string;
let variable2: string;
function displayId(id: anotherType) {
  if (typeof id === typeof variable2) {
    return 'my id is : ' + id;
  }
  return 'my id is : ' + `${id.toString()}`;
}
// Argument of type string is passed into the function
console.log(displayId('AF565'));
// Argument of type number is passed into the function
console.log(displayId(565));

/*------------------------------------------------------*/
// A new type is created
type otherType = 'yes' | 'no';
let variable3: otherType;
variable3 = 'yes'; // no error
console.log(variable3);
// Error
// // variable3 = 'neither'; // error
// // console.log(variable3);
/*------------------------------------------------------*/

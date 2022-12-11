/**************************************************/
// Explicit typing
// Fresh objects
let a = {
    name: 'Hassan',
    firendName: 'Zia',
};
// stale
let b = a;
console.log(b);
/**************************************************/
// Explicit TypeCasting
let myname = 'Zia';
console.log(myname.length);
console.log(myname.length);
/**************************************************/
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //starts with 0
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var colorName = Color1[2];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {})); //can assign values to all
var colorIndex = Color2['Blue'];
console.log(colorIndex);
var c1 = 1 /* Color3.Green */;
var colorIndex1 = 4 /* Color5['Blue'] */;
console.log(colorIndex1);
/**************************************************/
// Arrays
let array1 = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax
let array2 = [1, 2, 3]; //alternative correct syntax
let array3 = []; //correct syntax to define an empty array
// Error
// let array4: number[] = new number[2];//error
let array5 = [];
array5.push(1234); //dynamically adding
/**************************************************/
// Functions
//Note: All parameters are required
//Named function
function add(x, y) {
    return x + y;
}
//Anonymous function
let myAdd1 = function (x, y) {
    return x + y;
};
//Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
//type names dont matter
let myAdd3 = function (x, y) {
    return x + y;
};
//Lambda functions
let myAdd4 = (a, b) => a + b;
function greeter(fn) {
    //....
}
/**************************************************/
// Optional parameters
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
}
let result1 = buildName('Bob'); //ok
// Error
// let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName('Bob', 'Adams'); //also ok
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
};
/**************************************************/
// Default Parameters
//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName2(firstName, lastName = 'Khan') {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
}
let result11 = buildName2('Bob'); //works correctly because last parameter is optional
// Error
// let result12 = buildName2("Bob", "Adams", "Sr.");  //error, too many parameters
let result13 = buildName2('Bob', 'Adams'); //correct
/**************************************************/
// Rest Parameters
function buildName3(firstName, ...restOfName) {
    //Named function with Rest parameters
    return firstName + ' ' + restOfName.join(' ');
}
var employeeName = buildName3('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
//anonymous function type with Rest parameters
var buildName3Fun = function (firstName, ...restOfName) {
    return firstName + ' ' + restOfName.join(' ');
};
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
/**************************************************/
// Callbacks
function myCallBack(text) {
    console.log('inside myCallback ' + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction('myText', myCallBack);
//this is not part of the overload list,
//so it has only three overloads
function add1(arg1, arg2) {
    return arg1 + arg2;
}
//Calling 'add1' with any other parameter types would cause an error except for the three options
console.log(add1(1, 2));
console.log(add1('Hello', 'World'));
console.log(add1(true, false));
/**************************************************/
// Tuples
//Tuple types have the advantage that you can accurately describe the type of an array of mixed types
var tuple = [1, 'bob'];
var secondElement = tuple[1]; // secondElement now has type 'string'
// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.
// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.
// You can create a tuple using JavaScript's array syntax:
const failingResponse = ['Not Found', 404];
// but you will need to declare its type as a tuple.
const passingResponse = ['{}', 200];
// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).
// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.
if (passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log(localInfo);
}
const staff = [
    [0, 'Adankwo', 'adankwo.e@'],
    [1, 'Kanokwan', 'kanokwan.s@'],
    [2, 'Aneurin', 'aneurin.s@', 'Supervisor'],
];
const payStubs = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];
calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);
export {};
//
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions
// https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/
/**************************************************/

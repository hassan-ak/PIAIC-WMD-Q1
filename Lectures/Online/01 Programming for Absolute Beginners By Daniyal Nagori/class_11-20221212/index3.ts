/***********************************************/

//Note: All parameters are required
//Named function
function add1(x: number, y: number): number {
  return x + y;
}
//Anonymous function
let myAdd1 = function (x: number, y: number): number {
  return x + y;
};
//Anonymous function with explict type
let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
//type names dont matter
let myAdd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
//Lambda functions
let myAdd4 = (a: number, b: number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  //....
}

/***********************************************/

//Named function with optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
}

let result1 = buildName('Bob'); //ok
// let result2 = buildName('Bob', 'Adams', 'Sr.'); //error, too many parameters
var result3 = buildName('Bob', 'Adams'); //also ok

//anonymous function type with optional parameters
var buildName1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName?: string
): string {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
};

/***********************************************/

//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName11(firstName: string, lastName = 'Khan'): string {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
}

let result101 = buildName11('Bob'); //works correctly because last parameter is optional
// let result201 = buildName11('Bob', 'Adams', 'Sr.'); //error, too many parameters
let result301 = buildName11('Bob', 'Adams'); //correct

//anonymous function type with defult parameters
//(Note that the parameter type will be optional when used with defult value)
let buildName111: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName = 'Khan'
): string {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
};

/***********************************************/

function buildName201(firstName: string, ...restOfName: string[]) {
  //Named function with Rest parameters
  return firstName + ' ' + restOfName.join(' ');
}

var employeeName = buildName201('Joseph', 'Samuel', 'Lucas', 'MacKinzie');

//anonymous function type with Rest parameters
var buildName201Fun: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restOfName: string[]
) {
  return firstName + ' ' + restOfName.join(' ');
};

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list

/***********************************************/

function myCallBack(text: string) {
  console.log('inside myCallback ' + text);
}
function callingFunction(
  initialText: string,
  callback: (text: string) => void
) {
  callback(initialText);
}
callingFunction('myText', myCallBack);

/***********************************************/

//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
function add(arg1: string, arg2: string): string; //option 1
function add(arg1: number, arg2: number): number; //option 2
function add(arg1: boolean, arg2: boolean): boolean; //option 3
//this is not part of the overload list,
//so it has only three overloads
function add(arg1: any, arg2: any): any {
  return arg1 + arg2;
}

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add('Hello', 'World'));
console.log(add(true, false));

/***********************************************/

export {};

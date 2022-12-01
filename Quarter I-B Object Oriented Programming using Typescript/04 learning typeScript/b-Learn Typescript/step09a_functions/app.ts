// step09a_functions

/*********************************************************/
function greeter(fn: (a: string) => void) {
  fn('Hello, World');
}
function printToConsole(s: string) {
  console.log(s);
}
greeter(printToConsole);

/*********************************************************/
type GreetFunction = (a: string) => void;
function greeter1(fn: GreetFunction) {
  // ...
}

/*********************************************************/
// Call Signature
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
}

/*********************************************************/
// Construct Signatures
type SomeConstructor = {
  new (s: string): boolean;
};
function fn(ctor: SomeConstructor) {
  return new ctor('hello');
}

/*********************************************************/
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}

/*********************************************************/
// Generic Function
// Type Any
function firstElement(arr: any[]) {
  return arr[0];
}

// Type defined
function firstElement1<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
// s is of type 'string'
const s = firstElement1(['a', 'b', 'c']);
// n is of type 'number'
const n = firstElement1([1, 2, 3]);
// u is of type undefined
const u = firstElement1([]);

/*********************************************************/
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(['1', '2', '3'], (n) => parseInt(n));

/*********************************************************/
function add(x: number, y: number): number {
  //Named function
  return x + y;
}

/*********************************************************/
var myAdd1 = function (x: number, y: number): number {
  //Anonymous function
  return x + y;
};

/*********************************************************/
var myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  //Anonymous function with explict type
  return x + y;
};

/*********************************************************/
var myAdd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  //type names dont matter
  return x + y;
};

/*********************************************************/
var myAdd4 = (a: number, b: number) => a + b; //Lambda functions
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

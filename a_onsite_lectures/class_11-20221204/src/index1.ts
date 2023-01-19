/*-----------------------------------------------*/

/***************/
/*** Objects ***/
/***************/

/*-----------------------------------------------*/

// Type inferance
let student = {
  name: 'Hassan',
  id: 23,
};

// Type declaration
type Student1 = {
  name: string;
  id: number;
  enrolled?: boolean;
};
let student1: Student1 = {
  name: 'Hassan',
  id: 23,
};

// Interfaces
interface Student2 {
  name: string;
  id: number;
  enrolled?: boolean;
}
let student2: Student2 = {
  name: 'Hassan',
  id: 23,
  enrolled: true,
};

/*-----------------------------------------------*/

/*************************/
/*** Structural Typing ***/
/*************************/

/*-----------------------------------------------*/

interface Ball {
  diameter: number;
}
interface Sphere {
  diameter: number;
}
let ball: Ball = { diameter: 25 };
let sphere: Sphere = { diameter: 13 };
ball = sphere;
sphere = ball;

interface Tube {
  diameter: number;
  length: number;
}
let tube: Tube = { diameter: 23, length: 21 };
// Error
// Less property
// tube = ball
// Allowed
ball = tube;
sphere = tube;
// ball will have both the properties
// gives an error while compilation
// works fine with JS

let myType = { name: 'Hassan', id: 1 };
// re assigning
myType = { name: 'Zubair', id: 21 };
// Error
// new property added
// myType = {name:"Zubair",age:21}

// Index signature
let x: { id: number; [x: string]: any };
x = { id: 23, name: 'Hassan' };
x = { id: 23, age: '21' };
x = { id: 23, age: '21', name: 'Hassan' };

// Stale Bojects
let mytype2 = { id: 123, name: 'Ali' };
let mytype3 = { id: 123, fullName: 'Ali' };
myType = mytype2;
// Error
// missing property
// myType = mytype3
// Error
// Extra property
let test = { id: 115, name: 'Z', age: 21 };
mytype2 = test;
// mytype2 = { id: 115, name: 'Z', age: 21 };

/*-----------------------------------------------*/

/**********************/
/*** Nested Objects ***/
/**********************/

/*-----------------------------------------------*/

type Author = {
  firstName: string;
  lastName: string;
};
type Book = {
  author: Author;
  pages: number;
};
let book: Book = {
  author: {
    firstName: 'A',
    lastName: 'B',
  },
  pages: 298,
};

/*-----------------------------------------------*/

/**************************/
/*** Intersaction types ***/
/**************************/

/*-----------------------------------------------*/

interface Student3 {
  sName: string;
  id: number;
}
interface Teacher {
  tName: string;
  course: string;
}
type intersectedType = Student3 & Teacher;
let test1: intersectedType = {
  sName: 'A',
  id: 123,
  tName: 'B',
  course: 'AI',
};

/*-----------------------------------------------*/

/*******************************/
/*** any vs unknown vs never ***/
/*******************************/

/*-----------------------------------------------*/

// Any
let myval: any;
myval = true; // OK
myval = 42; // OK
myval = 'hey!'; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => {
  console.log('Hey again!');
}; // OK

//Unknown
let value: unknown;
value = true; // OK
value = 42; // OK
value = 'hey!'; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => {
  console.log('Hey again!');
}; // OK

// Assigning a value of type unknown to variables of other types
let val: unknown;
const val1: unknown = val; // OK
const val2: any = val; // OK
// Errors
// const val3: boolean = myV; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error

// Never
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
// Inferred return type is never
function fail() {
  return error('Something failed');
}
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

/*-----------------------------------------------*/

/*********************/
/*** stale Objects ***/
/*********************/

/*-----------------------------------------------*/
interface Ball1 {
  diameter: number;
}
interface Sphere1 {
  diameter: number;
  color: string;
}
let ball1: Ball1 = { diameter: 21 };
let sphere1: Sphere1 = { diameter: 15, color: 'Black' };
// ball1 = { diameter: 15, color: 'Black' }
ball1 = sphere1;
// console.log(ball1.color)
// sphere1 = ball1;

/*-----------------------------------------------*/

/*********************/
/*** stale Objects ***/
/*********************/

/*-----------------------------------------------*/
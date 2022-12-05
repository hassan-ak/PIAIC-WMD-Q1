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
let student1 = {
    name: 'Hassan',
    id: 23,
};
let student2 = {
    name: 'Hassan',
    id: 23,
    enrolled: true,
};
let ball = { diameter: 25 };
let sphere = { diameter: 13 };
ball = sphere;
sphere = ball;
let tube = { diameter: 23, length: 21 };
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
let x;
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
let book = {
    author: {
        firstName: 'A',
        lastName: 'B',
    },
    pages: 298,
};
let test1 = {
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
let myval;
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
let value;
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
let val;
const val1 = val; // OK
const val2 = val; // OK
// Errors
// const val3: boolean = myV; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error
// Never
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error('Something failed');
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
let ball1 = { diameter: 21 };
let sphere1 = { diameter: 15, color: 'Black' };
// ball1 = { diameter: 15, color: 'Black' }
ball1 = sphere1;
export {};
// console.log(ball1.color)
// sphere1 = ball1;
/*-----------------------------------------------*/
/*********************/
/*** stale Objects ***/
/*********************/
/*-----------------------------------------------*/ 

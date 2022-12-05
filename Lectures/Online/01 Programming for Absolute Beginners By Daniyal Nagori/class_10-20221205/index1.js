/****************************************************/
let myAge;
myAge = 16; //narrowing
console.log(myAge);
console.log(myAge.toString());
myAge = 'Dont Know';
console.log(myAge);
console.log(myAge.toLowerCase());
/****************************************************/
let newAge = Math.random() > 0.6 ? 'Khan' : 60;
if (newAge === 'Khan') {
    newAge.toUpperCase();
}
if (typeof newAge === 'string') {
    newAge.toUpperCase();
}
typeof newAge === 'string'
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
/****************************************************/
let age;
age = 90; //OK
age = 'died'; //OK
age = 'unknown'; //OK
//age = "living";//Error
/****************************************************/
let yourName = Math.random() > 0.6 ? 'Hira Khan' : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
yourName?.toUpperCase(); //OK
let data;
/****************************************************/
let teacher = {
    name: 'Zeeshan',
    experience: '10',
};
console.log(teacher.name);
console.log(teacher['experience']);
// Type Declaration
let student;
student = {
    name: 'Hira',
    age: 30,
};
console.log(student['name']);
console.log(student.age);
/****************************************************/
// anonymous
let teacher1 = {
    name: 'Zeeshan',
    exp: 10,
};
let student1 = {
    name: 'Hira',
    age: 30,
};
console.log(student1['name']);
console.log(student1.age);
let storeManager = {
    name: 'Bilal',
};
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let tube = { diameter: 12, length: 3 };
ball = tube;
/****************************************************/
let myType = { name: 'Zia', id: 1 };
myType = { id: 2, name: 'Tom' };
// myType = { id: 2, name_person: 'Tom' }; //Case 2a: Error, renamed or missing property
var x;
x = { id: 1, fullname: 'Zia' };
// myType = { id: 2, name: 'Tom', age: 22 }; //Case 3: Error, excess property
let myType2 = { id: 2, name: 'Tom' };
myType = myType2;
let myType3 = { id: 2, name_person: 'Tom' };
// myType = myType3; //Case 2: Error, renamed or missing property, rule same for stale and fresh object
/****************************************************/
var x;
var y = { id: 1, fullname: 'Zia' };
x = y;
var myType4 = { id: 2, name: 'Tom', age: 22 };
myType = myType4;
/****************************************************/
var x1;
// x1 = { foo: 1, baz: 2 };  // Error, excess property `baz`
var y1;
// y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`
var a;
var a1 = { foo: 1, baz: 2 };
a = a1;
var z;
var z1 = { foo: 1, baz: 2 };
z = z1;
export {};
/****************************************************/

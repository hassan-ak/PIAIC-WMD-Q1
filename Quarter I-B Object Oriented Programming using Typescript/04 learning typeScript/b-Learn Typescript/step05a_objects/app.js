"use strict";
// step05a_objects
/*--------------------------------------------------------------*/
// Can b Annaonumas
let person;
let person1;
let person2;
/*--------------------------------------------------------------*/
// Type inference
let teacher = {
    name: 'Zeeshan',
    experience: '10',
};
console.log(teacher.name);
console.log(teacher['experience']);
console.log(teacher.experience);
/*--------------------------------------------------------------*/
// Type Declaration
let student;
student = {
    name: 'Hira',
    age: 30,
};
console.log(student['name']);
console.log(student.name);
console.log(student.age);
let shapes1 = { shape: 'shape' };
let shapes2 = { shape: 'shape', xPos: 100 };
let shapes3 = { shape: 'shape', yPos: 100 };
let shapes4 = { shape: 'shape', xPos: 100, yPos: 100 };
let shapes5 = { prop: 't' };
let shapes6 = { prop: { name: 'Hassan', age: 30 } };
// Error
// shapes6.prop = { name: 'ALi', age: 26 };
shapes6.prop.name = 'Ali';
let writablePerson = {
    name: 'Person McPersonface',
    age: 42,
};
// works
let readonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
let a = { 1: 'Ali' };
let b = {
    hello: 123,
    length: 11,
};
let x = {
    contents: 'hello world',
};
let box1;
let box2;
let box3;
/*--------------------------------------------------------------*/

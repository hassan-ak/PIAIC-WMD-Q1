"use strict";
// step05e_intersection_types
let obj = {
    student_id: 3232,
    name: 'rita',
    Teacher_Id: 7873,
    teacher_name: 'seema',
};
console.log(obj.Teacher_Id);
console.log(obj.name);
let obj1;
let obj2;
let obj11 = { prop1: 'length', prop2: 'width' };
let obj22 = { prop1: 'length', prop2: 'width' };
let obj33 = { prop1: '', prop2: '', prop3: '' };
let obj44 = { prop1: '', prop2: '', prop3: '' };
obj33.prop3 = 'height';
console.log(obj33.prop3);
obj44.prop1 = 'length';
console.log(obj44.prop1);
console.log(obj33 == obj44); // false
console.log(typeof obj33 == typeof obj44); // true
console.log(typeof obj11 == typeof obj22); // true
/***********************************************/

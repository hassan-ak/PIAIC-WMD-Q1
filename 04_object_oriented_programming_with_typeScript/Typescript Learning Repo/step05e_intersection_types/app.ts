// step05e_intersection_types

/***********************************************/
interface Student {
  student_id: number;
  name: string;
}
interface Teacher {
  Teacher_Id: number;
  teacher_name: string;
}
type intersected_type = Student & Teacher;
let obj: intersected_type = {
  student_id: 3232,
  name: 'rita',
  Teacher_Id: 7873,
  teacher_name: 'seema',
};
console.log(obj.Teacher_Id);
console.log(obj.name);

/***********************************************/
interface A {
  feauA: string;
  feauB: string;
}
interface B {
  feauA: number;
  feauB: string;
}
type AB = A & B;
let obj1: AB;
let obj2: AB;
// Error, Type '20' is not assignable
// to type 'string & number'
// // obj1.feauA = 20;
// // console.log(obj1.feauA);
// // obj2.feauB = 'c';
// // console.log(obj2.feauB);

/***********************************************/
interface AA {
  prop1: String;
}
interface BB {
  prop2: String;
}
interface CC {
  prop3: String;
}
let obj11: AA & BB = { prop1: 'length', prop2: 'width' };
let obj22: BB & AA = { prop1: 'length', prop2: 'width' };
let obj33: AA & (BB & CC) = { prop1: '', prop2: '', prop3: '' };
let obj44: (AA & BB) & CC = { prop1: '', prop2: '', prop3: '' };
obj33.prop3 = 'height';
console.log(obj33.prop3);
obj44.prop1 = 'length';
console.log(obj44.prop1);
console.log(obj33 == obj44); // false
console.log(typeof obj33 == typeof obj44); // true
console.log(typeof obj11 == typeof obj22); // true

/***********************************************/

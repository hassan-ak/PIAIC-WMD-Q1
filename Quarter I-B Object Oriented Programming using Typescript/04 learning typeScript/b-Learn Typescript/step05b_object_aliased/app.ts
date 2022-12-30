// step05b_object_aliased

/*-------------------------------------------------------------------*/
// anonymous
let teacher: { name: string; exp: number } = {
  name: 'Zeeshan',
  exp: 10,
};

/*-------------------------------------------------------------------*/
// Aliased Object Type
type Student = {
  name: string;
  age?: number;
};
let student: Student = {
  name: 'Hira',
  age: 30,
};
console.log(student['name']);
console.log(student.age);

type Point = {
  x: number;
  y: number;
};
let xx: Point = { x: 100, y: 100 };

/*-------------------------------------------------------------------*/
// Interfaces
interface Manager {
  name: string;
  subordiates?: number;
}
let storeManager: Manager = {
  name: 'Bilal',
};

interface Point1 {
  x: number;
  y: number;
}
let yy: Point1 = { x: 100, y: 100 };

/*-------------------------------------------------------------------*/

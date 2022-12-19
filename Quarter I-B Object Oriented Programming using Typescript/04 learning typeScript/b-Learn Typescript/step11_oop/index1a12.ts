/******************/
/*** step11_oop ***/
/******************/

/************************************************/

/*+++++++++++++*/
/*++ Classes ++*/
/*+++++++++++++*/

/************************************************/

/*-----------------------------------*/
/*-- Relationships Between Classes --*/
/*-----------------------------------*/

/************************************************/
class Point1 {
  x = 0;
  y = 0;
}
class Point2 {
  x = 0;
  y = 0;
}
// OK
const p: Point1 = new Point2();

/************************************************/
class Person {
  name!: string;
  age!: number;
}
class Employee {
  name!: string;
  age!: number;
  salary!: number;
}
// OK
const pp: Person = new Employee();

/************************************************/
class Empty {}
function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}
// All OK!
fn(window);
fn({});
fn(fn);

/************************************************/

export {};

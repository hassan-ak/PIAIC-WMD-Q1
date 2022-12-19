/******************/
/*** step11_oop ***/
/******************/

/************************************************/

/*+++++++++++++*/
/*++ Classes ++*/
/*+++++++++++++*/

/************************************************/

/*--------------------------------*/
/*-- this at Runtime in Classes --*/
/*--------------------------------*/

/************************************************/
// this only depends on how it is called
class MyClass {
  name = 'MyClass';
  getName() {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: 'obj',
  getName: c.getName,
};
// Prints "obj", not "MyClass"
console.log(obj.getName());

/************************************************/

/*
    Arrow Functions
*/

/************************************************/
// dont want to lose context of this
// use arrow functions instead
class MyClass1 {
  name = 'MyClass1';
  getName = () => {
    return this.name;
  };
}
const cc = new MyClass1();
const g = cc.getName;
// Prints "MyClass1" instead of crashing
console.log(g());

/************************************************/

/*
    this parameters
*/

/************************************************/
// this is special in ts
// parameter with this eliminated when compiled

/************************************************/
// we can use this in method to skip using arrow function
class MyClass3 {
  name = 'MyClass3';
  getName(this: MyClass3) {
    return this.name;
  }
}
const c3 = new MyClass3();
// OK
c3.getName();
// Error, would crash
const g3 = c3.getName;
// console.log(g3());

/************************************************/

export {};

/******************/
/*** step11_oop ***/
/******************/

/************************************************/

/*+++++++++++++*/
/*++ Classes ++*/
/*+++++++++++++*/

/************************************************/

/*--------------------*/
/*-- Static Members --*/
/*--------------------*/

/************************************************/
// not associated with the instance
// accessed through class itself
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();

/************************************************/
// static members can be public, private or protected
class MyClass1 {
  private static x = 0;
}
// Error
// console.log(MyClass1.x);

/************************************************/
// can be inherited
class Base {
  static getGreeting() {
    return 'Hello world';
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}

/************************************************/

/*
    Special Static Names
*/

/************************************************/
class S {
  // cant use name,length, call
  // static name = 'S!';
}

/************************************************/

/*
    Why No Static Classes?
*/

/************************************************/
// Unnecessary "static" class
class MyStaticClass {
  static doSomething() {}
}
// Preferred (alternative 1)
function doSomething() {}
// Preferred (alternative 2)
const MyHelperObject = {
  dosomething() {},
};

/************************************************/

export {};

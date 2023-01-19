/****************/
/*** Class 18 ***/
/****************/
/************************************************/

/********************************/
/*** step13b_abstract_classes ***/
/********************************/

/************************************************/

//----
abstract class Base {
  foo(): number {
    return this.bar();
  }
  abstract bar(): number;
}
class E extends Base {
  // okay -- implements abstract method
  bar() {
    return 1;
  }
}
var t = new E();
t.foo();
// var obj1 = new Base();
// Error, cannnot create a instance of a Abstract class

//----
export {};

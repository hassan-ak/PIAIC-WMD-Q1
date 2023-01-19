/****************/
/*** Class 18 ***/
/****************/
/************************************************/
/********************************/
/*** step13b_abstract_classes ***/
/********************************/
/************************************************/
//----
class Base {
    foo() {
        return this.bar();
    }
}
class E extends Base {
    // okay -- implements abstract method
    bar() {
        return 1;
    }
}
var t = new E();
t.foo();
export {};

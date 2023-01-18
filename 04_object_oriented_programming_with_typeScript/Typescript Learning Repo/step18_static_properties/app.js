"use strict";
/********************************/
/*** step18_static_properties ***/
/********************************/
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************/
//---
// Please note that in each instance accesses this static value
// through prepending the name of the class.
// Similarly to prepending 'this.' in front of instance accesses,
// here we prepend 'MyClass.' in front of static accesses.
// Static values belog to the class (only one value) not the instances.
class MyClass {
    static printX() {
        console.log(MyClass.x);
    }
}
MyClass.x = 0;
console.log(MyClass.x);
MyClass.printX();

"use strict";
/********************************/
/*** step13b_abstract_classes ***/
/********************************/
Object.defineProperty(exports, "__esModule", { value: true });
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

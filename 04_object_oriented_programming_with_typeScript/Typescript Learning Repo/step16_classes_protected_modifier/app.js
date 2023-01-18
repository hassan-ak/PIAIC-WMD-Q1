"use strict";
/*****************************************/
/*** step16_classes_protected_modifier ***/
/*****************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************/
//---
// protected keyword allows subclasses to gain visibility into the
// parent class without exposing this API to other parts of the code.
//---
class ListString {
    constructor() {
        this.contents = [];
    }
    setElement(index, item) {
        this.contents[index] = item;
    }
}
//---
class StackString extends ListString {
    constructor() {
        super();
        this.currentIndex = 0;
    }
    push(item) {
        this.setElement(this.currentIndex, item);
        this.currentIndex++;
    }
}
//---
var stack = new StackString();

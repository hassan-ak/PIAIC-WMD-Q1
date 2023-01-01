/****************/
/*** Class 18 ***/
/****************/
/************************************************/
/*****************************************/
/*** step16_classes_protected_modifier ***/
/*****************************************/
/************************************************/
//---
// protected keyword allows subclasses to gain visibility into the
// parent class without exposing this API to other parts of the code.
//---
class ListString {
    contents;
    constructor() {
        this.contents = [];
    }
    setElement(index, item) {
        this.contents[index] = item;
    }
}
//---
class StackString extends ListString {
    currentIndex;
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
export {};

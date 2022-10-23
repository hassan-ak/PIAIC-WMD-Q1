"use strict";
//Generic Constraints
//You may sometimes want to write a generic that works only on a set of types where you have some knowledge about the capabilities
class MyObject {
}
class Container {
    constructor() {
        this._array = [];
    }
    add(item) {
        this._array.push(item);
        console.log(item.name);
    }
    print() {
        this._array.forEach((value) => console.log(value.name));
    }
}
// let c = new Container<string>();//Error
// let c1 = new Container<number>();//Error
class MyObject2 extends MyObject {
    doSomething() {
        console.log(this.name + ' did it');
    }
}
let obj = new MyObject2();
obj.name = 'Zeeshan';
let cont = new Container();
cont.add(obj);
cont.print();

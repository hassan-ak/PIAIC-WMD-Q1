"use strict";
//A class declaration creates two things:
// a type representing instances of the class and a constructor function.
//Because classes create types,
// you can use them in the same places you would be able to use interfaces.
class Point {
    constructor(xx, yy) {
        this.x = xx;
        this.y = yy;
    }
}
var point3d = { x: 1, y: 2, z: 3 };

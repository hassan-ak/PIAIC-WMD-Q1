"use strict";
//When working with classes and interfaces, it helps to keep in mind that a class has two types:
//the type of the static side and the type of the instance side.
class Clock {
    constructor(h, m) { }
}
var cs = Clock;
var newClock = new cs(7, 30);

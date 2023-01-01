"use strict";
/*
    # Chapter 8. Classes
*/
/***********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/*-------------------*/
/*-- Class Methods --*/
/*-------------------*/
/***********************************************************/
class Greeter {
    greet(name) {
        console.log(`${name}, do your stuff!`);
    }
}
new Greeter().greet('Miss Frizzle'); // Ok
// Error
// new Greeter().greet();
/***********************************************************/
class Greeted {
    constructor(message) {
        console.log(`As I always say: ${message}!`);
    }
}
new Greeted('take chances, make mistakes, get messy');

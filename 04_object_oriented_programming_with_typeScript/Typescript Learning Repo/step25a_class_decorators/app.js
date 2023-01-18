// /<reference path="node_modules\reflect-metadata\reflect-metadata.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// http://blog.wolksoftware.com/decorators-reflection-javascript-typescript
// http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-ii
// Decorators can be used to annotate a class, property, method or parameter. 
// To invoke a class decorator we need to prefix the method that we wish to decorate 
// with the @ character follow by the name of the decorator. 
/*
In the case of a decorator named log, the syntax will look as follows:
@logClass
class C {
    
    foo(n: number) {
        return n * 2;
    }
}
*/
// Before we can actually use @logClass we need to declare the class decorator somewhere in our application. 
// Let’s take a look to the log class decorator implementation.
function logClass(target) {
    // save a reference to the original constructor
    var original = target;
    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    // the new constructor behaviour
    var f = function (...args) {
        console.log("New: " + original.name);
        return construct(original, args);
    };
    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;
    // return new constructor (will override original)
    return f;
}
//apply the decorator to a class
let Person = class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
};
Person = __decorate([
    logClass
], Person);
var me = new Person("Zia", "Khan");
// New: Person
console.log(me instanceof Person);
// true

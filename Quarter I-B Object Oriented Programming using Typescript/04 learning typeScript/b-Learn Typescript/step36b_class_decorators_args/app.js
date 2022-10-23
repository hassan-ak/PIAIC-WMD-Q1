"use strict";
///<reference path="node_modules\reflect-metadata\reflect-metadata.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Configurable decorators
//http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-3
//Teaches how to allow developers to pass arguments to a decorator when it is consumed.
/*
function logClass(target: any) {
  // save a reference to the original constructor
  var original = target;
  // a utility function to generate instances of a class
  function construct(constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }
  // the new constructor behaviour
  var f : any = function (...args) {
    console.log("New: " + original.name);
    return construct(original, args);
  }
  // copy prototype so intanceof operator still works
  f.prototype = original.prototype;
  // return new constructor (will override original)
  return f;
}*/
function logClassWithArgs(filter) {
    return (target) => {
        // implement class decorator here, the class decorator
        // will have access to the decorator arguments (filter)
        // because they are  stored in a closure
        console.log(target, filter);
    };
}
//apply the decorator to a class
let Person = class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
};
Person = __decorate([
    logClassWithArgs({ when: { name: 'Zeeshan' } })
], Person);
var me = new Person('Zia', 'Khan');
// New: Person
console.log(me instanceof Person);
// true

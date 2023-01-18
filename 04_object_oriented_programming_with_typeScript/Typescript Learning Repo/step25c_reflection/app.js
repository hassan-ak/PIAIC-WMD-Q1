"use strict";
///<reference path="node_modules\reflect-metadata\reflect-metadata.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-4
//Teaches how to allow developers to pass arguments to a decorator when it is consumed.
require("reflect-metadata");
function logType(target, key) {
    var t = Reflect.getMetadata('design:type', target, key);
    console.log(`${key} type: ${t.name}`);
}
class Demo {
}
__decorate([
    logType // apply property decorator
], Demo.prototype, "attr1", void 0);

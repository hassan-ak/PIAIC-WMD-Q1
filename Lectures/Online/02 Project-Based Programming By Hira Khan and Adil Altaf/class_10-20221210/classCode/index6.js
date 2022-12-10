"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name = 'Alexander', ...nickNames) {
    console.log(`Hello ${name} aka ${nickNames}`);
}
hello('Imran', 'Alexander', 'Alex', 'Alexander the Great');

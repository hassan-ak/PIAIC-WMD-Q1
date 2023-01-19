"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name = 'Alexander') {
    console.log(`Hello ${name}`);
}
hello(); // Default
hello('Imran'); // Override

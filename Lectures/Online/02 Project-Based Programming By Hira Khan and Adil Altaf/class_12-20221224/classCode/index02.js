"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car2 {
    constructor() {
        this.color = 'Silver';
    }
    power(state) {
        if (state === true) {
            console.log('Starting engine.');
        }
        else {
            console.log('Shutting down engine.');
        }
    }
}
let myCar = new Car2();
myCar.power(true);

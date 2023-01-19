"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car3 {
    constructor(color, location) {
        this.color = color;
        this.location = location;
        this.color = color;
        this.location = location;
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
let myCar = new Car3('Black', 'California');
let hiraCar = new Car3('Red', 'Pakistan');
let alexanderCar = new Car3('Blue', 'Macedonia');
console.log(`Adil's car is ${myCar.color}`);
console.log(`Adil's car is ${myCar.location}`);
console.log(`Hira's car is ${hiraCar.color}`);
console.log(`Hira's car is ${hiraCar.location}`);
console.log(`Alexander's car is ${alexanderCar.color}`);
console.log(`Alexander's car is in ${alexanderCar.location}`);

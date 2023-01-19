"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car4 {
    constructor(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
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
let myCar = new Car4('Black', 'California', '1A');
let hiraCar = new Car4('Red', 'Pakistan', '1B');
let alexanderCar = new Car4('Blue', 'Macedonia', '1C');
console.log(alexanderCar.vin);
// Error
// alexanderCar.vin = 'alexanderVin';
console.log(alexanderCar.vin);

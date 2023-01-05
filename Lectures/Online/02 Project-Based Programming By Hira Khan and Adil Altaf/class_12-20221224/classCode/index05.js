"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car5 {
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
let myCar = new Car5('Black', 'California', '1A');
let hiraCar = new Car5('Red', 'Pakistan', '1B');
let alexanderCar;
alexanderCar = {
    vin: '1C',
    color: 'Red',
    location: 'Macedonia',
    power() { },
};

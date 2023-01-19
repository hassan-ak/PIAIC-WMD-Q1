"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car7 {
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
class Mercedes extends Car7 {
    constructor(color, location, vin, alloyWheels) {
        super(color, location, vin);
        this.adjustableSuspension = true;
        this.alloyWheels = alloyWheels;
    }
}
let myCar = new Mercedes('Silver', 'California', '1A', false);
myCar.power(true);

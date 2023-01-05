"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car8 {
    constructor(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    power(state) {
        if (state === true) {
            return 'Starting engine.';
        }
        else {
            return 'Shutting down engine.';
        }
    }
}
class Mercedes extends Car8 {
    constructor(color, location, vin, alloyWheels) {
        super(color, location, vin);
        this.adjustableSuspension = true;
        this.alloyWheels = alloyWheels;
    }
    power(state) {
        if (state === true) {
            console.log('Starting Mercedes engine');
            return 'Starting Mercedes engine.';
        }
        else {
            return 'Shutting down Mercedes engine.';
        }
    }
}
let myCar = new Mercedes('Silver', 'California', '1A', false);
myCar.power(true);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car9 {
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
class Mercedes extends Car9 {
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
let myMercedes = new Mercedes('Silver', 'California', 1, false);
let myCar = new Car9('Black', 'Pakistan', 2);
myCar.power(true);

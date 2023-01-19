"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car6 {
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
class Mercedes extends Car6 {
    constructor() {
        super(...arguments);
        this.alloyWheels = true;
        this.adjustableSuspension = true;
    }
}
let myCar = new Mercedes('Silver', 'California', '1A');
myCar.power(true);

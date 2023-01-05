"use strict";
// Assignment
Object.defineProperty(exports, "__esModule", { value: true });
// Base Class (Vehicle)
class Vehicle {
    constructor(color, height, width, length, weight) {
        this.color = color;
        this.height = height;
        this.width = width;
        this.length = length;
        this.weight = weight;
    }
}
// Mercedes class Class
class Mercedes extends Vehicle {
    constructor(make, model, color, wheel, height, width, length, weight) {
        super(color, height, width, length, weight);
        this.make = make;
        this.model = model;
        this.wheel = wheel;
    }
    power(cond) {
        return cond ? 'Car is turned on' : 'Car is turned off';
    }
    speed(s) {
        return `Car is running at ${s} Km/h`;
    }
}
// Subclasses
class SUV extends Mercedes {
    constructor(make, model, color, wheel, height, width, length, weight, modelClass, fuel, doors) {
        super(make, model, color, wheel, height, width, length, weight);
        this.modelClass = modelClass;
        this.fuel = fuel;
        this.doors = doors;
    }
}
class Core extends Mercedes {
    constructor(make, model, color, wheel, height, width, length, weight, modelClass, fuel, doors) {
        super(make, model, color, wheel, height, width, length, weight);
        this.modelClass = modelClass;
        this.fuel = fuel;
        this.doors = doors;
    }
}
class Coupe extends Mercedes {
    constructor(make, model, color, wheel, height, width, length, weight, modelClass, fuel, doors) {
        super(make, model, color, wheel, height, width, length, weight);
        this.modelClass = modelClass;
        this.fuel = fuel;
        this.doors = doors;
    }
}
class Roadster extends Mercedes {
    constructor(make, model, color, wheel, height, width, length, weight, modelClass, fuel, doors) {
        super(make, model, color, wheel, height, width, length, weight);
        this.modelClass = modelClass;
        this.fuel = fuel;
        this.doors = doors;
    }
}
// Example
let Car1 = new SUV('Mercedes-Benz', '2024', 'grey', 4, 1680, 1940, 4860, 3195, 'AMG 43 4Matic', 'Electric', 4);

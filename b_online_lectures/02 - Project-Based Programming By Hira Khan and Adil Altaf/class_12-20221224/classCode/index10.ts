// Assignment

// Base Class (Vehicle)
class Vehicle {
  color: string;
  height: number;
  width: number;
  length: number;
  weight: number;
  constructor(
    color: string,
    height: number,
    width: number,
    length: number,
    weight: number
  ) {
    this.color = color;
    this.height = height;
    this.width = width;
    this.length = length;
    this.weight = weight;
  }
}

// Mercedes class Class
class Mercedes extends Vehicle {
  make: string;
  model: string;
  wheel: number;
  constructor(
    make: string,
    model: string,
    color: string,
    wheel: number,
    height: number,
    width: number,
    length: number,
    weight: number
  ) {
    super(color, height, width, length, weight);
    this.make = make;
    this.model = model;
    this.wheel = wheel;
  }
  power(cond: boolean): string {
    return cond ? 'Car is turned on' : 'Car is turned off';
  }
  speed(s: number): string {
    return `Car is running at ${s} Km/h`;
  }
}

// Subclasses
class SUV extends Mercedes {
  modelClass: string;
  fuel: string;
  doors: number;
  constructor(
    make: string,
    model: string,
    color: string,
    wheel: number,
    height: number,
    width: number,
    length: number,
    weight: number,
    modelClass: string,
    fuel: string,
    doors: number
  ) {
    super(make, model, color, wheel, height, width, length, weight);
    this.modelClass = modelClass;
    this.fuel = fuel;
    this.doors = doors;
  }
}
class Core extends Mercedes {
  modelClass: string;
  fuel: string;
  doors: number;
  constructor(
    make: string,
    model: string,
    color: string,
    wheel: number,
    height: number,
    width: number,
    length: number,
    weight: number,
    modelClass: string,
    fuel: string,
    doors: number
  ) {
    super(make, model, color, wheel, height, width, length, weight);
    this.modelClass = modelClass;
    this.fuel = fuel;
    this.doors = doors;
  }
}
class Coupe extends Mercedes {
  modelClass: string;
  fuel: string;
  doors: number;
  constructor(
    make: string,
    model: string,
    color: string,
    wheel: number,
    height: number,
    width: number,
    length: number,
    weight: number,
    modelClass: string,
    fuel: string,
    doors: number
  ) {
    super(make, model, color, wheel, height, width, length, weight);
    this.modelClass = modelClass;
    this.fuel = fuel;
    this.doors = doors;
  }
}
class Roadster extends Mercedes {
  modelClass: string;
  fuel: string;
  doors: number;
  constructor(
    make: string,
    model: string,
    color: string,
    wheel: number,
    height: number,
    width: number,
    length: number,
    weight: number,
    modelClass: string,
    fuel: string,
    doors: number
  ) {
    super(make, model, color, wheel, height, width, length, weight);
    this.modelClass = modelClass;
    this.fuel = fuel;
    this.doors = doors;
  }
}

// Example
let Car1 = new SUV(
  'Mercedes-Benz',
  '2024',
  'grey',
  4,
  1680,
  1940,
  4860,
  3195,
  'AMG 43 4Matic',
  'Electric',
  4
);

export {};

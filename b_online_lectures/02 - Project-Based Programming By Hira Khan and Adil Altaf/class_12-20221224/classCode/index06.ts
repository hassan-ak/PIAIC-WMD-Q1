class Car6 {
  readonly vin: string;
  color: string;
  location: string;
  owner?: string;
  constructor(color: string, location: string, vin: string) {
    this.color = color;
    this.location = location;
    this.vin = vin;
  }
  power(state: boolean) {
    if (state === true) {
      console.log('Starting engine.');
    } else {
      console.log('Shutting down engine.');
    }
  }
}

class Mercedes extends Car6 {
  alloyWheels = true;
  adjustableSuspension = true;
}

let myCar = new Mercedes('Silver', 'California', '1A');

myCar.power(true);

export {};

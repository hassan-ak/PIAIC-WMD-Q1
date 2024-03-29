class Car7 {
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

class Mercedes extends Car7 {
  alloyWheels: boolean;
  adjustableSuspension = true;
  constructor(
    color: string,
    location: string,
    vin: string,
    alloyWheels: boolean
  ) {
    super(color, location, vin);
    this.alloyWheels = alloyWheels;
  }
}

let myCar = new Mercedes('Silver', 'California', '1A', false);

myCar.power(true);

export {};

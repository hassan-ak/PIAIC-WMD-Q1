class Car8 {
  readonly vin: string;
  color: string;
  location: string;
  owner?: string;
  constructor(color: string, location: string, vin: string) {
    this.color = color;
    this.location = location;
    this.vin = vin;
  }
  power(state: boolean): string {
    if (state === true) {
      return 'Starting engine.';
    } else {
      return 'Shutting down engine.';
    }
  }
}

class Mercedes extends Car8 {
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

  power(state: boolean): string {
    if (state === true) {
      console.log('Starting Mercedes engine');
      return 'Starting Mercedes engine.';
    } else {
      return 'Shutting down Mercedes engine.';
    }
  }
}

let myCar = new Mercedes('Silver', 'California', '1A', false);

myCar.power(true);

export {};

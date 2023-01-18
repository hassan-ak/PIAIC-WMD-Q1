/*
    # Chapter 8. Classes
*/
/***********************************************************/

/*----------------------*/
/*-- Class Properties --*/
/*----------------------*/

/***********************************************************/
class FieldTrip {
  destination: string;
  constructor(destination: string) {
    this.destination = destination; // Ok
    console.log(`We're going to ${this.destination}!`);
    // Error
    // this.nonexistent = destination;
  }
}
const trip = new FieldTrip('planetarium');
trip.destination; // Ok
// Error
// trip.nonexistent;

/***********************************************************/

/***************************/
/*** Function Properties ***/
/***************************/

/***********************************************************/
class WithMethod {
  myMethod() {}
}
new WithMethod().myMethod === new WithMethod().myMethod; // true

/***********************************************************/
class WithProperty {
  myProperty!: () => {};
}
new WithProperty().myProperty === new WithProperty().myProperty; // false

/***********************************************************/
class WithPropertyParameters {
  takesParameters = (input: boolean) => (input ? 'Yes' : 'No');
}
const instance = new WithPropertyParameters();
instance.takesParameters(true); // Ok
// Error
// instance.takesParameters(123);

/***********************************************************/

/*******************************/
/*** Initialization Checking ***/
/*******************************/

/***********************************************************/
class WithValue {
  immediate = 0; // Ok
  later: number; // Ok (set in the constructor)
  mayBeUndefined: number | undefined; // Ok (allowed to be undefined)
  // unused: number;
  constructor() {
    this.later = 1;
  }
}
/***********************************************************/
class MissingInitializer {
  property!: string;
}
new MissingInitializer().property.length;

/***********************************************************/

/*+++++++++++++++++++++++++++++++++++++*/
/*+++ Definitely assigned properties ++*/
/*+++++++++++++++++++++++++++++++++++++*/

/***********************************************************/
class ActivitiesQueue {
  pending!: string[]; // Ok
  initialize(pending: string[]) {
    this.pending = pending;
  }
  next() {
    return this.pending.pop();
  }
}
const activities = new ActivitiesQueue();
activities.initialize(['eat', 'sleep', 'learn']);
activities.next();

/***********************************************************/

/***************************/
/*** Optional Properties ***/
/***************************/

/***********************************************************/
class MissingInitializer1 {
  property?: string;
}
new MissingInitializer1().property?.length; // Ok
// Error
// new MissingInitializer1().property.length;

/***********************************************************/

/****************************/
/*** Read-Only Properties ***/
/****************************/

/***********************************************************/
class Quote {
  readonly text: string;
  constructor(text: string) {
    this.text = text;
  }
  emphasize() {
    // Error
    // this.text += "!";
  }
}
const quote = new Quote(
  'There is a brilliant child locked inside every student.'
);
// Quote.text = "Ha!";

/***********************************************************/
class RandomQuote {
  readonly explicit: string = 'Home is the nicest word there is.';
  readonly implicit = 'Home is the nicest word there is.';
  constructor() {
    if (Math.random() > 0.5) {
      this.explicit = "We start learning the minute we're born."; // Ok;
      // Error
      // this.implicit = "We start learning the minute we're born.";
    }
  }
}
const quote1 = new RandomQuote();
quote1.explicit; // Type: string
quote1.implicit; // Type: "Home is the nicest word there is."

/***********************************************************/

export {};

"use strict";
/*
    # Chapter 8. Classes
*/
/***********************************************************/
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
/*----------------------*/
/*-- Class Properties --*/
/*----------------------*/
/***********************************************************/
class FieldTrip {
    constructor(destination) {
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
    myMethod() { }
}
new WithMethod().myMethod === new WithMethod().myMethod; // true
/***********************************************************/
class WithProperty {
}
new WithProperty().myProperty === new WithProperty().myProperty; // false
/***********************************************************/
class WithPropertyParameters {
    constructor() {
        this.takesParameters = (input) => (input ? 'Yes' : 'No');
    }
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
    // unused: number;
    constructor() {
        this.immediate = 0; // Ok
        this.later = 1;
    }
}
/***********************************************************/
class MissingInitializer {
}
new MissingInitializer().property.length;
/***********************************************************/
/*+++++++++++++++++++++++++++++++++++++*/
/*+++ Definitely assigned properties ++*/
/*+++++++++++++++++++++++++++++++++++++*/
/***********************************************************/
class ActivitiesQueue {
    initialize(pending) {
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
}
(_a = new MissingInitializer1().property) === null || _a === void 0 ? void 0 : _a.length; // Ok
// Error
// new MissingInitializer1().property.length;
/***********************************************************/
/****************************/
/*** Read-Only Properties ***/
/****************************/
/***********************************************************/
class Quote {
    constructor(text) {
        this.text = text;
    }
    emphasize() {
        // Error
        // this.text += "!";
    }
}
const quote = new Quote('There is a brilliant child locked inside every student.');
// Quote.text = "Ha!";
/***********************************************************/
class RandomQuote {
    constructor() {
        this.explicit = 'Home is the nicest word there is.';
        this.implicit = 'Home is the nicest word there is.';
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

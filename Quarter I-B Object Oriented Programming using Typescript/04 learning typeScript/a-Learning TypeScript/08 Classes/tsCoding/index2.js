"use strict";
/*
    Chapter 8. Classes
    Class Properties
*/
class FieldTrip {
    constructor(destination) {
        this.destination = destination; // Ok
        console.log(`We're going to ${this.destination}!`);
        // this.nonexistent = destination;
        // ~~~~~~~~~~~
        // Error: Property 'nonexistent' does not exist on type 'FieldTrip'.
    }
}
const trip = new FieldTrip('planetarium');
trip.destination; // Ok
// trip.nonexistent;
// ~~~~~~~~~~~
// Error: Property 'nonexistent' does not exist on type 'FieldTrip'.

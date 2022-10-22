/*
    Chapter 8. Classes
    Class Properties
*/
//  Initialization Checking
//      Definitely assigned properties

class ActivitiesQueue {
  pending!: string[]; // Ok
  initialize(pending1: string[]) {
    this.pending = pending1;
  }
  next() {
    return this.pending.pop();
  }
}
const activities = new ActivitiesQueue();
activities.initialize(['eat', 'sleep', 'learn']);
activities.next();

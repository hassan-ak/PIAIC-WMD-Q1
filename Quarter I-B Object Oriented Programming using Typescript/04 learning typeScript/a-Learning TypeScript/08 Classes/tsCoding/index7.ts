/*
    Chapter 8. Classes
    Class Properties
*/
//  Optional Properties

class MissingInitializer1 {
  property?: string;
}
new MissingInitializer1().property?.length; // Ok
// new MissingInitializer1().property.length;
// Error: Object is possibly 'undefined'.

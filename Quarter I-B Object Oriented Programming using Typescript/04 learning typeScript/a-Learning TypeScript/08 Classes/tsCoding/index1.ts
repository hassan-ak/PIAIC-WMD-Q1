/*
    Chapter 8. Classes
    Class Methods
*/

class Greeter {
  greet(name: string) {
    console.log(`${name}, do your stuff!`);
  }
}
new Greeter().greet('Miss Frizzle'); // Ok
// new Greeter().greet();
// ~~~~~
// Error: Expected 1 arguments, but got 0.

class Greeted {
  constructor(message: string) {
    console.log(`As I always say: ${message}!`);
  }
}
new Greeted('take chances, make mistakes, get messy');
// new Greeted();
// Error: Expected 1 arguments, but got 0.

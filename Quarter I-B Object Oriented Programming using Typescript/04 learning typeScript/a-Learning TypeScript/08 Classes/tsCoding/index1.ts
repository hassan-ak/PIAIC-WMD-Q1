/*
    # Chapter 8. Classes
*/
/***********************************************************/

/*-------------------*/
/*-- Class Methods --*/
/*-------------------*/

/***********************************************************/
class Greeter {
  greet(name: string) {
    console.log(`${name}, do your stuff!`);
  }
}
new Greeter().greet('Miss Frizzle'); // Ok
// Error
// new Greeter().greet();

/***********************************************************/
class Greeted {
  constructor(message: string) {
    console.log(`As I always say: ${message}!`);
  }
}
new Greeted('take chances, make mistakes, get messy');
// Error
// new Greeted();

/***********************************************************/

export {};

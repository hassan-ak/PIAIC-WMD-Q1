/***************************************/
/*** step14_classes_private_modifier ***/
/***************************************/

/************************************************/

//---
//In TypeScript, each member is public by default.
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(meters: number) {
    alert(this.name + ' moved ' + meters + 'm.');
  }
}
var a = new Animal('cat');
// Error
// a.name;
console.log(a);

//----
export {};

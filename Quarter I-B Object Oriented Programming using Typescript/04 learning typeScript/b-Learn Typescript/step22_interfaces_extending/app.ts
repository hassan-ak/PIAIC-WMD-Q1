/***********************************/
/*** step22_interfaces_extending ***/
/***********************************/

/************************************************/
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
var square = <Square>{};
square.color = 'blue';
square.sideLength = 10;
// Error
// square.a = 5;

/************************************************/
//An interface can extend multiple interfaces, creating a combination of all of the interfaces:
interface PenStroke {
  penWidth: number;
}
interface Square1 extends Shape, PenStroke {
  sideLength: number;
}
//Alternative syntax for casting
var square1 = {} as Square1;
square1.color = 'blue';
square1.sideLength = 10;
square1.penWidth = 5.0;

export {};

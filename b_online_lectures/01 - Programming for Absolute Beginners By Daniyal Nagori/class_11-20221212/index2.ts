/***********************************************/

let myname: unknown = 'Zia';
console.log((myname as string).length);
console.log((<string>myname).length);

/***********************************************/

enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
var c: Color = Color.Green;
enum Color1 {
  Red = 1,
  Green,
  Blue,
}
var colorName: string = Color1[2];
console.log(colorName);
enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
var colorIndex = Color2['Blue'];
console.log(colorIndex);

/***********************************************/

const enum Color101 {
  Red,
  Green,
  Blue,
} //starts with 0
var c1: Color101 = Color101.Green;
const enum Color102 {
  Red = 1,
  Green,
  Blue,
}
// var colorName: string = Color101[2]; //Not allowed with const enums
console.log(colorName);
const enum Color103 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
var colorIndex1 = Color103['Blue'];
console.log(colorIndex);

/***********************************************/

let array1: number[] = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax
let array2: Array<number> = [1, 2, 3]; //alternative correct syntax
let array3: number[] = []; //correct syntax to define an empty array
//let array4: number[] = new number[2](); //error
let array5: number[] = [];
array5.push(1234); //dynamically adding

/***********************************************/

/************************************************/
/*** step12a_class_structural_typing_question ***/
/************************************************/

/************************************************/

/*+++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++ TypeScript: Understanding structural typing ++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++*/

/************************************************/
interface Person {
  name: string;
  age: number;
}
interface Alien {
  name: string;
  age: number;
  planet: string;
}
const alien: Alien = {
  name: 'ET',
  age: 5,
  planet: 'Mars',
};
const person: Person = alien;

/************************************************/

export {};

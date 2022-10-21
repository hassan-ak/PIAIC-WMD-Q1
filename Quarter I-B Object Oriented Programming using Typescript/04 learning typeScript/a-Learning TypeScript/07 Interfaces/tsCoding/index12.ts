/*
    Chapter 7. Interfaces
    Interface Extensions
*/
//   Extending Multiple Interfaces

interface GivesNumber {
  giveNumber(): number;
}
interface GivesString {
  giveString(): string;
}
interface GivesBothAndEither extends GivesNumber, GivesString {
  giveEither(): number | string;
}
function useGivesBoth(instance: GivesBothAndEither) {
  instance.giveEither(); // Type: number | string
  instance.giveNumber(); // Type: number
  instance.giveString(); // Type: string
}

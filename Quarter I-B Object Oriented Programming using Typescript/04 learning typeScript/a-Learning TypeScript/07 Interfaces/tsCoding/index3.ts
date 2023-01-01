/*
    # Chapter 7. Interfaces
*/
/***********************************************************/

/*--------------------------*/
/*-- Interface Extensions --*/
/*--------------------------*/

/***********************************************************/
interface Writing {
  title: string;
}

interface Novella extends Writing {
  pages: number;
}
// Ok
let myNovella: Novella = {
  pages: 195,
  title: 'Ethan Frome',
};
// Error
// let missingPages: Novella = {
// title: "The Awakening",
// }
let extraProperty: Novella = {
  pages: 300,
  // Error
  // strategy: "baseline",
  // style: "Naturalism"
  title: '',
};

/***********************************************************/

/*****************************/
/*** Overridden Properties ***/
/*****************************/

/***********************************************************/
interface WithNullableName {
  name: string | null;
}
interface WithNonNullableName extends WithNullableName {
  name: string;
}
// Error
// interface WithNumericName extends WithNullableName {
// name: number | string;
// }

/***********************************************************/

/*************************************/
/*** Extending Multiple Interfaces ***/
/*************************************/

/***********************************************************/
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

/***********************************************************/
export {};

/*
    Chapter 4. Objects
*/

/***********************************************************/

/*------------------------*/
/*-- Intersection Types --*/
/*------------------------*/

/***********************************************************/
type Artwork = {
  genre: string;
  name: string;
};
type Writing = {
  pages: number;
  name: string;
};
type WrittenArt = Artwork & Writing;

/***********************************************************/
type ShortPoem = { author: string } & (
  | { kigo: string; type: 'haiku' }
  | { meter: number; type: 'villanelle' }
);
const morningGlory: ShortPoem = {
  author: 'Fukuda Chiyo-ni',
  kigo: 'Morning Glory',
  type: 'haiku',
};
// Error
// // const oneArt: ShortPoem = {
// //   author: 'Elizabeth Bishop',
// //   type: 'villanelle',
// // };

/***********************************************************/

/*************************************/
/*** Dangers of Intersection Types ***/
/*************************************/

/***********************************************************/
// Long assignability errors
type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string; type: 'haiku' };
type Villanelle = ShortPoemBase & { meter: number; type: 'villanelle' };
type ShortPoem1 = Haiku | Villanelle;
// Error
// // const oneArt: ShortPoem = {
// //   author: "Elizabeth Bishop",
// //   type: "villanelle",
// // };

/***********************************************************/
// never
type NotPossible = number & string;
// Error
// // let notNumber: NotPossible = 0;
// // let notString: never = '';

/***********************************************************/

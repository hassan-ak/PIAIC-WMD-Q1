// *** Objects *** //

//// *** Intersection Types *** ////

type Artwork = {
  genre: string;
  name: string;
};
type Writing = {
  pages: number;
  name: string;
};
type WrittenArt = Artwork & Writing;
// Equivalent to:
// {
// genre: string;
// name: string;
// pages: number;
// }

type ShortPoem = { author: string } & (
  | { kigo: string; type: 'haiku' }
  | { meter: number; type: 'villanelle' }
);
// Ok
const morningGlory: ShortPoem = {
  author: 'Fukuda Chiyo-ni',
  kigo: 'Morning Glory',
  type: 'haiku',
};
// const oneArt: ShortPoem = {
//   author: 'Elizabeth Bishop',
//   type: 'villanelle',
// };
// // Error: Type '{ author: string; type: "villanelle"; }'
// // is not assignable to type 'ShortPoem'.
// // Type '{ author: string; type: "villanelle"; }' is not assignable to
// // type '{ author: string; } & { meter: number; type: "villanelle"; }'.
// // Property 'meter' is missing in type '{ author: string; type: "villanelle"; }'
// // but required in type '{ meter: number; type: "villanelle"; }'.

/*
Dangers of Intersection Types
Long assignability errors
*/
type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string; type: 'haiku' };
type Villanelle = ShortPoemBase & { meter: number; type: 'villanelle' };
type ShortPoem1 = Haiku | Villanelle;
// const oneArt: ShortPoem1 = {
//   author: 'Elizabeth Bishop',
//   type: 'villanelle',
// };
// Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'ShortPoem'.
// Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'Villanelle'.
// Property 'meter' is missing in type
// '{ author: string; type: "villanelle"; }'
// but required in type '{ meter: number; type: "villanelle"; }'.
/*
    never
*/
type NotPossible = number & string;
// Type: never

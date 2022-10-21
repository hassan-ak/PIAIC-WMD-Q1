/*
    Chapter 7. Interfaces
    Interface Extensions
*/
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
// let missingPages: Novella = {
//   // ~~~~~~~~~~~~
//   // Error: Property 'pages' is missing in type
//   // '{ title: string; }' but required in type 'Novella'.
//   title: 'The Awakening',
// };
// let extraProperty: Novella = {
//   // ~~~~~~~~~~~~~
//   // Error: Type '{ genre: string; name: string; strategy: string; }'
//   // is not assignable to type 'Novella'.
//   // Object literal may only specify known properties,
//   // and 'genre' does not exist in type 'Novella'.
//   pages: 300,
//   strategy: 'baseline',
//   style: 'Naturalism',
// };

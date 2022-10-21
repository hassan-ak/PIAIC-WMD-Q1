/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Nested Interfaces

interface Novel {
  author: {
    name: string;
  };
  setting: Setting;
}
interface Setting {
  place: string;
  year: number;
}
let myNovel: Novel;
// Ok
myNovel = {
  author: {
    name: 'Jane Austen',
  },
  setting: {
    place: 'England',
    year: 1812,
  },
};
// myNovel = {
//   author: {
//     name: 'Emily Brontë',
//   },
//   setting: {
//     place: 'West Yorkshire',
//   },
//   // Error: Property 'year' is missing in type
//   // '{ place: string; }' but required in type 'Setting'.
// };

/*
    Chapter 5. Functions
    Function Types
*/
// Parameter Type Inferences

let singer: (song: string) => string;
singer = function (song) {
  // Type of song: string
  return `Singing: ${song.toUpperCase()}!`; // Ok
};

const songs1 = ['Call Me', 'Jolene', 'The Chain'];
// song: string
// index: number
songs1.forEach((song, index) => {
  console.log(`${song} is at index ${index}`);
});

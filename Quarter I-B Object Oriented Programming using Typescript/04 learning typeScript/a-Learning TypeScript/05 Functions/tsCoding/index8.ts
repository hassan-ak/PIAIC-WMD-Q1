/*
    Chapter 5. Functions
    Function Types
*/

let nothingInGivesString: () => string;

let inputAndOutput: (songs: string[], count?: number) => number;

const songs = ['Juice', 'Shake It Off', "What's Up"];
function getSongAt(index: number) {
  return `${songs[index]}`;
}
function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(getSongAt(i));
  }
}

runOnSongs(getSongAt); // Ok
function logSong(song: string) {
  return `${song}`;
}
// runOnSongs(logSong);
// ~~~~~~~
// Error: Argument of type '(song: string) => string' is not
// assignable to parameter of type '(index: number) => string'.
// Types of parameters 'song' and 'index' are incompatible.
// Type 'number' is not assignable to type 'string'.

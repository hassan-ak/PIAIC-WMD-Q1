/*
    # Chapter 5. Functions
*/

/***********************************************************/

/*--------------------*/
/*-- Function Types --*/
/*--------------------*/

/***********************************************************/
let nothingInGivesString: () => string;

/***********************************************************/
let inputAndOutput: (songs: string[], count?: number) => number;

/***********************************************************/
const songs = ['Juice', 'Shake It Off', "What's Up"];
function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(getSongAt(i));
  }
}
function getSongAt(index: number) {
  return `${songs[index]}`;
}
// Ok
runOnSongs(getSongAt);
function logSong(song: string) {
  return `${song}`;
}
// Error
// // runOnSongs(logSong);

/***********************************************************/

/*********************************/
/*** Function Type Parentheses ***/
/*********************************/

/***********************************************************/
// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;

/***********************************************************/
// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;

/***********************************************************/

/*********************************/
/*** Parameter Type Inferences ***/
/*********************************/

/***********************************************************/
let singer: (song: string) => string;
singer = function (song) {
  // Type of song: string
  return `Singing: ${song.toUpperCase()}!`; // Ok
};

/***********************************************************/
const songs1 = ['Call Me', 1, 'The Chain'];
songs1.forEach((song, index) => {
  console.log(`${song} is at index ${index}`);
});

/***********************************************************/

/*****************************/
/*** Function Type Aliases ***/
/*****************************/

/***********************************************************/
type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;
// Ok
stringToNumber = (input) => input.length;
// Error
// // stringToNumber = (input) => input.toUpperCase();

/***********************************************************/
type NumberToString = (input: number) => string;
function usesNumberToString(numberToString: NumberToString) {
  console.log(`The string is: ${numberToString(1234)}`);
}
// Ok
usesNumberToString((input) => `${input}! Hooray!`);
// Error
// // usesNumberToString((input) => input * 2);

/***********************************************************/

export {};

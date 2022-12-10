/*
    # Chapter 5. Functions
*/

/***********************************************************/

/*-------------------------*/
/*-- Function Parameters --*/
/*-------------------------*/

/***********************************************************/
function sing(song: any) {
  console.log(`Singing: ${song}!`);
}

/***********************************************************/
function sing1(song: string) {
  console.log(`Singing: ${song}!`);
}

/***********************************************************/

/***************************/
/*** Required Parameters ***/
/***************************/

/***********************************************************/
function singTwo(first: string, second: string) {
  console.log(`${first} / ${second}`);
}
// Error
// // singTwo('Ball and Chain');
// Ok
singTwo('I Will Survive', 'Higher Love');
// Error
// // singTwo('Go Your Own Way', 'The Chain', 'Dreams');

/***********************************************************/

/***************************/
/*** Optional Parameters ***/
/***************************/

/***********************************************************/
function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`);
  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}
// Ok
announceSong('Greensleeves');
// Ok
announceSong('Greensleeves', undefined);
// Ok
announceSong('Chandelier', 'Sia');

/***********************************************************/
function announceSongBy(song: string, singer: string | undefined) {
  /* ... */
}
// Error
// // announceSongBy('Greensleeves');
// OK
announceSongBy('Greensleeves', undefined);
// OK
announceSongBy('Chandelier', 'Sia');

/***********************************************************/
// Error
// // function announceSinger(singer?: string, song: string) {}

/***********************************************************/

/**************************/
/*** Default Parameters ***/
/**************************/

/***********************************************************/
function rateSong(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 stars!`);
}
// Ok
rateSong('Photograph');
// Ok
rateSong('Set Fire to the Rain', 5);
// Ok
rateSong('Set Fire to the Rain', undefined);
// Error
// // rateSong('At Last!', '100');

/***********************************************************/

/***********************/
/*** Rest Parameters ***/
/***********************/

/***********************************************************/
function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}
// Ok
singAllTheSongs('Alicia Keys');
// Ok
singAllTheSongs('Lady Gaga', 'Bad Romance', 'Just Dance', 'Poker Face');
// Error
// // singAllTheSongs('Ella Fitzgerald', 2000);

/***********************************************************/

export {};

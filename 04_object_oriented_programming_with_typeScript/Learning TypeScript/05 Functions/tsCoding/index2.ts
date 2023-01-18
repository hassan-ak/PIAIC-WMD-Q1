/*
    # Chapter 5. Functions
*/

/***********************************************************/

/*------------------*/
/*-- Return Types --*/
/*------------------*/

/***********************************************************/
function singSongs(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }
  return songs.length;
}

/***********************************************************/
function getSongAt(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}

/***********************************************************/

/*****************************/
/*** Explicit Return Types ***/
/*****************************/

/***********************************************************/
function singSongsRecursive(songs: string[], count = 0): number {
  return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}

/***********************************************************/
const singSongsRecursive1 = (songs: string[], count = 0): number =>
  songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;

/***********************************************************/
function getSongRecordingDate(song: string): Date | undefined {
  switch (song) {
    case 'Strange Fruit':
      // Ok
      return new Date('April 20, 1939');
    case 'Greensleeves':
    // Error
    // //  return 'unknown';
    default:
      // Ok
      return undefined;
  }
}

/***********************************************************/
/***********************************************************/
/***********************************************************/

export {};

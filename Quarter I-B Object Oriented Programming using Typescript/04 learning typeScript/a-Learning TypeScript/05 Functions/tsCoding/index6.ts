/*
    Chapter 5. Functions
    Return Types
*/

// Type: (songs: string[]) => number
function singSongs(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }
  return songs.length;
}

// Type: (songs: string[], index: number) => string | undefined
function getSongAt101(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}

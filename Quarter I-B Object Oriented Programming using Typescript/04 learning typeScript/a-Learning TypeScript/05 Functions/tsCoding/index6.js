"use strict";
/*
    Chapter 5. Functions
    Return Types
*/
// Type: (songs: string[]) => number
function singSongs(songs) {
    for (const song of songs) {
        console.log(`${song}`);
    }
    return songs.length;
}
// Type: (songs: string[], index: number) => string | undefined
function getSongAt101(songs, index) {
    return index < songs.length ? songs[index] : undefined;
}

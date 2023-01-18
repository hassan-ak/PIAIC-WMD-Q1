"use strict";
/*
    # Chapter 5. Functions
*/
Object.defineProperty(exports, "__esModule", { value: true });
/***********************************************************/
/*------------------*/
/*-- Return Types --*/
/*------------------*/
/***********************************************************/
function singSongs(songs) {
    for (const song of songs) {
        console.log(`${song}`);
    }
    return songs.length;
}
/***********************************************************/
function getSongAt(songs, index) {
    return index < songs.length ? songs[index] : undefined;
}
/***********************************************************/
/*****************************/
/*** Explicit Return Types ***/
/*****************************/
/***********************************************************/
function singSongsRecursive(songs, count = 0) {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}
/***********************************************************/
const singSongsRecursive1 = (songs, count = 0) => songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
/***********************************************************/
function getSongRecordingDate(song) {
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

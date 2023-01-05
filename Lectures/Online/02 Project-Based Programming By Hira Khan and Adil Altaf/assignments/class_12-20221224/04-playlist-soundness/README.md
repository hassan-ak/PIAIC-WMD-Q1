# Playlist Soundness

> A [Learning TypeScript > Interfaces](https://learning-typescript.com/interfaces) 🍲 entree project.

What's up, friend?!
I'm so pumped you're joining us.
We've got a sick project we could totally use your help on!

See, someone's giving us amazing recommendations for songs to play.
But they're not just coming in as songs.
Sometimes they're an album containing a array of songs.
And sometimes they're a playlist with a method that returns an array of songs.

We'd like you to write a function for us that takes in an array of those items and returns a result playlist.
The result playlist should keep track of which songs appear under each artist, the in-order list of songs, and the total length of time across the playlist?

Can you do this for us, please?
Friend?

## Setup

In one terminal, run the TypeScript compiler via the `tsc` script.
For example, to start the TypeScript compiler in watch mode:

```shell
npm run tsc -- --watch
```

In another terminal, run Jest via the `test` script.
For example, to start tests in watch mode:

```shell
npm run test -- --watch
```

## Specification

Your code should export an `unrollPlaylist` function with an explicit return type annotation.

Parameters:

1. `item`s: An array where each element is either a _Song_, _Album_, or _Playlist_

   > See `./index.test.ts` for examples of data.

Return type: an object with..

- `artists`: Object with artist names keyed to the array of songs they're credited on
- `songs`: An array of _Songs_
- `time`: Total length of time across all songs

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using

   ```cmd
   cd projects/interfaces/playlist-soundness
   ```

3. run following commands

   ```cmd
   npm run tsc -- --watch
   npm run test -- --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   playlist-soundness/src
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

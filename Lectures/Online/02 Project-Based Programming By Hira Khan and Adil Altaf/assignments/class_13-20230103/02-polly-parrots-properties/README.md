# Step 1: Polly Parrot's Properties

Our first specimen is a beauty!
A 49-year-old blue-and-yellow macaw hailing from central Brazil.
Wow!

The parrot's name is Polly, and Polly says a lot of things.
We're pretty sure Polly picks up new phrases regularly.

Can you write a `Parrot` class for us with the capability to speak?

## Specification

Create and export a new `Parrot` class.
It should have two `#` private members:

- `#name`: A name string given as the only parameter of its constructor
- `#phrases`: An array of known phrases, initially consisting of just a string in the format `"#name wants a cracker!"` (e.g. `"Polly wants a cracker!"`)

It should have three methods:

- `announce`: Returns a string in the format `"Squawk! I'm #name!"` (e.g. `"Squawk! I'm Polly!"`)
- `learn`: Takes in a string and adds it to the internal `#phrases` member
- `speak`: Returns a random phrase from the internal `#phrases` member

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using

   ```cmd
   cd projects/classes/classifying-creatures
   ```

3. run following commands

   ```cmd
   npm run tsc -- --project 01-polly-parrots-properties --watch
   npm run test -- 1 --watch
   ```

4. Open an other terminal and naviagte to the directory

   ```cmd
   01-polly-parrots-properties
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

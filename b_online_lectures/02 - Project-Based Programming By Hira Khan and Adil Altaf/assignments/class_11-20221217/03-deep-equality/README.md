# Step 3: Deep Equality

You're doing great work, scientist!
The lab is impressed with the accuracy and speed of your functions.
We'd like to continue to use your functions on more DNA analyses.

Next up, we'd like you to write a `deepEquality` function that takes in two arrays of string arrays.
Each of those two arrays is themselves an array of DNA sequences (remember, a DNA sequence is represented by an array of strings).
The function should return a boolean indicating whether the two arrays contain the same list of DNA sequences.

Note that we're still looking at value equality here, not referential.
Two lists of DNA sequences are equal only if all the strings are equal.

## Specification

Parameters:

1. `a`: An array of arrays of strings
2. `b`: An array of arrays of strings

Return: A boolean indicating whether `a` and `b` contain the same string arrays.

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using

   ```cmd
   cd projects/arrays/analyzing-dna
   ```

3. run following commands

   ```cmd
   npm run tsc -- --project 03-deep-equality --watch
   npm run test -- 1 --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   03-deep-equality
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

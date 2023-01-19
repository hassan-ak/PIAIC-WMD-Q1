# Step 4: Deep Differences

You're doing even more great work, scientist!
The lab is even more impressed with your work.
Just one more function to write and the DNA sequence analysis project will be complete.

The last function you need to write is `deepDifferences`.
It again takes in two arrays of DNA sequences (string arrays).
It should return an array of results from comparing the two DNA sequences at each index.
Each result is `undefined` if the two DNA sequences are a different length.
Otherwise, for each index in the DNA sequences, if the two sequences have the same string at that index, include that string in the result.
Otherwise include `undefined`.

## Specification

Parameters:

1. `a`: An array of arrays of strings
2. `b`: An array of arrays of strings

Return: For each index `i` in the two input arrays:

- If `a[i]` and `b[i]` have different lengths, `undefined`
- If `a[i]` and `b[i]` have the same length, an array where, for each index:
  - If `a[i]` and `b[i]` have the same element at that index: that element
  - If `a[i]` and `b[i]` have different elements at that index, `undefined`

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
   npm run tsc -- --project 04-deep-differences --watch
   npm run test -- 1 --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   04-deep-differences
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

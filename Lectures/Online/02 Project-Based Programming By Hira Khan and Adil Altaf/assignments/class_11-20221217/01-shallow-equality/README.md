# Step 1: Shallow Equality

The first function we'll need you to write is `shallowEquality`.
It takes in two DNA sequences and returns a boolean indicating whether they're the same.

## Specification

Parameters:

1. `a`: An array of strings
2. `b`: An array of strings

Return: A boolean indicating whether `a` and `b` contain the same strings.

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
   npm run tsc -- --project 01-shallow-equality --watch
   npm run test -- 1 --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   01-shallow-equality
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

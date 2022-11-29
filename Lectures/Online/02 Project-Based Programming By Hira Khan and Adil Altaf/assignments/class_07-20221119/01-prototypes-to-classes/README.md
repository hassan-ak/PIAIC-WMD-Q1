# Step 1: Prototypes to Classes

1. The [`original.js`](./original.js) file contains the project's original code for `Robot` and `Humanoid` functions used as classes. Your job is to port that code to proper ES2015+ `class` classes.

2. In `index.ts`, write avove code using ES2015 `class` syntax

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using (open two terminals at a time)

   ```cmd
   cd projects/from-javascript-to-typescript/the-typeinator
   ```

3. run following commands in seprate terminals

   ```cmd
   npm run tsc -- --project 01-prototypes-to-classes --watch
   ```

   ```cmd
   npm run test -- 1 --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   cd 01-prototypes-to-classes
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

# Step 2: Callbacks to Async Await

1. The [`original.js`](./original.js) file contains the project's original code for `checkEmotion` and `speak` functions. In this time period, those functions are written with traditional Node-style callback parameters.

2. In `index.ts`, port that code to proper ES2017+ `async`/`await`.

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
   npm run tsc -- --project 02-callbacks-to-async-await --watch
   ```

   ```cmd
   npm run test -- 1 --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   cd 02-callbacks-to-async-await
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

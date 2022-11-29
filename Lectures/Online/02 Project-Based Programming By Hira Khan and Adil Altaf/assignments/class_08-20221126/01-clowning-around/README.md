# Step 1: Clowning Around

- The first area of code I'll need you to fix is the activity assignment engine.
- It repeatedly creates groups of size 5-10 guests.
- Each group is directed to go to an activity, which can hold up to a certain number of them at a time.
- It looks like the clowns didn't change too much on this one.
- They mostly just removed a few type annotations and changed one value.
- Could you please add back missing type annotations to avoid implicit `any`s, and fix the wrong value?

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using

   ```cmd
   cd projects/the-type-system/system-of-a-clown
   ```

3. run following commands

   ```cmd
   npm run tsc -- --project 01-clowning-around --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   01-clowning-around
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

# Step 2: Recipes

- Those salad ingredients are looking delectable, thank you!
- Next up is my list of favorite recipes.
- It looks like these seem to pass the TypeScript compiler fine as-is.
- However, there's a catch: I want to make sure future recipes keep to the same `difficulty` and `group` types.
- Could you please use unions of literal types for them?
- Both should only have three possible values.
- This time, the runtime code is mostly working fine.
- Except I think I made a typo in one of the `group` values?
- You'll need to fix that.
- Otherwise it's just the type annotations you'll need to correct.

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using

   ```cmd
   cd projects/unions-and-literals/primitive-cooking
   ```

3. run following commands

   ```cmd
   npm run tsc -- --project 02-recipes --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   02-recipes
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

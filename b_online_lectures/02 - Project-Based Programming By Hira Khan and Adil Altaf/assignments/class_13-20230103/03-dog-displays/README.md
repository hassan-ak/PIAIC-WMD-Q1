# Step 2: Dog Displays

Great job presenting those parrot properties!
Really, spectacular work!
You've earned yourself another assignment!

We've got a whole litter of rescued puppies to put up for adoption.
These furry little balls of energy are hard to keep track of!
Could you please write us a `Puppy` class that we can use internally and a `PuppyInTheWindow` interface to present to our friends?

## Specification

Export a `PuppyInTheWindow` interface with three read-only properties:

- `colors`: An array of strings representing the color of the dog
- `furriness`: A number indicating how furry the little fellow is
- `owner`: Either a string or undefined

Additionally export a `Puppy` class that implements the `PuppyInTheWindow` interface.
Its properties should not be read-only; in addition, it should have the following methods:

- Constructor: takes in initial values for `colors` and `furriness` (`owner` starts off undefined)
- `adopt`: Takes a new `owner` string as a parameter and sets it as the `owner` property

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
   npm run tsc -- --project 02-dog-displays --watch
   npm run test -- 1 --watch
   ```

4. Open an other terminal and naviagte to the directory

   ```cmd
   02-dog-displays
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

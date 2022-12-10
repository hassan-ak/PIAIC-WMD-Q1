# Structural Kitchen

A `createKitchen` function must be created returns an object containing functions.
It must receive an initial budget and two functions as parameters.
It should create some state for the kitchen internally.

If you are willing and able to be of service, see below for our exact specification.

## Specification

You must export a `createKitchen` function.
Inside the kitchen is the following state:

- `dirt`: How much dirt is in the kitchen, initially `0`
- `stock`: How much of each of the following are in the kitchen, each initially `0`:
  - `breads`
  - `fruits`
  - `sauces`
  - `vegetables`

It must take in three parameters:

1. `budget`: A starting budget number the kitchen may use for its costs
2. `cleaner`: A function with...
   - Parameters:
     1. `dirt`: How much dirt is in the kitchen
     1. `time` (optional): How much time to spend cleaning
   - Return: A new number for how much dirt should be left in the kitchen
3. `supplier`: A function with...
   - Parameters:
     1. `expense`: How much money from the budget will be spent on purchasing
   - Return: An object with for each stock ingredient name keyed to how much to increase that ingredient by

It must return an object with the following properties:

- `announce`: A function that returns a string in the format (replacing each `#` with the corresponding number):

  ```plaintext
  I have # much dirt, # budget, # bread(s), # fruit(s), # sauce(s), and # vegetable(s).
  ```

- `clean`: A function that sets the `dirt` state to the result of calling `cleaner` on the existing `dirt` amount and `time` parameter.
  - Parameters:
    1. `time` (optional): How much time to spend cleaning
- `purchase`: A function that takes in an `expense` amount and, if there is enough budget for that expense, calls `supplier` with it and increases stock by the results.
  - Parameters:
    1. `expense`: How much money to spend on cleaning
  - Return: A boolean indicating whether there was enough budget
- `prepare`: A function that attempts to make a recipe and increase `dirt` state by `1`, but only if the `dirt` state is below `100`.
  - Parameters:
    1. `recipe`: A function that takes in an object describing the ingredients, and returns either:
       - Failure result: an object containing `succeeded: false`
       - Success result: an object containing `succeeded: true` and a `newStock` property indicating the new ingredients state
    - Return: A boolean indicating whether dirt was previously below `100` and the recipe was successfully created

Please use an explicit return type annotation on the `createKitchen` function.
Call that aliased object type `Kitchen`.

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using

   ```cmd
   cd projects/functions/structural-kitchen
   ```

3. run following commands

   ```cmd
   npm run tsc -- --watch
   npm run test -- --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   structural-kitchen/src
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

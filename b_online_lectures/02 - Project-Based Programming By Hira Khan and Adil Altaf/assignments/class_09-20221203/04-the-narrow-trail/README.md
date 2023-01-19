# The Narrow Trail

## Specification

Take a look at `./src/index.ts`.
It contains a `runCommands()` function you'll be working within.

> Don't worry if you haven't covered functions in TypeScript yet.
> This project doesn't require knowing about how TypeScript works with them.

The game logic you're to write will keep track of four pieces of state:

- _Available Resource_: Which of _Food_ or _Water_ will be available to resupply (see later), initially without a value
- _Day_: What day of travel it is, initially 1
- _Food_: A numeric value for how much food the player has left, initially 5
- _Water_: A numeric value for how much water the player has left, initially 5

The goal of the game is for the player to still have both _Food_ and _Water_ after _Day_ passes 7.

Your logic will continuously generate a random number between 1 and 6 to simulate a dice roll for a new day.
Each day, one of the following commands will happen based on that rolled number:

- 1, **Food**: Subsequent **Resupply** rolls will increase the player's _Food_ supplies
- 2, **Water**: Subsequent **Resupply** rolls will increase the player's _Water_ supplies
- 3-6, **Resupply**:
  - If no _Available Resource_ value is set: set _Available Resource_ to _Food_ if the rolled number is even or _Water_ if the rolled number is odd
  - If an _Available Resource_ value is set: increase the corresponding resource by the rolled number, then unset the _Available Resource_ value.

After the dice roll actions are completed, decrease both `food` and `water` by 1.
If either is `0` then `return false`.

Once the _Day_ state passes 7 (the player has lasted 7 days with sufficient supplies), `return true`.

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using

   ```cmd
   cd projects/unions-and-literals/the-narrow-trail
   ```

3. run following commands

   ```cmd
   npm run tsc -- --watch
   npm run test -- --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   the-narrow-trail/src
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

# Horror Factory

> A [Learning TypeScript > Classes](https://learning-typescript.com/classes) 🍰 dessert project.

Hold on a moment!
That abstract `Horror` class you wrote...
It works, but have you heard of the _factory pattern_?

There's no need to make sub-classes for it when you can have a single `Horror` class take in its different behaviors as constructor parameters.
Let's refactor the classes to do that.

## Setup

In one terminal, run the TypeScript compiler via the `tsc` script.
For example, to start the TypeScript compiler in watch mode:

```shell
npm run tsc -- --watch
```

In another terminal, run Jest via the `test` script.
For example, to start tests in watch mode:

```shell
npm run test -- --watch
```

## Specification

The functional behavior of demons and sorcerers should work the same as in the entree project.
However, instead of having `Demon` and `Sorcerer` classes, the exported `Horror` class should have a constructor that takes in an object containing `name`, `isEvil`, and `getPowerFrom`.

Then, create and export `createDemon` and `createSorcerer` functions instead of `Demon` and `Sorcerer` classes.

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using

   ```cmd
   cd projects/interfaces/horror-factory
   ```

3. run following commands

   ```cmd
   npm run tsc -- --watch
   npm run test -- --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   horror-factory/src
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

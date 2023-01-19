# Step 3: Hamster Helpers

Oh my!
You're doing so wonderfully!
Really, props to you!
I've got just the one last favor to ask of you.

We've got a hefty set of small furry pets here.
Specifically, gerbils and hamsters.
Cute, ain't they?

We'd like to represent their behavior with classes in TypeScript.
But we're finding it a bit hard to wrap our heads around type system keywords for classes.

Can you write an abstract `SmallFurryPet` class for us, with a `Gerbil` class and a `Hamster` class both extending it?

## Specification

There should be four exports in your file:

- `SmallPetFood`: A union type of string literals: `bugs`, `fruits`, `insects`, `plants`, `seeds`, and `vegetables`
- `SmallFurryPet`: An abstract class with...
  - Properties:
    - `species`: A readonly string set in its constructor using a single constructor parameter
    - `happiness`: A protected property initial set to `0`
  - Methods:
    - `eats`: An abstract property that takes in a `food` parameter of type `SmallPetFood`, and returns a boolean indicating whether that species eats that type of food
    - `isHappy`: returns whether the `happiness` property is greater than `0`
- `Gerbil`: A class that extends `SmallFurryPet` with methods:
  - Constructor: provide the species `"Gerbil"`
  - `dig`: A method that increases happiness by `1`
  - `eats`: returns whether the food is one of: `insects`, `plants`, `seeds` or `vegetables`
- `Hamster`: A class that extends `SmallFurryPet` with methods:
  - Constructor: provide the species `"Hamster"`
  - `run`: A method that increases happiness by `1`
  - `eats`: returns `true`, always

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
   npm run tsc -- --project 03-hamster-helpers --watch
   npm run test -- 1 --watch
   ```

4. Open an other terminal and naviagte to the directory

   ```cmd
   03-hamster-helpers
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

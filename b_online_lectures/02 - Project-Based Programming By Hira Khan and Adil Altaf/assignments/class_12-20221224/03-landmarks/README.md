# Step 3: Landmarks

Hooray!

We've included a `landmarks.json` file containing all the possible different landmarks we may ask to be described.

For this step, we'll need two things from you:

- A `Landmark` union type representing the possible landmark objects
- A `describeLandmark` function that takes in a `Landmark` object and returns a string describing it

Please make sure the `Landmark` union type plays well with TypeScript's type narrowing.
Its `type` property indicates which type of landmark it is.
We sure hope TypeScript has some kind of feature where a single property on an object can be checked to determine which member of a union type an object is...

For the `describeLandmark` function, its output should be a string containing two lines.
The first line will be in the format `<name> is a <type> in Upstate New York.`
The second line's contents will change based on what type of landmark it is:

- Forts: _(nothing: don't include a second line)_
- Lakes: `It covers <miles> square miles of water.`
- Lighthouses: `It was first lit in <lit> and is <feet> feet high.`
- Mountains: `Its peak is <height> feet high.`
- Parks: `It covers <acres> square acres.`
- Rivers: `It flows for <length> miles and is <deep> feet deep at its deepest.`
- Waterfalls: `It is <height> feet high.`

## Specification

Parameters:

1. `landmark`: An object describing a landmark

Return: A string describing the landmark

Example: Given the following object as input...

```js
{
  name: "Lake George",
  miles: 44,
  type: "lake"
}
```

...the function would output the following string:

```plaintext
Lake George is a lake in Upstate New York.
It covers 44 square miles of water.
```

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using

   ```cmd
   cd projects/interfaces/vacation-planning
   ```

3. run following commands

   ```cmd
   npm run tsc -- --project 03-landmarks --watch
   npm run test -- 1 --watch
   ```

4. Open an other terminal and naviagte to the directory

   ```cmd
   03-landmarks
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

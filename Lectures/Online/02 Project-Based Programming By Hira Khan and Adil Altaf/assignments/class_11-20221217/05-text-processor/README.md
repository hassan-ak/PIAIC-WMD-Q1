# Text Processor

> A [Learning TypeScript > Arrays](https://learning-typescript.com/arrays) 🍲 entree project.
> You'll practice creating and transforming arrays of strings.

Hello, fellow text editing and type setting enthusiast!
I hear you have a dual interest in both TypeScript and and type scripts.
That's great because I have a few projects for you to help me out with all of those things.

I have a collection of raw text strings that represent some of my favorite pieces of literature.
I'd like to set up code that can turn those pieces of text into print-ready lines, each capped at a maximum character width.

Before we can do any of our fancy typography work on text, we need to split text into lines.
Much of our text data is stored in strings where the only whitespace is a single `" "` space between words.

Additionally, for each line, I'll need the ability to align it to the left, middle, or right.
Alignment means adding spaces to the beginning and/or end of the string to fit it to a specified character width.

Can you type this text processor up for me, fellow typography practitioner?

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

In `index.ts`, export an `alignTexts` function.

Parameters:

1. `texts`: An array of strings
2. `options`: An object with the following properties:
   - `align` _(optional)_: Whether to align to the `left` _(default)_, `middle`, or `right`
   - `width`: Maximum character width for each processed line

Return type: An array of array of strings.

### Example

- Input: `alignTexts(["ab cd", "abc def", "abcd ef"], { width: 4 })`
- Output:

  ```json
  [
    ["ab  ", "cd  "],
    ["abc ", "def "],
    ["abcd", "ef  "]
  ]
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
   cd projects/arrays/text-processor
   ```

3. run following commands

   ```cmd
   npm run tsc -- --watch
   npm run test -- --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   text-processor/src
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

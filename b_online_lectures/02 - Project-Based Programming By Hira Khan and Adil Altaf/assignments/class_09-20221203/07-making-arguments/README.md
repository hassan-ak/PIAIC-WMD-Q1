# Step 3: Making Arguments

I have but one more file for you.
It contains the many motions I have seen in cases involving my clients.
I must admit, I'd grown quite weary while jotting down those motions.
It is missing TypeScript types, and many elements in the `motions` array have typos in their data.

The tricky thing is, there are a few different types of motions that can be filed.
There should be some kind of discriminating indicator property on the types to distinguish between:

- Status: _allowed_, _denied_, and _pending_. Within those types:
  - Allowed: it may also indicate how many hours it spent in deliberation
  - Denied: it may also indicate how many hours it spent in deliberation, and whether it annoyed the justice
  - Pending: it may also indicate how many hours it's estimated to spent in deliberation
- Step: _post-trial_ and _pre-trial_. Within those types:
  - Pre-trial: I only noted _dismissals_, _suppressions_, and _venue changes_
  - Post-trial: I only noted _acquittals_, _corrections_, and _new trials_

## How to test the solution

1. Setup the environemt

   ```cmd
   git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
   cd learning-typescript-projects
   npm i
   ```

2. Naviagte to the project directory using

   ```cmd
   cd projects/objects/various-lawyerings
   ```

3. run following commands

   ```cmd
   npm run tsc -- --project 03-making-arguments --watch
   ```

4. Open an other terminal and nviagte to the directory

   ```cmd
   03-making-arguments
   ```

5. Copy `index.ts` from this project to the directory opened in step 4

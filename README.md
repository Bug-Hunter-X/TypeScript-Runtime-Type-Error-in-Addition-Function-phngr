# TypeScript Runtime Type Error

This repository demonstrates a subtle but important issue in TypeScript: runtime type errors that aren't caught during compilation.  The example shows how using a string argument in a function expecting a number only throws an error when the function is actually called, not during the type checking phase.  This highlights the need for robust runtime error handling even when using static typing.

The `bug.ts` file contains the erroneous code. `bugSolution.ts` provides a potential solution to improve type safety.

## How to Reproduce
1. Clone this repository.
2. Run `tsc bug.ts` to compile.
3. Run the compiled JavaScript file (`node bug.js`).
4. Observe the runtime type error.

## Solution
The solution demonstrates how runtime checks can be added in TypeScript to prevent such errors.
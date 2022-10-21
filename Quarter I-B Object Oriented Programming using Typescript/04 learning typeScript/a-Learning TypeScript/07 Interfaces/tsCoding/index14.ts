/*
    Chapter 7. Interfaces
    Interface Merging
*/
//   Member Naming Conflicts

interface MergedProperties {
  same: (input: boolean) => string;
  different: (input: string) => string;
}
interface MergedProperties {
  same: (input: boolean) => string; // Ok
  //   different: (input: number) => string;
  // Error: Subsequent property declarations must have the same type.
  // Property 'different' must be of type '(input: string) => string',
  // but here has type '(input: number) => string'.
}

interface MergedMethods {
  different(input: string): string;
}
interface MergedMethods {
  different(input: number): string; // Ok
}

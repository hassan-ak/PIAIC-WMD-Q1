/*
    Chapter 7. Interfaces
    Types of Properties
    Interface Extensions
    Interface Merging
*/
//   Call Signatures

interface FunctionWithCount {
  count: number;
  (): void;
}
let hasCallCount: FunctionWithCount;
function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1;
  console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}
keepsTrackOfCalls.count = 0;
hasCallCount = keepsTrackOfCalls; // Ok
function doesNotHaveCount() {
  console.log('No idea!');
}
// hasCallCount = doesNotHaveCount;
// Error: Property 'count' is missing in type
// '() => void' but required in type 'FunctionWithCalls'

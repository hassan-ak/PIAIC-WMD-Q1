/*
    Chapter 7. Interfaces
    Interface Merging
*/

interface Merged {
  fromFirst: string;
}
interface Merged {
  fromSecond: number;
}
// Equivalent to:
// interface Merged {
// fromFirst: string;
// fromSecond: number;
// }

interface Window {
  myEnvironmentVariable: string;
}
window.myEnvironmentVariable; // Type: string

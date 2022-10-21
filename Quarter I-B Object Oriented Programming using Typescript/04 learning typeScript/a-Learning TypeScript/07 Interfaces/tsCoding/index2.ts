/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Optional Properties

interface Book {
  author?: string;
  pages: number;
}
// Ok
const ok: Book = {
  author: 'Rita Dove',
  pages: 80,
};
const missing: Book = {
  pages: 80,
};
// Error: Property 'author' is missing in type
// '{ pages: number; }' but required in type 'Book'.

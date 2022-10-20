/*
    Chapter 5. Functions
    Function Parameters
*/
// Default Parameters

function rateSong(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 stars!`);
}
rateSong('Photograph'); // Ok
rateSong('Set Fire to the Rain', 5); // Ok
rateSong('Set Fire to the Rain', undefined); // Ok
// rateSong('At Last!', '100');
// ~~~~~
// Error: Argument of type '"100"' is not assignable
// to parameter of type 'number | undefined'.

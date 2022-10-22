/* 
    Chapter 9. Type Modifiers
    Top Types
*/
// unknown

function greetComedian1(name: unknown) {
  //   console.log(`Announcing ${name.toUpperCase()}!`);
  // ~~~~
  // Error: Object is of type 'unknown'.
}

function greetComedianSafety(name: unknown) {
  if (typeof name === 'string') {
    console.log(`Announcing ${name.toUpperCase()}!`); // Ok
  } else {
    console.log("Well, I'm off.");
  }
}
greetComedianSafety('Betty White'); // Logs: 4
greetComedianSafety({}); // Does not log

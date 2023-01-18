/*
    # Chapter 9. Type Modifiers
*/
/***********************************************************/

/*---------------*/
/*-- Top Types --*/
/*---------------*/

/***********************************************************/

/******************/
/*** any, Again ***/
/******************/

/***********************************************************/
let anyValue: any;
anyValue = 'Lucille Ball'; // Ok
anyValue = 123; // Ok
console.log(anyValue); // Ok

/***********************************************************/
function greetComedian(name: any) {
  console.log(`Announcing ${name.toUpperCase()}!`);
}
greetComedian({ name: 'Bea Arthur' });
// Runtime error: name.toUpperCase is not a function

/***********************************************************/

/***************/
/*** unknown ***/
/***************/

/***********************************************************/
function greetComedian1(name: unknown) {
  // // Error
  // console.log(`Announcing ${name.toUpperCase()}!`);
}

/***********************************************************/
function greetComedianSafety(value: unknown) {
  if (typeof value === 'string') {
    console.log(`Announcing ${value.toUpperCase()}!`); // Ok
  } else {
    console.log("Well, I'm off.");
  }
}
greetComedianSafety('Betty White'); // Logs: 4
greetComedianSafety({}); // Does not log

/***********************************************************/

export {};

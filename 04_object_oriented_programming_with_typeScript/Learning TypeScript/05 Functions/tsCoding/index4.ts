/*
    # Chapter 5. Functions
*/

/***********************************************************/

/*-----------------------*/
/*-- More Return Types --*/
/*-----------------------*/

/***********************************************************/

/********************/
/*** Void Returns ***/
/********************/

/***********************************************************/
function logSong(song: string | undefined): void {
  if (!song) {
    // Ok
    return;
  }
  console.log(`${song}`);
  // Error
  // // return true;
}

/***********************************************************/
let songLogger: (song: string) => void;
songLogger = (song) => {
  console.log(`${song}`);
};
songLogger('Heart of Glass'); // Ok

/***********************************************************/
function returnsVoid() {
  return;
}
let lazyValue: string | undefined;
// Error
// // lazyValue = returnsVoid();

/***********************************************************/
const records: string[] = [];
function saveRecords(newRecords: string[]) {
  newRecords.forEach((record) => records.push(record));
}
saveRecords(['21', 'Come On Over', 'The Bodyguard']);

/***********************************************************/

/*********************/
/*** Never Returns ***/
/*********************/

/***********************************************************/
function fail(message: string): never {
  throw new Error(`Invariant failure: ${message}.`);
}

/***********************************************************/
function workWithUnsafeParam(param: unknown) {
  if (typeof param !== 'string') {
    fail(`param should be a string, not ${typeof param}`);
  }
  // Here, param is known to be type string
  // Ok
  param.toUpperCase();
}

/***********************************************************/

export {};

/*
    # Chapter 9. Type Modifiers
*/

/***********************************************************/

/*---------------------*/
/*-- Type Predicates --*/
/*---------------------*/

/***********************************************************/
function isNumberOrString(value: unknown) {
  return ['number', 'string'].includes(typeof value);
}
function logValueIfExists(value: number | string | null | undefined) {
  if (isNumberOrString(value)) {
    // Error
    // value.toString();
  } else {
    console.log('Value does not exist:', value);
  }
}

/***********************************************************/
function isNumberOrString1(value: unknown): value is number | string {
  return ['number', 'string'].includes(typeof value);
}
function logValueIfExists1(value: number | string | null | undefined) {
  if (isNumberOrString1(value)) {
    value.toString(); // Ok
  } else {
    console.log('value does not exist:', value);
  }
}

/***********************************************************/
interface Comedian {
  funny: boolean;
}
interface StandupComedian extends Comedian {
  routine: string;
}
function isStandupComedian(value: Comedian): value is StandupComedian {
  return 'routine' in value;
}
function workWithComedian(value: Comedian) {
  if (isStandupComedian(value)) {
    console.log(value.routine); // Ok
  }
  // // Error
  // console.log(value.routine);
}

/***********************************************************/
function isLongString(input: string | undefined): input is string {
  return !!(input && input.length >= 7);
}
function workWithText(text: string | undefined) {
  if (isLongString(text)) {
    console.log('Long text:', text.length);
  } else {
    // Type of text: undefined
    // console.log('Short text:', text?.length);
  }
}

/***********************************************************/

export {};

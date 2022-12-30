/**************************/
/*** step19a_interfaces ***/
/**************************/

/************************************************/
// One of TypeScript's core principles is that type-checking focuses on the 'shape' that values have.
// This is sometimes called "duck typing" or "structural subtyping".
// In TypeScript, interfaces fill the role of naming these types
// Added new rules for TypeScript 1.6 https://github.com/Microsoft/TypeScript/pull/3823

/************************************************/
//Example without a named interface
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

/************************************************/
// Fresh Objects:
// Case 1
// Case 1 exact properties: OK
printLabel({ label: 'Size 10 Object' });

// Case 2a
// Case 2a missing or renamed property: Error
// printLabel({ mylabel: 'Size 10 Object' });

//Case 2b
// A type can include an index signature to explicitly indicate
// that excess properties are permitted in with fresh objects:
function printLabelX(labelledObj: { [x: string]: any }) {
  //// Note now 'x' can have any name, just that the property should be of type string
  console.log(arguments[0]);
}
// Ok, `name` matched by index signature
printLabelX({ name: 'Zia' });

// Case 3
// Case 3 Fresh Literal: Error no extra properties allowed
// printLabel({ size: 10, label: 'Size 10 Object' });

/************************************************/
// Stale Objects:
// Case 1:
var myObj1 = { label: 'Size 10 Object' };
// Case 1 exact properties: OK
printLabel(myObj1);

// Case 2a:
var myObj2 = { mylabel: 'Size 10 Object' };
// Case 2a missing or renamed property: Error
// printLabel(myObj2);

// Case 2b:
var obj3 = { name: 'Zia' };
// Ok, `name` matched by index signature
printLabelX(obj3);

// Case 3
var myObj4 = { size: 10, label: 'Size 10 Object' };
// Case 3 Stale Literal: extra properties allowed
printLabel(myObj4);

/************************************************/
/************************************************/
/************************************************/
// Same Example with a named interface
interface LabelledValue {
  label: string;
}
interface LabelledValue2 {
  [x: string]: any;
}
function printLabelY(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
function printLabelY2(labelledObj: LabelledValue2) {
  console.log(arguments[0]);
}

/************************************************/
// Fresh Objects
// Case 1
// Case 1 exact properties: OK
printLabelY({ label: 'Size 11 Object' });

// Case 2a
// Case 2a missing or renamed property: Error
// printLabelY({ mylabel: 'Size 11 Object' });

// Case 2b
// Ok, `name` matched by index signature
printLabelY2({ name: 'Zia' });

// Case 3
// Case 3 Fresh Literal: Error no extra properties allowed
// printLabelY({ size: 11, label: 'Size 11 Object' });

/************************************************/
// Stale Objects
// Case 1
var myObjY1 = { label: 'Size 11 Object' };
// Case 1 exact properties: OK
printLabelY(myObjY1);

// Case 2a
var myObjY2 = { mylabel: 'Size 11 Object' };
// Case 2a missing or renamed property: Error
// printLabelY(myObjY2);

// Case 2b
var objY3 = { name: 'Zia' };
// Ok, `name` matched by index signature
printLabelY2(objY3);

// Case 3
var myObjY4 = { size: 11, label: 'Size 11 Object' };
// Case 3 Stale Literal: extra properties allowed
printLabelY(myObjY4);

/************************************************/
export {};

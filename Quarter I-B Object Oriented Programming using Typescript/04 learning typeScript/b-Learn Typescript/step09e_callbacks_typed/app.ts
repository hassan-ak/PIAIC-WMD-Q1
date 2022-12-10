// step09f_callbacks_typed

/************************************************************/
function myCallBack(text: string) {
  console.log('inside myCallback ' + text);
}
function callingFunction(
  initialText: string,
  callback: (text: string) => void
) {
  callback(initialText);
}
callingFunction('myText', myCallBack);

/************************************************************/
const greeting = (message: string) => console.log(`Hello ${message}`);
interface definitionInterface {
  (message: string): void;
}
function sayHello(callback: definitionInterface) {
  callback('World!');
}
sayHello(greeting);

/************************************************************/

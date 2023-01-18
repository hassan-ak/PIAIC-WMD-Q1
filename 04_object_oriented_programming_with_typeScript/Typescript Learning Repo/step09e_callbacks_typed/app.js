"use strict";
// step09e_callbacks_typed
/************************************************************/
function myCallBack(text) {
    console.log('inside myCallback ' + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction('myText', myCallBack);
/************************************************************/
const greeting = (message) => console.log(`Hello ${message}`);
function sayHello(callback) {
    callback('World!');
}
sayHello(greeting);
/************************************************************/

"use strict";
/*
    Chapter 7. Interfaces
    Types of Properties
*/
//   Read-Only Properties
function read(page) {
    // Ok: reading the text property doesn't attempt to modify it
    console.log(page.text);
    //   page.text += '!';
    // ~~~~
    // Error: Cannot assign to 'text'
    // because it is a read-only property.
    const pageIsh = {
        text: 'Hello, world!',
    };
    // Ok: messengerIsh is an inferred object type with text, not a Page
    //   page.text += '!';
    // Ok: read takes in Page, which happens to
    // be a more specific version of pageIsh's type
}
// read(messengerIsh);

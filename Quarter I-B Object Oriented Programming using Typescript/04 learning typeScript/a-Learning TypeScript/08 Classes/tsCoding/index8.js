"use strict";
/*
    Chapter 8. Classes
    Class Properties
*/
//  Read-Only Properties
class Quote {
    constructor(text) {
        this.text = text;
    }
    emphasize() {
        // this.text += '!';
        // ~~~~
        // Error: Cannot assign to 'text' because it is a read-only property.
    }
}
const quote = new Quote('There is a brilliant child locked inside every student.');
// Quote.text = 'Ha!';
// Error: Cannot assign to 'text' because it is a read-only property.
class RandomQuote {
    constructor() {
        this.explicit = 'Home is the nicest word there is.';
        this.implicit = 'Home is the nicest word there is.';
        if (Math.random() > 0.5) {
            this.explicit = "We start learning the minute we're born."; // Ok;
            //   this.implicit = "We start learning the minute we're born.";
            // Error: Type '"We start learning the minute we're born."' is
            // not assignable to type '"Home is the nicest word there is."'.
        }
    }
}
const quote1 = new RandomQuote();
quote1.explicit; // Type: string
quote1.implicit; // Type: "Home is the nicest word there is."

"use strict";
/*
    Chapter 8. Classes
    Member Visibility
*/
//  Static Field Modifiers
class Question {
    guess(getAnswer) {
        const answer = getAnswer(Question.prompt);
        // Ok
        if (answer === Question.answer) {
            console.log('You got it!');
        }
        else {
            console.log('Try again...');
        }
    }
}
Question.prompt = "What's an ogre's favorite programming language?";
// Question.answer;
// ~~~~~~
// Error: Property 'answer' is protected and only
// accessible within class 'HasStatic' and its subclasses.

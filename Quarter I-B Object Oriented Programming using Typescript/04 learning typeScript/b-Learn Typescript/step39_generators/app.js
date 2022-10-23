"use strict";
// //Execution of a generator is paused till the next iteration is invoked
function* generatorFn() {
    //first task
    yield 'firstValue';
    //second task
    yield 'secondValue';
    //third task
    yield 'thirdValue';
}
var generator = generatorFn();
var next = generator.next();
while (!next.done) {
    console.log(next.value);
    next = generator.next();
}
function* firstNEvenNumbers(count) {
    var index = 1;
    while (index <= count) {
        yield 2 * index;
        index++;
    }
}
for (let n of firstNEvenNumbers(3)) {
    console.log(n);
}
for (let n of firstNEvenNumbers(5)) {
    console.log(n);
}
console.log('***');
var generator1 = firstNEvenNumbers(20);
var next1 = generator1.next();
while (!next1.done) {
    console.log(next1.value);
    next1 = generator1.next();
}

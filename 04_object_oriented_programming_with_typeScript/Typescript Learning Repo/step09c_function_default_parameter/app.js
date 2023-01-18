"use strict";
// step09d_function_default_parameter
/*****************************************/
//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName, lastName = 'Khan') {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
}
let result1 = buildName('Bob'); //works correctly because last parameter is optional
// Error
// // let result2 = buildName('Bob', 'Adams', 'Sr.'); //error, too many parameters
let result3 = buildName('Bob', 'Adams'); //correct
/*****************************************/
//anonymous function type with defult parameters
//(Note that the parameter type will be optional when used with defult value)
let buildName1 = function (firstName, lastName = 'Khan') {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
};
/*****************************************/
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
/*****************************************/
function getDay(year = new Date().getFullYear(), month) {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0)
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}
let day = getDay(2019, 2);
console.log(day); // 28
let day1 = getDay(undefined, 2);
console.log(day);
/*****************************************/
/*****************************************/
/*****************************************/
/*****************************************/
/*****************************************/
/*****************************************/

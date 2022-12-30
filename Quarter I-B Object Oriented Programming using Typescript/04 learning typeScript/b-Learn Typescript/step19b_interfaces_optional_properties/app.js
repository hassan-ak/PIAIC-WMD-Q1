"use strict";
/**********************************************/
/*** step19b_interfaces_optional_properties ***/
/**********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare.area);

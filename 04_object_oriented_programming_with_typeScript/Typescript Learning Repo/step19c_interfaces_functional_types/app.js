"use strict";
/*******************************************/
/*** step19c_interfaces_functional_types ***/
/*******************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};

"use strict";
// step05d_nested_objects
const person = {
    name: 'James',
    address: {
        country: 'Chile',
        city: 'Santiago',
    },
};
const person1 = {
    name: 'James',
    address: {
        country: 'Chile',
        city: 'Santiago',
    },
};
/***********************************************************************/
const person2 = {
    name: 'James',
    address: {
        country: 'Chile',
        city: 'Santiago',
    },
};
/***********************************************************************/
const person3 = {
    name: 'James',
    address: {
        country: 'Chile',
        city: 'Santiago',
    },
};
const person4 = {
    name: 'James',
};
person4.address = {
    country: 'Chile',
    city: 'Santiago',
};
const person5 = {
    name: 'James',
    address: {
        country: 'Chile',
        city: 'Santiago',
    },
};
person5.address.street = 'Example str. 123';
person5.address.postCode = 123;
const myBook = {
    author: {
        firstName: 'Zia',
        lastName: 'Khan',
    },
    name: 'My Best Book',
};
/***********************************************************************/

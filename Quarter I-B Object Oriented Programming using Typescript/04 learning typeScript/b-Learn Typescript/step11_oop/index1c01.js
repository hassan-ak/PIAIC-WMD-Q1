"use strict";
/******************/
/*** step11_oop ***/
/******************/
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++ 4 Pillars of Object-oriented Programming with TypeScript ++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/************************************************/
/*-------------------------*/
/*-- What is TypeScript? --*/
/*-------------------------*/
/************************************************/
// In JS
// class Car {
//   model;
//   color;
//   isElectric;
//   constructor(model, color, isElectric) {
//     this.model = model;
//     this.color = color;
//     this.isElectric = isElectric;
//   }
//   drive() {
//     const engineStarted = this.startEngine();
//   }
//   startEngine() {
//     return true;
//   }
// }
// In TS
class Car {
    model;
    color;
    isElectric;
    constructor(model, color, isElectric) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }
    drive() {
        const engineStarted = this.startEngine();
    }
    startEngine() {
        return true;
    }
}
/************************************************/
/*-----------------*/
/*-- Abstraction --*/
/*-----------------*/
/************************************************/
class Character {
    name;
    damage;
    attackSpeed;
    constructor(name, damage, speed) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }
}
class Goblin extends Character {
    constructor(name, damage, speed) {
        super(name, damage, speed);
    }
    damagePerSecond() {
        return this.damage * this.attackSpeed;
    }
}
/************************************************/
/*-------------------*/
/*-- Encapsulation --*/
/*-------------------*/
/************************************************/
class Character1 {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
/************************************************/
/*-----------------*/
/*-- Inheritance --*/
/*-----------------*/
/************************************************/
class Character12 {
    name;
    damage;
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    talk() {
        console.log('Says something ...');
    }
}
class Orc12 extends Character12 {
    weapon;
    constructor(name, damage, weapon) {
        super(name, damage);
        this.weapon = weapon;
    }
    attack() {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}
/************************************************/
/*------------------*/
/*-- Polymorphism --*/
/*------------------*/
/************************************************/
class Character101 {
    name;
    damage;
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    talk() {
        console.log('Says something ...');
    }
    attack() {
        console.log(`Attacks his target with his fists.`);
    }
}
class Orc101 extends Character101 {
    weapon;
    constructor(name, damage, weapon) {
        super(name, damage);
        this.weapon = weapon;
    }
    talk() {
        console.log('Says something but in orcish ...');
    }
    attack() {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}

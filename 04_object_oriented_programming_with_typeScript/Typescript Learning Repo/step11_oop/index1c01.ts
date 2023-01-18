/******************/
/*** step11_oop ***/
/******************/

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
  public model: string;
  public color: string;
  public isElectric: boolean;
  constructor(model: string, color: string, isElectric: boolean) {
    this.model = model;
    this.color = color;
    this.isElectric = isElectric;
  }
  public drive(): void {
    const engineStarted: boolean = this.startEngine();
  }
  private startEngine(): boolean {
    return true;
  }
}

/************************************************/

/*-----------------*/
/*-- Abstraction --*/
/*-----------------*/

/************************************************/
abstract class Character {
  public name: string;
  public damage: number;
  public attackSpeed: number;
  constructor(name: string, damage: number, speed: number) {
    this.name = name;
    this.damage = damage;
    this.attackSpeed = speed;
  }
  public abstract damagePerSecond(): number;
}
class Goblin extends Character {
  constructor(name: string, damage: number, speed: number) {
    super(name, damage, speed);
  }
  public damagePerSecond(): number {
    return this.damage * this.attackSpeed;
  }
}

/************************************************/

/*-------------------*/
/*-- Encapsulation --*/
/*-------------------*/

/************************************************/
class Character1 {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}

/************************************************/

/*-----------------*/
/*-- Inheritance --*/
/*-----------------*/

/************************************************/
class Character12 {
  public name: string;
  public damage: number;
  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
  public talk(): void {
    console.log('Says something ...');
  }
}
class Orc12 extends Character12 {
  public weapon: string;
  constructor(name: string, damage: number, weapon: string) {
    super(name, damage);
    this.weapon = weapon;
  }
  public attack(): void {
    console.log(`Attacks his target with his ${this.weapon}.`);
  }
}

/************************************************/

/*------------------*/
/*-- Polymorphism --*/
/*------------------*/

/************************************************/
class Character101 {
  public name: string;
  public damage: number;
  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
  public talk(): void {
    console.log('Says something ...');
  }
  public attack(): void {
    console.log(`Attacks his target with his fists.`);
  }
}
class Orc101 extends Character101 {
  public weapon: string;
  constructor(name: string, damage: number, weapon: string) {
    super(name, damage);
    this.weapon = weapon;
  }
  public talk(): void {
    console.log('Says something but in orcish ...');
  }
  public attack(): void {
    console.log(`Attacks his target with his ${this.weapon}.`);
  }
}

/************************************************/

export {};

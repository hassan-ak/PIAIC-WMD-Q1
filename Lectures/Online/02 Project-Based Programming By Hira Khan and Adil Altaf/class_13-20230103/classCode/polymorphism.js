"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Country {
    constructor(name, language, population, populationGrowthRate, _statePrivacy, _leader, religion) {
        this.planet = 'Earth';
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader;
        this.religion = religion;
    }
    populationGrowth() {
        return 1;
    }
    get privateData() {
        return this._statePrivacy;
    }
    set leader(newLeader) {
        this._leader = newLeader;
    }
    greeting() {
        return 'Hello';
    }
}
class OICCountry extends Country {
    constructor(name, language, population, populationGrowthRate, statePrivacy, leader, religion = 'Islam') {
        super(name, language, population, populationGrowthRate, statePrivacy, leader, religion);
    }
    populationGrowth() {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
    greeting() {
        return 'Asalaamoalaikum';
    }
}
let Pakistan = new OICCountry('Pakistan', 'Urdu', 300000000, 2.5, "Pakistan's Private Data", "Pakistan's Leader");
console.info(Pakistan);
console.info(Pakistan.greeting());
let China = new Country('China', 'Mandarin', 1500000000, 0, "China's Private Data", "China's Leader", 'Buddism');
console.info(China);
console.info(China.greeting());

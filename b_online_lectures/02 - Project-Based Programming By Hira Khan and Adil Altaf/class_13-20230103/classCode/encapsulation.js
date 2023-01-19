"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Country {
    constructor(name, language, population, populationGrowthRate, _statePrivacy, _leader) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader;
    }
    get privateData() {
        return this._statePrivacy;
    }
    set leader(newLeader) {
        this._leader = newLeader;
    }
}
class OICCountry extends Country {
    constructor(name, language, population, populationGrowthRate, statePrivacy, leader) {
        super(name, language, population, populationGrowthRate, statePrivacy, leader);
    }
    populationGrowth() {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
}
let Pakistan = new OICCountry('Pakistan', 'Urdu', 300000000, 2.5, "Pakistan's Private Data", "Pakistan's Leader");
console.info(Pakistan);
Pakistan.name = 'Islamic Republic of Pakistan';
console.info(Pakistan);
// Error because this is a private property
// Pakistan._statePrivacy
// Success;
console.info(Pakistan.privateData);
// Error because _leader is private
// Pakistan._leader = "New Leader"
// Success because leader is a accessor and allows us to assign a new leader
Pakistan.leader = 'New Leader';
console.info(Pakistan);

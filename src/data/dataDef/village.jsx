import { villageUpkeep, maxMorale } from "../configurations.jsx";
export default class Village {
  constructor({
    population = 10,
    morale = 50,
    vegetable = 1500,
    protein = 100,
    wood = 100,
    stone = 100,
    iron = 0,
  }) {
    this.population = population;
    this.morale = morale;
    this.maxMorale = maxMorale;
    this.vegetable = vegetable;
    this.vegetableMin = villageUpkeep.vegetableCostPerPop[0] * population;
    this.vegetableMax = villageUpkeep.vegetableCostPerPop[1] * population;
    this.protein = protein;
    this.proteinMin = villageUpkeep.proteinCostPerPop[0] * population;
    this.proteinMax = villageUpkeep.proteinCostPerPop[1] * population;
    this.wood = wood;
    this.stone = stone;
    this.iron = iron;
  }

  //use negative number for substract
  addItemToVillage(item) {
    if (item.type === "Food Vegetable") {
      let t = this.vegetable + item.quantity;
      if (t < 0) t = 0; // cannot be a negative number
      this.vegetable = t;
    } else if (item.type === "Food Protein") {
      let t = this.protein + item.quantity;
      if (t < 0) t = 0;
      this.protein = t;
    }
  }

  calculateFoodUpkeep({ Bella, Elise }) {
    this.calculateVegetableUpkeep({ Bella, Elise });
    this.calculateProteinUpkeep();
  }

  calculateNPCFoodBonus(character) {
    let healthPercentage = character.health[0] / character.health[1];
    let gatherAbility = character.abilities.find((e) => e.name === "Gatherer");
    return gatherAbility.rateFormula * healthPercentage;
  }
  calculateVegetableUpkeep({ Bella, Elise }) {
    let rate = 0;
    rate = rate + this.calculateNPCFoodBonus(Bella);
    rate = rate + this.calculateNPCFoodBonus(Elise);

    let maxSub = this.vegetable - this.vegetableMax + rate;
    let minSub = this.vegetable - this.vegetableMin + rate;
    if (maxSub < 0 && minSub < 0) {
      this.vegetable = 0;
      this.addVillageMorale(-5);
      return "worst";
    }
    if (maxSub < 0 && minSub >= 0) {
      this.vegetable = 0;
      return "bad";
    }
    if (maxSub >= 0) {
      this.vegetable = maxSub;
      this.addVillageMorale(1);
      return "good";
    }
  }
  calculateProteinUpkeep() {
    let maxSub = this.protein - this.proteinMax;

    if (maxSub >= 0) {
      this.protein = maxSub;
      this.addVillageMorale(2);
      return "good";
    }
  }

  addVillageMorale(number) {
    let m = this.morale + number;
    if (m > this.maxMorale) m = this.maxMorale;
    if (m < 0) m = 0;
    this.morale = m;
  }
}

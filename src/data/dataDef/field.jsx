import { Item } from "./items/items.jsx";
import { fieldConfigurations } from "../configurations.jsx";

const plantRef = {
  ["Potato Seed Bundle"]: {
    name: "Potato Plant",
    getDays: (quality) => {
      return [0, 75 - quality * 5];
    },
    getYields: (quality, quantity) => {
      return new Item({
        quantity: 40 + quantity,
        name: "Potato",
        quality,
      });
    },
  },
  ["Coffee Seed Bundle"]: {
    name: "Potato Plant",
    getDays: (quality) => {
      return [0, 105 - quality * 5];
    },
    getYields: (quality, quantity) => {
      return new Item({
        quantity: 100 + quantity,
        name: "Coffee Seed",
        quality,
      });
    },
  },
};

export class Field {
  constructor({
    id,
    name,
    imageName,
    label,
    type = "Obstacle", //Obstacle, Plowed, Unplowed, Plant, Yield, Dead
    isWorked = false,
    isFertilized = false,
    health = [100, 100, 0],
    plant, //{} for obstacle, plowed, unplowed
  }) {
    this.id = id;
    this.name = name;
    this.imageName = imageName;
    this.label = label;
    this.type = type;
    this.isWorked = isWorked;
    this.isFertilized = isFertilized;
    this.health = health;
    this.plant = plant;
  }
  regenerateField(number) {
    if (this.health[0] <= 0) {
      this.health[2] = this.health[2] + number;
      if (this.health[2] >= this.health[1]) {
        this.health[0] = this.health[1];
        this.health[2] = 0;
      }
    }
  }
}
export class Plant {
  constructor({
    seed,
    days = null,
    quality = 1,
    status = "",
    buff = { positive: [], negative: [] }, //positive: [{rate: rate in percent}]
  }) {
    this.seed = seed;
    this.name = this.getRefFromSeed(seed).name;
    this.days = days ? days : this.getRefFromSeed(seed).getDays(quality);
    this.quality = quality;
    this.status = status;
    this.buff = buff;
  }
  getRefFromSeed(seed) {
    return plantRef[seed]
      ? plantRef[seed]
      : { name: "", getDays: () => [0, 60] };
  }
  getPlantImage() {
    let percentCompletion = (this.days[0] / this.days[1]) * 100;
    if (this.days[0] >= this.days[1]) {
      return `${this.name} 0`;
    }
    let v = percentCompletion < 25 ? `${this.name} 1` : `${this.name} 2`;
    return v;
  }
  increaseDays(number) {
    let v = this.days[0] + number;
    this.days = [v > this.days[1] ? this.days[1] : v, this.days[1]];
    //return bool
    return this.days[0] === this.days[1];
  }

  //expects the class ResearchTree as input
  calculateGrowthRate() {
    let rate = fieldConfigurations.rate;
    if (this.buff.positive && this.buff.positive.length) {
      this.buff.positive.forEach((e) => {
        if (e.rate) rate = rate + e.rate;
      });
      this.buff.negative.forEach((e) => {
        if (e.rate) rate = rate - e.rate;
      });
    }
    return rate / 100;
  }
  getYields() {
    let y = fieldConfigurations.yields;
    if (this.buff.positive && this.buff.positive.length) {
      this.buff.positive.forEach((e) => {
        if (e.yields) y = y + e.yields;
      });
      this.buff.negative.forEach((e) => {
        if (e.yields) y = y - e.yields;
      });
    }
    return plantRef[this.seed].getYields(this.quality, y);
  }
}

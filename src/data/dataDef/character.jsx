export default class Character {
  constructor({
    name = "",
    gender = "Male",
    money = 100,
    divineFavor = 0,
    energy = [100, 100],
    health = [100, 100],
    inventory = [],
    abilities = [],
  }) {
    this.name = name;
    this.gender = gender;
    this.money = money;
    this.divineFavor = divineFavor;
    this.energy = energy;
    this.health = health;
    this.inventory = inventory;
    this.abilities = abilities;
  }

  decreaseEnergy(number) {
    let v = this.energy[0] - number;
    if (v > this.energy[1]) v = this.energy[1];
    if (v <= 0) v = 0;
    this.energy[0] = v;
  }
  increaseEnergy(number) {
    let v = this.energy[0] + number;
    if (v > this.energy[1]) v = this.energy[1];
    if (v < 0) v = 0;
    this.energy[0] = v;
  }
  fillUpEnergy(string) {
    if (string === "half") {
      this.energy[0] =
        this.energy[1] / 2 < this.energy[0]
          ? this.energy[0]
          : this.energy[1] / 2;
    } else {
      this.energy[0] = this.energy[1];
    }
  }
  updateInventory(inventory) {
    this.inventory = inventory;
  }
}

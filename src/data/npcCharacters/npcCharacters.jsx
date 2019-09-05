import Item from "../inventory/item.jsx";
import { cabbageSeed, lettuceSeed } from "../inventory/seeds/seeds.jsx";
export class Character {
  constructor(npc) {
    this.name = npc.name;
    this.id = npc.id || 0;
    this.description = npc.description || "";
    this.image = npc.image;
    this.inventory = npc.inventory || null;
    this.money = npc.money || 100;
    this.gender = npc.gender;
    this.health = npc.health || [100, 100];
    this.tradable = npc.tradable || false;
    this.tradableTypes = npc.tradableTypes || null;
    this.weapons = npc.weapon;
    this.armor = npc.armor;
  }
  parseInventory() {
    this.inventory = this.inventory.map((e, i) => new Item(e));
  }
}
const cabbageSeeds = new Item(cabbageSeed);
const lettuceSeeds = new Item(lettuceSeed);
cabbageSeeds.changeQuantity(4);
lettuceSeeds.changeQuantity(4);
export const habib = {
  name: "Habib",
  id: 0,
  description: "Habib owns a general store that buys and sells useful goods.",
  image: "habib",
  inventory: [cabbageSeeds, lettuceSeeds],
  money: 600,
  gender: "male",
  health: [100, 100],
  tradable: true,
  tradableTypes: ["Herbs", "Vegetables", "Goods"],
  weapon: null,
  armor: null
};

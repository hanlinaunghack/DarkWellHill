import Character from "../dataDef/character.jsx";
import Village from "../dataDef/village.jsx";
import { gameAbilityList } from "../dataDef/gameAbility.jsx";
import { Item } from "../dataDef/items/items.jsx";
export const npcData = {
  //JOE
  Joe: new Character({
    name: "Joe",
    gender: "Male",
    money: 600,
    divineFavor: 0,
    energy: [100, 100],
    health: [100, 100],
    inventory: [
      new Item({ name: "Potato Seed Bundle", quality: 1, quantity: 10 }),
      new Item({ name: "Coffee", quality: 1, quantity: 10 }),
    ],
    abilities: [],
  }),
  //JACK
  lumberJack: new Character({
    name: "Jack",
    gender: "Male",
    money: 200,
    divineFavor: 0,
    energy: [100, 100],
    health: [100, 100],
    inventory: [],
    abilities: [],
  }),
  //BELLA (GATHERER)
  Bella: new Character({
    name: "Bella",
    gender: "Female",
    money: 50,
    divineFavor: 0,
    energy: [100, 100],
    health: [100, 100],
    inventory: [],
    abilities: [gameAbilityList.Gatherer],
  }),
  //COLE
  Cole: new Character({
    name: "Cole",
    gender: "Male",
    money: 300,
    divineFavor: 0,
    energy: [100, 100],
    health: [100, 100],
    inventory: [],
    abilities: [],
  }),
  //ELISE
  Elise: new Character({
    name: "Elise",
    gender: "Female",
    money: 50,
    divineFavor: 0,
    energy: [100, 100],
    health: [100, 100],
    inventory: [],
    abilities: [gameAbilityList.Gatherer],
  }),
};
export const villageData = new Village({});

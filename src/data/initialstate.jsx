import { axe, hoe, pick, can } from "./startingtools.jsx";
import Item from "../data/inventory/item.jsx";
import { Character, habib } from "./npcCharacters/npcCharacters.jsx";

const initialState = {
  main: {
    player: {
      name: "",
      gender: "Male",
      money: 100,
      energy: [100, 100],
      health: [100, 100],
      inventory: [new Item(axe), new Item(hoe), new Item(pick), new Item(can)],
      abilities: []
    },
    time: {
      day: 10,
      month: 1,
      year: 103,
      hour: 6
    },
    weather: "Sunny",
    fields: [],
    npc: {
      traders: { habib: new Character(habib) },
      nonTraders: [],
      soldiers: [],
      villains: []
    }
  }
};

export default initialState;

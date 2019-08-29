import Tools from "./startingtools.jsx";
import { rock, tree, soil, tilledSoil } from "./field/fieldData.js";

const randomField = arr => {
  var output = new Array(9);
  return output.map((e, i) => {
    let randomId = Math.floor(Math.random() * arr.length);
    let randomedObj = arr[randomId] ? arr[randomId] : soil;
    let obj = { ...randomedObj };
    obj.id = i;
    return obj;
  });
};
const initialState = {
  main: {
    player: {
      name: "",
      gender: "Male",
      money: 100,
      energy: [100, 100],
      health: [100, 100],
      inventory: [Tools.axe, Tools.hoe, Tools.pick, Tools.can],
      abilities: []
    },
    time: {
      day: 10,
      month: 1,
      year: 103,
      hour: 6
    },
    weather: "Sunny",
    field: randomField([rock, tree, soil, tilledSoil]) //add to the list here!!
  }
};

export default initialState;

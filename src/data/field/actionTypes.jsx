import { axe, pick, hoe, can } from "../startingtools.jsx";

class ActionType {
  constructor(name, requireItems, energyCost, timeCost) {
    this.name = name;
    this.requireItems = requireItems;
    this.energyCost = energyCost;
    this.timeCost = timeCost;
  }
}

const Crush = new ActionType("Crush", [pick], 30, 1);
const Chop = new ActionType("Chop", [axe], 30, 1);
const Plow = new ActionType("Plow", [hoe], 20, 1);
const Water = new ActionType("Water", [can], 20, 1);

const actionTypes = {
  Crush,
  Chop,
  Plow,
  Water
};

export default actionTypes;

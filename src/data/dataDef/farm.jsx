import { Plant } from "./field.jsx";
import { ResearchTree } from "./researchTree.jsx";
import { fieldConfigurations } from "../configurations.jsx";

const unworkAllTiles = function (e, unlockables) {
  if (e.type === "Plant" && e.plant.name) {
    let plant = new Plant(e.plant);
    let growthRate = plant.calculateGrowthRate();

    //adds farmer research bonus on top of growth rate.
    let daysOutput = farmerResearchBonus({ unlockables, field: e, growthRate });
    let harvestable = plant.increaseDays(daysOutput);
    e.imageName = plant.getPlantImage(); //update plant image
    e.plant = plant;
    if (harvestable) e.type = "Yield"; //check if it is harvestable
  }
  e.isWorked = false;
  return e;
};

export default class Farm {
  constructor({ smallField, mediumField, largeField, level }) {
    this.smallField = smallField;
    this.mediumField = mediumField;
    this.largeField = largeField;
    this.level = level;
  }
  unworkAllTiles({ player, unlockables }) {
    this.smallField = this.smallField.map((e) => {
      return unworkAllTiles(e, unlockables);
    });
    this.mediumField = this.mediumField.map((e) => {
      return unworkAllTiles(e, unlockables);
    });
    this.largeField = this.largeField.map((e) => {
      return unworkAllTiles(e, unlockables);
    });
  }
}

function farmerResearchBonus({ unlockables, field, growthRate }) {
  let researchTree = new ResearchTree(unlockables.researchTree);
  let rate = 2;
  if (researchTree.findResearch("Farmer")) {
    rate = rate + fieldConfigurations.r_farmerOneBonus;
  }
  if (researchTree.findResearch("Farmer 2")) {
    rate = rate + fieldConfigurations.r_farmerTwoBonus;
  }
  if (researchTree.findResearch("Farmer 2")) {
    rate = rate + fieldConfigurations.r_farmerThreeBonus;
  }
  return (field.isWorked ? rate : 1) * growthRate;
}

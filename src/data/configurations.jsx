export const fieldConfigurations = {
  rate: 100, //plant growth rate
  yields: 50, //bonus plant yields rate
  r_farmerOneBonus: 1, //bonus number of days when worked
  r_farmerTwoBonus: 1, //bonus number of days when worked
  r_farmerThreeBonus: 1, //bonus number of days when worked
};

export const energyCost = {
  plantingSeed: 20, ///energy cost to plant seeds
  removeObstacle: 10, //energy cost to damage an obstacle
  plowField: 50, ///energy cost to plow a field
  workField: 20, ///energy cost to work on a field
  harvest: 20, ///energy cost to harvest
  collectBerries: 20,
  fishing: 10,
};

export const timeCost = {
  plantingSeed: 20, ///time cost to plant seeds
  removeObstacle: 20, ///time cost to damage an obstacle
  plowField: 50, //time cost to plow a field
  workField: 30, ///time cost to work on a field
  harvest: 30, ///time cost to harvest
  collectBerries: 10,
  fishing: 50,
};

export const healthCost = {
  removeObstacle: 10, ///health damage to the obstacle
};

export const inventoryEligibleItem = (type) => {
  return (
    type === "Seeds" ||
    type === "Food Vegetable" ||
    type === "Food Protein" ||
    type === "Food consumable" ||
    type === "Raw Materials" ||
    type === "Fertilizer"
  );
};

export const plantableItem = (type) => {
  return type === "Seeds";
};
export const fertilizerItem = (type) => {
  return type === "Fertilizer";
};
export const fertilizerRate = {
  ["Miracle Growth"]: {
    rate: (q) => q * 50,
  },
};

export const sellableItem = (type) => {
  return type === "Food Vegetable" || type === "Food Protein";
};

export const villageUpkeep = {
  vegetableCostPerPop: [2, 4],
  proteinCostPerPop: [0, 1],
};

export const maxMorale = 200;

export const researchCost = {
  ["Farmer"]: {
    moneyCost: 0,
  },
  ["Farmer 2"]: {
    moneyCost: 1000,
  },
  ["Farmer 3"]: {
    moneyCost: 5000,
  },
  ["Harvester"]: {
    moneyCost: 1000,
  },
  ["Smith"]: {
    moneyCost: 1000,
  },
  ["Extra Field"]: {
    moneyCost: 1000,
  },
  ["Extra Field 2"]: {
    moneyCost: 5000,
  },
  ["Endurance"]: {
    moneyCost: 1000,
  },
  ["Endurance 2"]: {
    moneyCost: 5000,
  },
};

export const moneyUnit = "Gold";
export const restockingMerchants = ["Joe"];

const plantable = {
  ["Potato Seed Bundle"]: {
    value: 50,
    type: "Seeds",
    qualityValueFormula: (q) => 50 * (1 + q),
    description: "Grows some delicious potatoes.",
  },
  ["Coffee Seed Bundle"]: {
    value: 50,
    type: "Seeds",
    qualityValueFormula: (q) => 50 * (1 + q),
    description: "Grows coffee beans.",
  },
  ["Miracle Growth"]: {
    value: 50,
    type: "Fertilizer",
    qualityValueFormula: (q) => 20 * (1 + q),
    description: "Increases the growth rate of your seeds",
  },
};

const usable = {
  ["Coffee"]: {
    value: 10,
    type: "Food consumable",
    isUsable: true,
    qualityValueFormula: (q) => 10 * (1 + q),
    description: "Increase Energy",
  },
};

/*
Give it the name of item and it will return type, value and description
*/
export const itemValueRef = {
  ...plantable,
  ...usable,
  ["Axe"]: {
    value: 0,
    type: "Tools",
    qualityValueFormula: (q) => 0 * (1 + q),
    description: "Used to chop woods.",
  },
  ["Pick"]: {
    value: 0,
    type: "Tools",
    qualityValueFormula: (q) => 0 * (1 + q),
    description: "Used to break rocks.",
  },
  ["Hoe"]: {
    value: 0,
    type: "Tools",
    qualityValueFormula: (q) => 0 * (1 + q),
    description: "Used to till the fields.",
  },
  ["Lumber"]: {
    value: 3,
    type: "Raw Materials",
    qualityValueFormula: (q) => 3 * (6 + q),
    description: "Used to build things",
  },
  ["Coffee Beans"]: {
    value: 5,
    type: "Raw Food",
    qualityValueFormula: (q) => 5 * (1 + q),
    description: "Unprocessed Coffee beans.",
  },
  ["Potato"]: {
    value: 2,
    type: "Food Vegetable",
    qualityValueFormula: (q) => 2 * (1 + q),
    description: "A staple food source.",
  },
  ["Berries"]: {
    value: 1,
    type: "Food Vegetable",
    qualityValueFormula: (q) => 1 * q,
    description: "Very sweet edible food.",
  },
  ["Carp"]: {
    value: 2,
    type: "Food Protein",
    qualityValueFormula: (q) => 2 * q,
    description: "A deep fresh water fish.",
  },
};

/*
give it the name of food and it will return the name of seed it came from
give it a quality to find its rarity : 1 to result
*/
export const itemSeedRef = {
  ["Potato Seed Bundle"]: {
    nameOfOrigin: null,
    rarity: (q) => Math.floor(Math.random() * (3 + q * 2)),
  },
  ["Potato"]: {
    nameOfOrigin: "Potato Seed Bundle",
    rarity: (q) => Math.floor(Math.random() * (5 + q * 2)),
  },
  ["Berries"]: {
    nameOfOrigin: null,
    rarity: (q) => Math.floor(Math.random() * (2 + q)),
  },
  ["Coffee Seed Bundle"]: {
    nameOfOrigin: null,
    rarity: (q) => Math.floor(Math.random() * (7 + q * 3)),
  },
  ["Coffee Beans"]: {
    nameOfOrigin: "Coffee Seed Bundle",
    rarity: (q) => Math.floor(Math.random() * (6 + q * 3)),
  },
  ["Coffee"]: {
    nameOfOrigin: "Coffee Beans",
    rarity: (q) => Math.floor(Math.random() * (15 + q * 3)),
  },
  ["Miracle Growth"]: {
    nameOfOrigin: null,
    rarity: (q) => Math.floor(Math.random() * (4 + q * 3)),
  },
};

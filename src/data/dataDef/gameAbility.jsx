export default class GameAbility {
  constructor({ type, level = 1, name, rateFormula }) {
    this.type = type;
    this.level = level;
    this.name = name;
    this.rateFormula = rateFormula;
  }
}

export const gameAbilityList = {
  Farmer: new GameAbility({
    name: "Farmer",
    type: "player buff",
    level: 1,
    rateFormula: null,
  }),
  Gatherer: new GameAbility({
    name: "Gatherer",
    type: "npc buff",
    level: 1,
    rateFormula: 10,
  }),
};

/**
 * types:
 * village buff
 * farm buff
 * player buff
 * npc buff
 */

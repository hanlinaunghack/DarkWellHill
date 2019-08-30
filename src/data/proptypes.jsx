import Proptypes from "prop-types";

const abilityProptype = {
  name: Proptypes.string,
  level: Proptypes.number,
  type: Proptypes.string,
  description: Proptypes.string
};
const itemProptype = {
  name: Proptypes.string,
  quantity: Proptypes.number,
  value: Proptypes.number,
  type: Proptypes.string,
  description: Proptypes.string
};
const playerProptype = {
  name: Proptypes.string,
  gender: Proptypes.string,
  money: Proptypes.number,
  energy: Proptypes.arrayOf(Proptypes.number),
  health: Proptypes.arrayOf(Proptypes.number),
  abilities: Proptypes.arrayOf(abilityProptype),
  inventory: Proptypes.arrayOf(itemProptype)
};
const timeProptype = {
  day: Proptypes.number,
  month: Proptypes.number,
  year: Proptypes.number,
  hour: Proptypes.number
};
const actionProptype = {
  name: Proptypes.string,
  requireItems: Proptypes.arrayOf(itemProptype),
  energyCost: Proptypes.number,
  timeCost: Proptypes.number
};
const fieldsProptype = {
  id: Proptypes.number,
  name: Proptypes.string,
  description: Proptypes.string,
  image: Proptypes.string,
  type: Proptypes.string,
  isWorked: Proptypes.bool,
  actionTypes: Proptypes.arrayOf(actionProptype),
  quality: Proptypes.number,
  halfLife: Proptypes.number //in days
};
const main = {
  player: Proptypes.exact(playerProptype),
  weather: Proptypes.string,
  time: Proptypes.exact(timeProptype),
  fields: Proptypes.arrayOf(fieldsProptype)
};

export default main;

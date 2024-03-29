import Proptypes from "prop-types";

const abilityProptype = {
  name: Proptypes.string,
  level: Proptypes.number,
  type: Proptypes.string,
  description: Proptypes.string,
};
const itemProptype = {
  name: Proptypes.string,
  quantity: Proptypes.number,
  value: Proptypes.number,
  type: Proptypes.string,
  description: Proptypes.string,
};
const playerProptype = {
  name: Proptypes.string,
  gender: Proptypes.string,
  money: Proptypes.number,
  energy: Proptypes.arrayOf(Proptypes.number),
  health: Proptypes.arrayOf(Proptypes.number),
  abilities: Proptypes.arrayOf(abilityProptype),
  inventory: Proptypes.arrayOf(itemProptype),
};
const timeProptype = {
  day: Proptypes.number,
  month: Proptypes.number,
  year: Proptypes.number,
  hour: Proptypes.number,
  minute: Proptypes.number,
};

const displayProptype = {
  messageDisplay: Proptypes.bool,
  statusbarDisplay: Proptypes.bool,
};

const main = {
  display: Proptypes.exact(displayProptype),
  player: Proptypes.exact(playerProptype),
  weather: Proptypes.string,
  time: Proptypes.exact(timeProptype),
};

export default main;

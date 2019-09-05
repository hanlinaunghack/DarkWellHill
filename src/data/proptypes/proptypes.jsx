import Proptypes from "prop-types";
import npcTypesProptype from "./npcTypesProptypes.jsx";
import itemProptype from "./itemProptypes.jsx";
import fieldsProptype from "./fieldProptypes.jsx";

const abilityProptype = {
  name: Proptypes.string,
  level: Proptypes.number,
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

const mainProptype = {
  player: Proptypes.exact(playerProptype),
  weather: Proptypes.string,
  time: Proptypes.exact(timeProptype),
  fields: Proptypes.arrayOf(fieldsProptype),
  npc: Proptypes.exact(npcTypesProptype)
};

export default mainProptype;

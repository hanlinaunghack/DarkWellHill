import Proptypes from "prop-types";
import itemProptype from "./itemProptypes.jsx";

const npcProptype = {
  name: Proptypes.string,
  description: Proptypes.string,
  alive: Proptypes.bool,
  tradable: Proptypes.bool,
  id: Proptypes.number,
  money: Proptypes.number,
  skillLevel: Proptypes.number,
  friendshipLevel: Proptypes.number,
  health: Proptypes.arrayOf(Proptypes.number),
  inventory: Proptypes.arrayOf(itemProptype),
  tradableTypes: Proptypes.arrayOf(Proptypes.string),
  weapon: Proptypes.exact(itemProptype),
  armor: Proptypes.exact(itemProptype)
};
const traderNpcProptype = {
  habib: Proptypes.exact(npcProptype)
};
const npcTypesProptype = {
  traders: Proptypes.exact(traderNpcProptype),
  nonTraders: Proptypes.arrayOf(npcProptype),
  villains: Proptypes.arrayOf(npcProptype),
  soldiers: Proptypes.arrayOf(npcProptype)
};
export default npcTypesProptype;

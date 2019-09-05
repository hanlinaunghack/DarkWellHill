import Proptypes from "prop-types";
import itemProptype from "./itemProptypes.jsx";
const actionProptype = {
  name: Proptypes.string,
  requireItems: Proptypes.arrayOf(itemProptype),
  energyCost: Proptypes.number,
  timeCost: Proptypes.number
};
const plantProptype = {
  name: Proptypes.string,
  season: Proptypes.string,
  daysNeeded: Proptypes.number,
  stage: Proptypes.number,
  quality: Proptypes.number,
  yield: Proptypes.number,
  health: Proptypes.number
};
const fieldsProptype = {
  id: Proptypes.number,
  name: Proptypes.string,
  description: Proptypes.string,
  image: Proptypes.string,
  type: Proptypes.string,
  plant: Proptypes.exact(plantProptype),
  isWorked: Proptypes.bool,
  isWatered: Proptypes.bool,
  actionTypes: Proptypes.arrayOf(actionProptype),
  quality: Proptypes.number,
  halfLife: Proptypes.number //in days
};
export default fieldsProptype;

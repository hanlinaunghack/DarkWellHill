import { actionFunctions } from "./actionObject.jsx";
import actionTypes from "./actionTypes.jsx";
import inventoryCheck from "../inventory/inventoryCheck.jsx";
import timeCheck from "../time/timeChecker.jsx";

const actionTrigger = function(actionType, fieldId, fields, player, time) {
  var energyCost = actionTypes[actionType].energyCost;
  var requireItems = actionTypes[actionType].requireItems;
  if (player.energy[0] < energyCost) {
    alert("You do not have enough energy to perform this task!");
  } else if (!timeCheck(20, time.hour)) {
    //after 8pm you need to go to bed
    alert("It is getting late.");
  } else if (!inventoryCheck(player.inventory, requireItems)) {
  } else {
    //first substract the energy cost
    player.energy[0] = player.energy[0] - energyCost;
    actionFunctions[actionType](fieldId, fields);
  }
  return { player, fields, time };
};

export { actionTrigger };

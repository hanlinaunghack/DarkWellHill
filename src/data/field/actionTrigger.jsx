import { actionEnergyCost, actionFunctions } from "./actionObject.jsx";

const actionTrigger = function(actionType, fieldId, fields, player) {
  var energyCost = actionEnergyCost[actionType];
  if (player.energy[0] < energyCost) {
    alert("You do not have enough energy to perform this task!");
    return { player, fields };
  } else {
    //first substract the energy cost
    player.energy[0] = player.energy[0] - energyCost;
    fields = actionFunctions[actionType](fieldId, fields);
    return { player, fields };
  }
};

export { actionTrigger };

import {
  FieldObject,
  rock,
  tree,
  treeStump,
  soil,
  tilledSoil
} from "./fieldData.jsx";

const actionFunctions = {
  Chop: chopFunction,
  Water: waterFunction,
  Crush: crushFunction,
  Plow: plowFunction
};

export { actionFunctions };
function chopFunction(fieldId, fields) {
  let currField = fields[fieldId];
  currField.constructFieldObject(soil);
}
function plowFunction(fieldId, fields) {
  let currField = fields[fieldId];
  currField.constructFieldObject(tilledSoil);
}
function crushFunction(fieldId, fields) {
  let currField = fields[fieldId];
  currField.constructFieldObject(soil);
}
function waterFunction(fieldId, fields) {
  fields[fieldId].isWatered = true;
}

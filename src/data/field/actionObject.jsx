import { soil } from "./fieldData.jsx";

const actionEnergyCost = {
  Chop: 30,
  Water: 10,
  Crush: 30,
  Plow: 20
};
const actionFunctions = {
  Chop: chopFunction,
  Water: 10,
  Crush: crushFunction,
  Plow: 20
};

export { actionEnergyCost, actionFunctions };
function chopFunction(fieldId, fields) {
  return fields.map((e, i) => {
    if (i === fieldId) {
      return { ...soil, id: fieldId };
    } else {
      return e;
    }
  });
}
function crushFunction(fieldId, fields) {
  fields[fieldId] = { ...soil, id: fieldId };
  return fields;
}

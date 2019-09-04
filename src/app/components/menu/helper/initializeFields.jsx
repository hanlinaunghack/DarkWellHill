import { soil, FieldObject } from "../../../../data/field/fieldData.jsx";
const initializeFields = function(arr) {
  var output = [];
  for (let i = 0; i < 9; i++) {
    let fieldObject = new FieldObject(soil);
    fieldObject.initializeRandomFieldObject(arr, i);
    output.push(fieldObject);
  }
  return output;
};

export default initializeFields;

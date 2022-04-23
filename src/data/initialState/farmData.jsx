import { Field } from "../dataDef/field.jsx";
import Farm from "../dataDef/farm.jsx";
var id = 0;

export const farm = new Farm({
  smallField: createObstacleFields(4),
  mediumField: createObstacleFields(8),
  largeField: createObstacleFields(12),
  level: 1,
});

function createObstacleFields(number) {
  let output = [];
  while (number > 0) {
    let field = new Field({
      id,
      name: "rocks",
      imageName: "rocks",
      label: "Rocks",
      type: "Obstacle",
      isWorked: false,
      health: [100, 100, 0],
      plant: {},
    });
    output.push(field);
    id = id + 1;
    number = number - 1;
  }
  return output;
}

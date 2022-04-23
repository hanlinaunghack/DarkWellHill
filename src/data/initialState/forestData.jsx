import { Field } from "../dataDef/field.jsx";

var id = 0;

export const forestData = {
  mines: {},
  pond: {},
  fields: createObstacleFields(5),
};

function createObstacleFields(number) {
  let output = [];
  while (number > 0) {
    let field = new Field({
      id,
      name: "treeStump",
      imageName: "treeStump",
      label: "Tree Stump",
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

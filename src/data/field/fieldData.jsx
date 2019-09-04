import actionTypes from "./actionTypes.jsx";

const rock = {
  name: "Rocks",
  type: "Obstacle",
  description: "Use your pick to crush them.",
  image: "rock",
  actionTypes: [actionTypes.Crush]
};
const tree = {
  name: "Trees",
  type: "Obstacle",
  description: "Use your axe to chop them.",
  image: "tree",
  actionTypes: [actionTypes.Chop]
};
const treeStump = {
  name: "Tree Stump",
  type: "Obstacle",
  description: "Use your axe to chop them.",
  image: "tree",
  actionTypes: [actionTypes.Chop]
};
const soil = {
  name: "Soil",
  type: "Soil",
  description: "Untilled soiled, use your hoe to till the soil.",
  image: "soil",
  actionTypes: [actionTypes.Plow]
};
const tilledSoil = {
  name: "Tilled Soil",
  type: "Soil",
  description: "Tilled soiled, plant your vegetables.",
  image: "tilledsoil",
  actionTypes: [actionTypes.Water]
};

export class FieldObject {
  constructor(fieldObject, idx = 0) {
    this.name = fieldObject.name;
    this.type = fieldObject.type;
    this.image = fieldObject.image;
    this.description = fieldObject.description;
    this.actionTypes = fieldObject.actionTypes;
    this.id = idx;
    this.quality = 0;
    this.halfLife = 0;
    this.isWorked = false;
    this.isWatered = false;
  }
  constructFieldObject(object, idx = 0) {
    this.name = object.name;
    this.type = object.type;
    this.description = object.description;
    this.actionTypes = object.actionTypes;
    this.id = idx;
  }
  initializeRandomFieldObject(arr, i) {
    let randomId = Math.floor(Math.random() * arr.length);
    let randomedObj = arr[randomId] ? arr[randomId] : soil;
    this.constructFieldObject(randomedObj, i);
  }
}

export { rock, tree, treeStump, soil, tilledSoil };
// name: Proptypes.string,
// description: Proptypes.string,
// image: Proptypes.string,
// type: Proptypes.string,
// energyCost: Proptypes.number,
// timeCost: Proptypes.number,
// quality: Proptypes.number,
// halfLife: Proptypes.number //in days

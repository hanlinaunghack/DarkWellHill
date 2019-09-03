import { chop, crush, plow, water } from "./actionTypes.jsx";
const rock = {
  name: "Rocks",
  description: `Use your pick to crush them.`,
  type: "Obstacle",
  image: "rock",
  id: 0,
  actionTypes: [crush],
  quality: 0,
  halfLife: 0,
  isWorked: false
};
const tree = {
  name: "Trees",
  description: `Use your axe to chop them.`,
  type: "Obstacle",
  image: "",
  id: 0,
  actionTypes: [chop],
  quality: 0,
  halfLife: 0,
  isWorked: false
};
const treeStump = {
  name: "TreeStump",
  description: `Use your axe to chop them.`,
  type: "Obstacle",
  image: "treestump",
  id: 0,
  actionTypes: [chop],
  quality: 0,
  halfLife: 0,
  isWorked: false
};
const soil = {
  name: "Soil",
  description: `Untilled soiled, use your hoe to till the soil`,
  type: "Soil",
  image: "soil",
  id: 0,
  actionTypes: [plow],
  quality: 0,
  halfLife: 0,
  isWorked: false
};
const tilledSoil = {
  name: "Tilled Soil",
  description: `Tilled soiled, plant your vegetables`,
  type: "Soil",
  image: "tilledsoil",
  id: 0,
  actionTypes: [water],
  quality: 0,
  halfLife: 0,
  isWorked: false
};

export { rock, tree, treeStump, soil, tilledSoil };
// name: Proptypes.string,
// description: Proptypes.string,
// image: Proptypes.string,
// type: Proptypes.string,
// energyCost: Proptypes.number,
// timeCost: Proptypes.number,
// quality: Proptypes.number,
// halfLife: Proptypes.number //in days

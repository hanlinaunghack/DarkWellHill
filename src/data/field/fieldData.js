var { chop, crush, plow, water } = require("./actionTypes.js");
module.exports.rock = {
  name: "Rocks",
  description: `Use your pick to crush them.`,
  type: "Obstacle",
  image: "",
  id: 0,
  actionTypes: [crush],
  quality: 0,
  halfLife: 0
};
module.exports.tree = {
  name: "Trees",
  description: `Use your axe to chop them.`,
  type: "Obstacle",
  image: "",
  id: 0,
  actionTypes: [chop],
  quality: 0,
  halfLife: 0
};
module.exports.soil = {
  name: "Soil",
  description: `Untilled soiled, use your hoe to till the soil`,
  type: "Soil",
  image: "",
  id: 0,
  actionTypes: [plow],
  quality: 0,
  halfLife: 0
};
module.exports.tilledSoil = {
  name: "Tilled Soil",
  description: `Tilled soiled, plant your vegetables`,
  type: "Soil",
  image: "",
  id: 0,
  actionTypes: [water],
  quality: 0,
  halfLife: 0
};

// name: Proptypes.string,
// description: Proptypes.string,
// image: Proptypes.string,
// type: Proptypes.string,
// energyCost: Proptypes.number,
// timeCost: Proptypes.number,
// quality: Proptypes.number,
// halfLife: Proptypes.number //in days

var { axe, pick, hoe, can } = require("../startingtools.jsx");

module.exports.crush = {
  name: "Crush",
  requireItems: [pick],
  energyCost: 5,
  timeCost: 1
};
module.exports.chop = {
  name: "Chop",
  requireItems: [axe],
  energyCost: 5,
  timeCost: 1
};
module.exports.plow = {
  name: "Plow",
  requireItems: [hoe],
  energyCost: 5,
  timeCost: 1
};
module.exports.water = {
  name: "Water",
  requireItems: [can],
  energyCost: 5,
  timeCost: 1
};

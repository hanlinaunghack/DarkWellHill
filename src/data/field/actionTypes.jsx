import { axe, pick, hoe, can } from "../startingtools.jsx";

const crush = {
  name: "Crush",
  requireItems: [pick],
  energyCost: 5,
  timeCost: 1
};
const chop = {
  name: "Chop",
  requireItems: [axe],
  energyCost: 5,
  timeCost: 1
};
const plow = {
  name: "Plow",
  requireItems: [hoe],
  energyCost: 5,
  timeCost: 1
};
const water = {
  name: "Water",
  requireItems: [can],
  energyCost: 5,
  timeCost: 1
};

export { crush, chop, plow, water };

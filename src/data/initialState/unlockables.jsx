import { ResearchTree } from "../dataDef/researchTree.jsx";

const farmerThreeNode = {
  name: "Farmer 3",
  isResearched: false,
  isUnlocked: false,
  children: [],
};
const farmerTwoNode = {
  name: "Farmer 2",
  isResearched: false,
  isUnlocked: false,
  children: [new ResearchTree(farmerThreeNode)],
};
const harvesterNode = {
  name: "Harvester",
  isResearched: false,
  isUnlocked: false,
  children: [],
};
const enduranceNode2 = {
  name: "Endurance 2",
  isResearched: false,
  isUnlocked: false,
  children: [],
};
const enduranceNode = {
  name: "Endurance",
  isResearched: false,
  isUnlocked: false,
  children: [new ResearchTree(enduranceNode2)],
};
const rootNodeFarmer = {
  name: "Farmer",
  isResearched: false,
  isUnlocked: true,
  children: [
    new ResearchTree(farmerTwoNode),
    new ResearchTree(harvesterNode),
    new ResearchTree(enduranceNode),
  ],
};
const rootNodeSmith = {
  name: "Smith",
  isResearched: false,
  isUnlocked: true,
  children: [],
};

const rootNodeExtraField2 = {
  name: "Extra Field 2",
  isResearched: false,
  isUnlocked: false,
  children: [],
};
const rootNodeExtraField = {
  name: "Extra Field",
  isResearched: false,
  isUnlocked: true,
  children: [new ResearchTree(rootNodeExtraField2)],
};

export const unlockables = {
  researchBook: false,
  researchTree: new ResearchTree({
    name: "root",
    isResearched: true,
    isUnlocked: true,
    children: [
      new ResearchTree(rootNodeFarmer),
      new ResearchTree(rootNodeSmith),
      new ResearchTree(rootNodeExtraField),
    ],
  }),
};

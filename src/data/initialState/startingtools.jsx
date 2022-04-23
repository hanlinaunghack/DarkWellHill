import { Item } from "../dataDef/items/items.jsx";

const axe = new Item({
  name: "Axe",
  quantity: 1,
  quality: 1,
  value: 0,
  type: "Tools",
  description: "Used to chop woods.",
});
const pick = new Item({
  name: "Pick",
  quantity: 1,
  quality: 1,
  value: 0,
  type: "Tools",
  description: "Used to break rocks.",
});
const hoe = new Item({
  name: "Hoe",
  quantity: 1,
  quality: 1,
  value: 0,
  type: "Tools",
  description: "Used to till the fields.",
});

const tools = { axe, pick, hoe };

export default tools;

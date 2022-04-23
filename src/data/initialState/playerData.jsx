import Tools from "./startingtools.jsx";
import Calendar from "../dataDef/calendar.jsx";
import Character from "../dataDef/character.jsx";

export const player = new Character({
  name: "",
  gender: "Male",
  money: 100,
  divineFavor: 0,
  energy: [100, 100],
  health: [100, 100],
  inventory: [Tools.axe, Tools.hoe, Tools.pick],
  abilities: [],
});

export const display = {
  bottomMessageWindow: false,
  rightStatusbarDisplay: false,
  messageDisplay: false,
};

export const time = new Calendar({
  day: 16,
  month: 3,
  year: 327,
  hour: 6,
  minute: 0,
});

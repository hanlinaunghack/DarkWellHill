import Tools from "./startingtools.jsx";

const initialState = {
  main: {
    player: {
      name: "",
      gender: "Male",
      money: 100,
      energy: [100, 100],
      health: [100, 100],
      inventory: [Tools.axe, Tools.hoe, Tools.pick],
      abilities: []
    },
    time: {
      day: 10,
      month: 1,
      year: 103,
      hour: 6
    },
    weather: "Sunny"
  }
};

export default initialState;

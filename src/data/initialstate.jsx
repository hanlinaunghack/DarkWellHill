import { player, time, display } from "./initialState/playerData.jsx";
import { farm } from "./initialState/farmData.jsx";
import { eventList } from "./initialState/eventList.jsx";
import { npcData, villageData } from "./initialState/npcData.jsx";
import { forestData } from "./initialState/forestData.jsx";
import { unlockables } from "./initialState/unlockables.jsx";

const initialState = {
  main: {
    display,
    player,
    npcData,
    time,
    farm,
    villageData,
    forestData,
    currentLocation: "home",
    weather: "Sunny",
    eventList,
    unlockables,
  },
};

export default initialState;

import Calendar from "../../../data/dataDef/calendar.jsx";
import Character from "../../../data/dataDef/character.jsx";
import Farm from "../../../data/dataDef/farm.jsx";
import Village from "../../../data/dataDef/village.jsx";

import {
  npcReplenishment,
  forestReplenishment,
} from "../shared/npcReplenishment.utility/npcReplenishment.utility.jsx";

const endOfDay = async (props) => {
  let time = new Calendar(props.main.time);
  let player = new Character(props.main.player);
  let isOverTimed = time.checkValidity();

  let farm = new Farm(props.main.farm);

  if (isOverTimed) {
    player.fillUpEnergy("half");
    //you do not need to increase day and reset time for this because it is already handled
  } else {
    time.increaseDayAndResetTime();
    player.fillUpEnergy();
  }
  farm.unworkAllTiles(props.main);
  let npcData = npcReplenishment({ ...props.main.npcData });
  let forestData = forestReplenishment({ ...props.main.forestData });
  let villageData = new Village({ ...props.main.villageData });
  villageData.calculateFoodUpkeep({
    Bella: props.main.npcData.Bella,
    Elise: props.main.npcData.Elise,
  });

  let data = {
    ...props.main,
    player,
    npcData,
    villageData,
    forestData,
    time,
    farm,
  };
  await props.saveState(data);

  props.nextEventFinder();
};

export default endOfDay;

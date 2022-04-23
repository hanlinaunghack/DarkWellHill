import React from "react";
import Button from "react-bootstrap/Button";
import Calendar from "../../../data/dataDef/calendar.jsx";
import { Inventory } from "../../../data/dataDef/items/items.jsx";
import { getRandomNumber } from "../../api/utility.js";
import { energyCost, timeCost } from "../../../data/configurations.jsx";

const getFishHandler = (props) => {
  if (props.player.energy[0] >= energyCost.fishing) {
    let randomNumber = getRandomNumber(0, 5);
    props.player.energy[0] = props.player.energy[0] - energyCost.fishing;

    let t = new Calendar(props.time);
    t.increaseMinute(timeCost.fishing);

    if (randomNumber === 1) {
      let inventory = new Inventory({ items: props.player.inventory });
      inventory.addItemToInventory({ name: "Carp", quantity: 1, quality: 1 });
      props.player.inventory = inventory.items;
    } else {
      alert("You didn't catch any fish");
    }
    props.savePlayer(props.player);
    props.updateCalendar(t);
  } else {
    alert("You are too tired to work");
  }
};
const ForestFishing = (props) => {
  return (
    <div>
      <Button onClick={() => getFishHandler(props)}>Go Fishing</Button>
    </div>
  );
};
export default ForestFishing;

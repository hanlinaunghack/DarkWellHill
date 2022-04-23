import React from "react";
import Button from "react-bootstrap/Button";
import Calendar from "../../../data/dataDef/calendar.jsx";
import { Inventory } from "../../../data/dataDef/items/items.jsx";
import { energyCost, timeCost } from "../../../data/configurations.jsx";

const collectHandler = (props) => {
  if (props.player.energy[0] >= energyCost.collectBerries) {
    let inventory = new Inventory({ items: props.player.inventory });
    let t = new Calendar(props.time);
    t.increaseMinute(timeCost.collectBerries);

    inventory.addItemToInventory({ name: "Berries", quantity: 1, quality: 1 });
    props.player.energy[0] = props.player.energy[0] - energyCost.collectBerries;
    props.player.inventory = inventory.items;
    props.savePlayer(props.player);
    props.updateCalendar(t);
  } else {
    alert("You are too tired to work");
  }
};

const collectBerries = (props) => {
  return (
    <div>
      <Button onClick={() => collectHandler(props)}>Collect Berries</Button>
    </div>
  );
};
export default collectBerries;

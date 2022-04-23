import { Field, Plant } from "../../../data/dataDef/field.jsx";
import { addItemToInventory } from "../../../data/dataDef/items/items.jsx";

export const fieldHelper = function ({
  item,
  plotType,
  fieldHealth,
  field,
  player,
}) {
  switch (plotType) {
    case "Obstacle":
      if (fieldHealth <= 0) {
        return new Field({
          id: item.id,
          name: "greenField",
          imageName: "greenField",
          label: "Field",
          type: "Unplowed", //Obstacle, Plowed, Unplowed, Plant, Yield
          isWorked: false,
          health: [100, 100, 0],
          plant: {}, //{} for obstacle, plowed, unplowed})
        });
      }
      return field;
    case "Unplowed":
      return new Field({
        id: item.id,
        name: "soil",
        imageName: "soil",
        label: "Field",
        type: "Plowed", //Obstacle, Plowed, Unplowed, Plant, Yield
        isWorked: false,
        health: [100, 100, 0],
        plant: {}, //{} for obstacle, plowed, unplowed})
      });
    case "Plant":
      field.isWorked = true;
      //change plant status here for a later time
      return field;
    case "Yield":
      let plant = new Plant(item.plant);
      let inventory = addItemToInventory(player.inventory, plant.getYields());
      player.updateInventory(inventory);
      return new Field({
        id: item.id,
        name: "greenField",
        imageName: "greenField",
        label: "Field",
        type: "Unplowed", //Obstacle, Plowed, Unplowed, Plant, Yield
        isWorked: false,
        health: [100, 100, 0],
        plant: {}, //{} for obstacle, plowed, unplowed})
      });
    default:
      return field;
  }
};

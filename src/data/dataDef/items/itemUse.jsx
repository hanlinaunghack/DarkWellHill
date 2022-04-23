import { Item, Inventory } from "./items.jsx";
import Character from "../character.jsx";
export const itemUse = {
  Coffee: function (main, itemClicked, saveState) {
    let player = new Character(main.player);
    if (player.energy[0] === player.energy[1]) {
      alert("You have full energy");
      return;
    }
    player.inventory = inventoryUseHelper(player, itemClicked);
    player.increaseEnergy(50);
    saveState({
      ...main,
      player,
    });
  },
};

function inventoryUseHelper(player, itemClicked) {
  let playerInventory = new Inventory({ items: player.inventory });
  playerInventory.removeItemFromInventory(
    new Item({
      name: itemClicked.name,
      quality: itemClicked.quality,
      quantity: 1,
    })
  );
  return playerInventory.items;
}

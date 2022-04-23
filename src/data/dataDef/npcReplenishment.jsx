import { Inventory } from "./items/items.jsx";
import { itemSeedRef } from "./items/itemRef.jsx";

//this is a helper method for npcReplenishment.utility.jsx located under shared

export const npcReplenishmentFormula = {
  Joe: (character) => {
    character.money = character.money + Math.floor(20 + Math.random() * 15);
    let inventory = new Inventory({ items: character.inventory });
    let potatoSeed = inventory.getItem({
      name: "Potato Seed Bundle",
      quality: 1,
    });
    let coffee = inventory.getItem({ name: "Coffee", quality: 1 });
    let miracleGrowth = inventory.getItem({
      name: "Miracle Growth",
      quality: 1,
    });
    if (!potatoSeed || potatoSeed.quantity < 10) {
      if (itemSeedRef["Potato Seed Bundle"].rarity(1) === 1) {
        inventory.addItemToInventory({
          name: "Potato Seed Bundle",
          quality: 1,
          quantity: 1,
        });
      }
    }
    if (!coffee || coffee.quantity < 10) {
      if (itemSeedRef["Coffee"].rarity(1) === 1) {
        ////this is the chance the coffee will spawn with quality input
        inventory.addItemToInventory({
          name: "Coffee",
          quality: 1,
          quantity: 1,
        });
      }
    }
    if (!miracleGrowth || miracleGrowth.quality < 10) {
      if (itemSeedRef["Miracle Growth"].rarity(1) === 1) {
        inventory.addItemToInventory({
          name: "Miracle Growth",
          quality: 1,
          quantity: 1,
        });
      }
    }
    character.inventory = inventory.items;
    return character;
  },
  Cole: (character) => {
    character.money = character.money + Math.floor(10 + Math.random() * 15);
    return character;
  },
};

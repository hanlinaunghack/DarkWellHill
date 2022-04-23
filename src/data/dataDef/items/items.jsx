import { itemValueRef, itemSeedRef } from "./itemRef.jsx";

/**
 * required name, quantity, quality, type
 */
export class Item {
  constructor({
    name = "",
    quantity = 1,
    quality = 1,
    value = 0,
    type = "Misc",
    description = "",
  }) {
    this.name = name;
    this.quantity = quantity;
    this.quality = quality;
    this.value = value
      ? value
      : itemValueRef[name]
      ? itemValueRef[name].qualityValueFormula(quality)
      : 0;
    this.totalValue = this.getTotalValue();
    this.type = itemValueRef[name].type ? itemValueRef[name].type : type;
    this.isUsable = itemValueRef[name].isUsable
      ? itemValueRef[name].isUsable
      : false;
    this.description = description
      ? description
      : itemValueRef[name].description;
  }
  getItemValue(quality) {
    let ref = itemValueRef[this.name];
    if (ref) return ref.qualityValueFormula(quality);
    return 0;
  }
  getTotalValue() {
    return parseInt(this.quantity) * this.value;
  }

  getSeedFromFood(quantity) {
    let seedref = itemSeedRef[this.name];
    if (!seedref || !seedref.nameOfOrigin) return null;
    let q = 0;
    for (let i = 0; i < quantity + 1; i++) {
      if (seedref.rarity(this.quality) === 1) {
        q++;
      }
    }
    if (seedref && q > 0) {
      return new Item({
        name: seedref.nameOfOrigin,
        quality: this.quality,
        quantity: q,
      });
    }
  }

  //gets whether item is edible, vegetable, or protein
  getItemType() {
    switch (this.type) {
      case "Food Vegetable":
        return "vegetable";
      case "Food Protein":
        return "protein";
      default:
        return null;
    }
  }
}
export const addItemToInventory = (inventory, item) => {
  let inventoryItem = inventory.find(
    (e) => e.name === item.name && e.quality === item.quality
  );
  if (inventoryItem) {
    inventoryItem.quantity = inventoryItem.quantity + item.quantity;
  } else {
    let i = new Item({
      name: item.name,
      quantity: item.quantity,
      quality: item.quality,
      value: itemValueRef[item.name].qualityValueFormula(item.quality),
      type: itemValueRef[item.name].type,
      description: itemValueRef[item.name].description,
    });
    inventory = inventory.concat(i);
  }
  return inventory;
};
export const updateItemInInventory = (inventory, item) => {
  let inventoryItem = inventory.find(
    (e) => e.name === item.name && e.quality === item.quality
  );
  if (inventoryItem) {
    inventoryItem.quantity = item.quantity;
  } else {
    let i = new Item({
      name: item.name,
      quantity: item.quantity,
      quality: item.quality,
      value: itemValueRef[item.name].qualityValueFormula(item.quality),
      type: itemValueRef[item.name].type,
      description: itemValueRef[item.name].description,
    });
    inventory = inventory.concat(i);
  }
  return inventory;
};

/**
 * return false if not enough item found in the inventory
 * @param inventory
 * @param { itemName, itemType, quantity }
 */
export const removeItemFromInventory = (
  inventory,
  { itemName, itemType, quantity, quality }
) => {
  let inventoryItem = inventory.find(
    (e) => e.type === itemType && e.name === itemName
  );

  if (inventoryItem) {
    if (inventoryItem.quantity > quantity) {
      inventoryItem.quantity = inventoryItem.quantity - quantity;
    } else if (inventoryItem.quantity === quantity) {
      inventory = removeItem(inventory, {
        itemName,
        itemType,
        itemQuality: quality,
      });
    } else {
      return null;
    }
  }
  return inventory;
};

function removeItem(inventory, { itemName, itemType, itemQuality }) {
  return inventory.filter((e) => {
    return !(
      e.name === itemName &&
      e.quality === itemQuality &&
      e.type === itemType
    );
  });
}

export class Inventory {
  constructor({ items = [] }) {
    this.items = items;
    this.removeItem = this.removeItem.bind(this);
  }
  getItems() {
    return this.items;
  }
  getItem({ name, quality }) {
    let item = this.items.find((e) => e.name === name && e.quality === quality);
    if (item) return item;
    return null;
  }
  addItemToInventory(item) {
    let inventoryItem = this.items.find(
      (e) => e.name === item.name && e.quality === item.quality
    );
    if (inventoryItem) {
      inventoryItem.quantity = inventoryItem.quantity + item.quantity;
      inventoryItem.totalValue = inventoryItem.quantity * inventoryItem.value;
    } else {
      let i = new Item({
        name: item.name,
        quantity: item.quantity,
        quality: item.quality,
        isUsable:
          itemValueRef[item.name] && itemValueRef[item.name].isUsable
            ? itemValueRef[item.name].isUsable
            : false,
        value: itemValueRef[item.name].qualityValueFormula(item.quality),
        type: itemValueRef[item.name].type,
        description: itemValueRef[item.name].description,
      });
      this.items = this.items.concat(i);
    }
    return this.items;
  }
  updateItemInInventory(item) {
    let inventoryItem = this.items.find(
      (e) => e.name === item.name && e.quality === item.quality
    );
    if (inventoryItem) {
      inventoryItem.quantity = Number(item.quantity);
      inventoryItem.totalValue = inventoryItem.quantity * inventoryItem.value;
    } else {
      let i = new Item({
        name: item.name,
        quantity: Number(item.quantity),
        quality: item.quality,
        isUsable:
          itemValueRef[item.name] && itemValueRef[item.name].isUsable
            ? itemValueRef[item.name].isUsable
            : false,
        value: itemValueRef[item.name].qualityValueFormula(item.quality),
        type: itemValueRef[item.name].type,
        description: itemValueRef[item.name].description,
      });
      this.items = this.items.concat(i);
    }
    return this.items;
  }
  removeItemFromInventory(item) {
    let inventoryItem = this.items.find(
      (e) => e.name === item.name && e.quality === item.quality
    );
    if (inventoryItem) {
      if (inventoryItem.quantity > item.quantity) {
        inventoryItem.quantity = inventoryItem.quantity - item.quantity;
        inventoryItem.totalValue = inventoryItem.quantity * inventoryItem.value;
      } else if (inventoryItem.quantity === item.quantity) {
        this.items = this.removeItem(item);
      } else {
        alert("not enough items in inventory");
        return null;
      }
    }
    return this.items;
  }
  removeItem(item) {
    return this.items.filter((e) => {
      return !(e.name === item.name && e.quality === item.quality);
    });
  }
}

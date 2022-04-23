import React from "react";
import { ITEM_ICONS } from "../../../../data/dataDef/images.jsx";
import { itemUse } from "../../../../data/dataDef/items/itemUse.jsx";
import "./inventoryWindow.css";

const InventoryItemChild = (props) => {
  return props.item.isUsable ? (
    <button
      className="inventory-item"
      onClick={() =>
        itemUse[props.item.name]
          ? itemUse[props.item.name](props.main, props.item, props.saveState)
          : null
      }
    >
      <img
        className="inventory-item-image"
        src={ITEM_ICONS[props.item.name]}
      ></img>
      <p className="inventory-item-text">{props.item.quantity}</p>
    </button>
  ) : (
    <div className="inventory-item">
      <img
        className="inventory-item-image"
        src={ITEM_ICONS[props.item.name]}
      ></img>
      <p className="inventory-item-text">{props.item.quantity}</p>
    </div>
  );
};
export default InventoryItemChild;

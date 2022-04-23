import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import InventoryItemChild from "./inventoryItem.child.component.jsx";

class InventoryItem extends React.Component {
  render() {
    return (
      <OverlayTrigger
        className="inventory-overlay"
        placement="top"
        delay={{ show: 50, hide: 150 }}
        overlay={
          <Tooltip id="button-tooltip" className="item-tooltip">
            {this.props.item.name}
          </Tooltip>
        }
      >
        <InventoryItemChild
          item={this.props.item}
          main={this.props.main}
          saveState={this.props.saveState}
        ></InventoryItemChild>
      </OverlayTrigger>
    );
  }
}
export default InventoryItem;

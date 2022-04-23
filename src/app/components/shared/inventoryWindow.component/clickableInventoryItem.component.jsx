import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ITEM_ICONS } from "../../../../data/dataDef/images.jsx";
import "./inventoryWindow.css";

export default class ClickableInventoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
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
        <div className="inventory-item" onClick={this.clickHandler}>
          <img
            className="inventory-item-image"
            src={ITEM_ICONS[this.props.item.name]}
          ></img>
          <p className="inventory-item-text">{this.props.item.quantity}</p>
        </div>
      </OverlayTrigger>
    );
  }
  clickHandler(event) {
    const item = {
      itemName: this.props.item.name,
      itemType: this.props.item.type,
      quality: this.props.item.quality,
    };
    this.props.clickHandler(item);
  }
}

import React from "react";
import { connect } from "react-redux";
import { on, off } from "../../eventManager/utility.jsx";
import InventoryItem from "./inventoryItem.component.jsx";
import { inventoryEligibleItem } from "../../../../data/configurations.jsx";
import "./inventoryWindow.css";

const playerInventoryFilter = (e) => {
  return inventoryEligibleItem(e.type);
};

class InventoryWindow extends React.Component {
  constructor(props) {
    super(props);
    this.structurePlayerInventory = this.structurePlayerInventory.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
    this.state = {
      isHidden: true,
    };
  }
  render() {
    return (
      <div
        className={
          this.state.isHidden ? "hidden" : "inventory-window-background"
        }
      >
        <div className="inventory-window-container">
          <div className="inventory-window">
            {this.structurePlayerInventory().map((e, i) => {
              return e.map((ch, idx) => {
                return (
                  <InventoryItem
                    key={`${i}-${idx}`}
                    item={ch}
                    saveState={this.props.saveState}
                    main={this.props.main}
                  ></InventoryItem>
                );
              });
            })}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    on("keypress", this.keyPressHandler);
  }

  componentWillUnmount() {
    off("keypress", this.keyPressHandler);
  }

  keyPressHandler(event) {
    let keyCode = 105;
    let code = "KeyI";
    if (code === event.code || event.keyCode === keyCode) {
      this.setState({
        ...this.state,
        isHidden: !this.state.isHidden,
      });
    }
  }
  structurePlayerInventory() {
    let structuredInventory = [];
    let row = [];
    if (
      this.props.main &&
      this.props.main.player &&
      this.props.main.player.inventory
    ) {
      let playerInventory = this.props.main.player.inventory.filter((e) =>
        playerInventoryFilter(e)
      );
      for (let i = 0; i < playerInventory.length; i++) {
        let columnNumber = 0;
        row.push(playerInventory[i]);
        if (row >= 3) {
          structuredInventory.push(row);
          row = [];
        } else if (i === playerInventory.length - 1) {
          structuredInventory.push(row);
          row = [];
        }
        columnNumber++;
      }
    }
    return structuredInventory;
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    saveState: (data) => dispatch({ type: "SAVE_STATE", data }),
    savePlayer: (data) => dispatch({ type: "SAVE_PLAYER", data }),
    updateInventory: (data) => dispatch({ type: "UPDATE_INVENTORY", data }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(InventoryWindow);

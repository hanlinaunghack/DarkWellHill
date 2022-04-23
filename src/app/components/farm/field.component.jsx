import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Calendar from "../../../data/dataDef/calendar.jsx";
import Character from "../../../data/dataDef/character.jsx";

import ClickableInventoryItem from "../shared/inventoryWindow.component/clickableInventoryItem.component.jsx";
import { off, on, trigger } from "../eventManager/utility.jsx";
import { fieldHelper } from "./fieldHelper.jsx";
import { Inventory, Item } from "../../../data/dataDef/items/items.jsx";
import { Field, Plant } from "../../../data/dataDef/field.jsx";
import { FIELD } from "../../../data/dataDef/images.jsx";
import {
  plantableItem,
  fertilizerItem,
  fertilizerRate,
} from "../../../data/configurations.jsx";
import {
  energyCost,
  timeCost,
  healthCost,
} from "../../../data/configurations.jsx";
import "./farm.css";

class FieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.healthBarHandler = this.healthBarHandler.bind(this);
    this.plantSeedActionHandler = this.plantSeedActionHandler.bind(this);
    this.initializeDataDef = this.initializeDataDef.bind(this);
    this.fieldActionHandler = this.fieldActionHandler.bind(this);
    this.modalWindowDisplay = this.modalWindowDisplay.bind(this);
    this.modalCloseHandler = this.modalCloseHandler.bind(this);
    this.itemClickHandler = this.itemClickHandler.bind(this);
    this.keyupHandler = this.keyupHandler.bind(this);
    this.state = {
      modalIsOpen: false,
    };
  }
  componentDidMount() {
    on("keyup", this.keyupHandler);
  }

  componentWillUnmount() {
    off("keyup", this.keyupHandler);
  }

  keyupHandler(event) {
    if (event.key === "Escape" && this.state.modalIsOpen)
      this.modalCloseHandler();
  }
  render() {
    return (
      <div>
        <div className={this.state.modalIsOpen ? "modal-window" : "hidden"}>
          <div className="modal-container">
            <div className="modal-header">
              <button
                onClick={this.modalCloseHandler}
                className="close"
                type="button"
                aria-label="Close"
              >
                <span aria-hidden="true">X</span>
              </button>
            </div>
            <div className="modal-content">{this.modalWindowDisplay()}</div>
          </div>
        </div>
        <div
          className={
            this.props.item.isWorked ? "field-plot isworked" : "field-plot"
          }
          onClick={this.clickHandler}
        >
          <img
            className="field-plot-image"
            src={FIELD[this.props.item.imageName]}
          />
          <p className="field-plot-label">{this.props.item.label}</p>
          {this.healthBarHandler()}
        </div>
      </div>
    );
  }

  modalWindowDisplay() {
    let inventory = !this.props.item.isWorked
      ? this.props.player.inventory.filter((e) => plantableItem(e.type))
      : this.props.player.inventory.filter((e) => fertilizerItem(e.type));
    if (inventory && inventory.length) {
      return inventory.map((e, i) => {
        return (
          <ClickableInventoryItem
            key={i}
            item={e}
            clickHandler={this.itemClickHandler}
          ></ClickableInventoryItem>
        );
      });
    }
  }

  //triggers when a seed packet was chosen to plant
  itemClickHandler({ itemName, itemType, quality }) {
    let eCost = energyCost.plantingSeed;
    let tCost = timeCost.plantingSeed;

    if (this.props.player.energy[0] >= eCost) {
      let [field, player, time] = this.initializeDataDef(eCost, tCost, 0);
      let inventory = new Inventory({ items: player.inventory });
      inventory.removeItemFromInventory(
        new Item({ name: itemName, quantity: 1, quality })
      );
      player.updateInventory(inventory.items);

      if (itemType === "Fertilizer") {
        let fertRate = fertilizerRate[itemName]
          ? fertilizerRate[itemName].rate(quality)
          : 0;
        field.isFertilized = true;
        field.plant.buff.positive.push({ rate: fertRate, name: itemName });
      } else {
        let plant = new Plant({ seed: itemName });
        field = new Field({
          id: this.props.item.id,
          name: this.props.item.name,
          imageName: plant.getPlantImage(), //image name
          label: plant.name,
          type: "Plant", //Obstacle, Plowed, Unplowed, Plant, Yield
          isWorked: false,
          health: [100, 100, 0],
          plant, //{} for obstacle, plowed, unplowed})
        });
      }

      this.props.saveFarm({
        newField: field,
        fieldType: this.props.fieldType, //smallField, mediumField, largeField
        player,
        time,
      });
    } else {
      alert("You don't have enough energy");
    }
    this.modalCloseHandler();
  }

  modalCloseHandler() {
    this.setState({
      ...this.state,
      modalIsOpen: false,
    });
  }

  /**
   * this is when player clicks on the plot
   */
  clickHandler(event) {
    if (this.props.item) {
      switch (this.props.item.type) {
        case "Obstacle":
          this.fieldActionHandler(
            energyCost.removeObstacle,
            timeCost.removeObstacle,
            healthCost.removeObstacle,
            "Obstacle"
          );
          break;
        case "Unplowed":
          this.fieldActionHandler(
            energyCost.plowField,
            timeCost.plowField,
            0,
            "Unplowed"
          );
          break;
        case "Plowed":
          this.plantSeedActionHandler();
          break;
        case "Plant":
          if (!this.props.item.isWorked) {
            this.fieldActionHandler(
              energyCost.workField,
              timeCost.workField,
              0,
              "Plant"
            );
          } else if (!this.props.item.isFertilized) {
            this.plantSeedActionHandler();
          }
          break;
        case "Yield":
          this.fieldActionHandler(
            energyCost.harvest,
            timeCost.harvest,
            0,
            "Yield"
          );
          break;
        default:
          return null;
      }
    }
  }

  plantSeedActionHandler() {
    this.setState({
      modalIsOpen: true,
    });
  }

  /**
   *
   * @param {*} eCost
   * @param {*} minuteCost
   * @param {*} healthCost
   * @param {*} plotType
   * handling field actions
   */
  fieldActionHandler(eCost, minuteCost, healthCost, plotType) {
    if (this.props.player.energy[0] >= eCost) {
      let [field, player, time] = this.initializeDataDef(
        eCost,
        minuteCost,
        healthCost
      );
      field = fieldHelper({
        item: this.props.item,
        plotType,
        fieldHealth: field.health[0],
        field,
        player,
      });

      this.props.saveFarm({
        newField: field,
        fieldType: this.props.fieldType, //smallField, mediumField, largeField
        player,
        time,
      });
    } else {
      alert("You are too tired to work");
    }
  }

  initializeDataDef(eCost, minuteCost, healthCost) {
    let field = { ...this.props.item };
    if (healthCost) field.health[0] = field.health[0] - healthCost;

    let player = new Character(this.props.player);
    player.decreaseEnergy(eCost);

    let time = new Calendar(this.props.time);
    time.increaseMinute(minuteCost);
    let isOverTimed = time.checkValidity();

    if (isOverTimed) player.fillUpEnergy("half");
    return [field, player, time];
  }

  /**
   *
   * @returns healthBar %
   */
  healthBarHandler() {
    if (
      this.props.item &&
      (this.props.item.type === "Obstacle" || this.props.item.type === "Plant")
    ) {
      return (
        <div className="field-plot-health-bar">
          <ProgressBar
            variant="success"
            now={this.calculateStats("health")}
          ></ProgressBar>
        </div>
      );
    }
  }
  calculateStats() {
    return (this.props.item.health[0] / this.props.item.health[1]) * 100;
  }
}

export default FieldComponent;

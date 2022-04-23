import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Calendar from "../../../data/dataDef/calendar.jsx";
import Character from "../../../data/dataDef/character.jsx";

import { off, on, trigger } from "../eventManager/utility.jsx";
import { Inventory, Item } from "../../../data/dataDef/items/items.jsx";
import { Field, Plant } from "../../../data/dataDef/field.jsx";
import { FIELD } from "../../../data/dataDef/images.jsx";
import {
  energyCost,
  timeCost,
  healthCost,
} from "../../../data/configurations.jsx";
import "./forest.css";

class ForestFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.healthBarHandler = this.healthBarHandler.bind(this);
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
        <div className="field-plot" onClick={this.clickHandler}>
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
    let inventory = this.props.player.inventory.filter(
      (e) => e.type === "Seeds"
    );
    if (inventory && inventory.length) {
      return null;
    }
  }

  //triggers when a seed packet was chosen to plant
  itemClickHandler({ itemName, itemType, quality }) {
    //this.props.saveFarm({ newField, this.props.fieldType, player, time });
    let eCost = energyCost.plantingSeed;
    let timeCost = 20;
    if (this.props.player.energy[0] >= eCost) {
      let [field, player, time] = this.initializeDataDef(eCost, timeCost, 0);
      let plant = new Plant({ seed: itemName });

      let inventory = new Inventory({ items: player.inventory });
      inventory.removeItemFromInventory(
        new Item({ name: itemName, quantity: 1, quality })
      );
      player.updateInventory(inventory.items);
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
        default:
          return null;
      }
    }
  }

  /**
   *
   * @param {*} eCost
   * @param {*} minuteCost
   * @param {*} healthCost
   * handling field actions
   */
  fieldActionHandler(eCost, minuteCost, healthCost) {
    if (this.props.player.energy[0] >= eCost) {
      let [field, player, time] = this.initializeDataDef(
        eCost,
        minuteCost,
        healthCost
      );

      if (field.health[0] <= 0) {
        let playerInventory = new Inventory({
          items: this.props.player.inventory,
        });
        playerInventory.addItemToInventory(
          new Item({ name: "Lumber", quality: 1, quantity: 1 })
        );
        player = {
          ...player,
          inventory: playerInventory.items,
        };
      }

      this.props.saveForestField({
        newField: field,
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

export default ForestFieldComponent;

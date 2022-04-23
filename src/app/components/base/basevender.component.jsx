import React from "react";
import BaseComponent from "../base/base.component.jsx";
import Village from "../../../data/dataDef/village.jsx";
import { restockingMerchants } from "../../../data/configurations.jsx";
import { Item, Inventory } from "../../../data/dataDef/items/items.jsx";
import { Buying, Selling } from "./basevender.transaction.jsx";

class BaseVenderComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.amountInputChangeHandler = this.amountInputChangeHandler.bind(this);
    this.inputBuyBlurHandler = this.inputBuyBlurHandler.bind(this);
    this.inputSellBlurHandler = this.inputSellBlurHandler.bind(this);
    this.handleBuyButton = this.handleBuyButton.bind(this);
    this.handleSellButton = this.handleSellButton.bind(this);
    this.optionButtonHandler = this.optionButtonHandler.bind(this);

    this.buyingTransaction = this.buyingTransaction.bind(this);
    this.sellingTransaction = this.sellingTransaction.bind(this);

    this.npcName = "";
    this.state = {
      isLoading: true,
      currentOption: "Buy",
      basket: [],
      tray: [],
    };
  }

  amountInputChangeHandler(event) {
    let quantity = Number(event.target.dataset.quantity);
    if (event.target.value > quantity) event.target.value = quantity;
  }
  async inputBuyBlurHandler(event) {
    let quality = Number(event.target.dataset.quality);
    let basket = new Inventory({ items: this.state.basket });

    if (!event.target.value || event.target.value === 0) {
      event.target.value = 0;
      let basketItems = basket.removeItem({ name: event.target.name, quality });
      await this.setState({
        ...this.state,
        basket: basketItems,
      });
      return;
    }

    basket.updateItemInInventory(
      new Item({
        name: event.target.name,
        quantity: event.target.value,
        quality,
      })
    );
    await this.setState({
      ...this.state,
      basket: basket.getItems(),
    });
  }
  async inputSellBlurHandler(event) {
    let tray = new Inventory({ items: this.state.tray });
    let quality = Number(event.target.dataset.quality);

    if (!event.target.value || event.target.value == 0) {
      event.target.value = 0;
      let trayItems = tray.removeItem({ name: event.target.name, quality });
      await this.setState({
        ...this.state,
        tray: trayItems,
      });
      return;
    }

    tray.updateItemInInventory(
      new Item({
        name: event.target.name,
        quantity: event.target.value,
        quality,
      })
    );
    await this.setState({
      ...this.state,
      tray: tray.getItems(),
    });
  }

  async handleBuyButton(event) {
    let basket = new Inventory({ items: this.state.basket });
    let totalValue = this.state.basket.reduce((sum, curr) => {
      return sum + curr.totalValue;
    }, 0);

    if (totalValue > this.props.main.player.money) {
      alert("You can't afford it.");
    } else {
      let playerInventory = new Inventory({
        items: this.props.main.player.inventory,
      });
      let merchantInventory = new Inventory({
        items: this.props.main.npcData[this.npcName].inventory,
      });
      basket.items.forEach((e, i) => {
        playerInventory.addItemToInventory(new Item(e));
        merchantInventory.removeItemFromInventory(new Item(e));
      });

      await this.props.savePlayer({
        ...this.props.main.player,
        money: this.props.main.player.money - totalValue,
        inventory: playerInventory.items,
      });

      let npc = {
        ...this.props.main.npcData[this.npcName],
        money: this.props.main.npcData[this.npcName].money + totalValue,
        inventory: merchantInventory.items,
      };
      await this.props.updateNpc({ name: this.npcName, npc });
    }
  }
  async handleSellButton(event) {
    let tray = new Inventory({ items: this.state.tray });
    let totalValue = this.state.tray.reduce((sum, curr) => {
      return sum + curr.totalValue;
    }, 0);
    if (totalValue > this.props.main.npcData[this.npcName].money) {
      alert("I can't afford it.");
    } else {
      let playerInventory = new Inventory({
        items: this.props.main.player.inventory,
      });
      let merchantInventory = new Inventory({
        items: this.props.main.npcData[this.npcName].inventory,
      });
      let villageData = new Village(this.props.main.villageData);

      ///merchant will restock the seeds from the food you sell
      tray.items.forEach((e, i) => {
        let item = new Item(e);
        let recycledItem = item.getSeedFromFood(e.quantity);

        //only Joe recycle your food
        if (recycledItem && restockingMerchants.find((e) => e === this.npcName))
          merchantInventory.addItemToInventory(recycledItem);
        playerInventory.removeItemFromInventory(item);
        villageData.addItemToVillage(item);
      });

      await this.props.savePlayer({
        ...this.props.main.player,
        money: this.props.main.player.money + totalValue,
        inventory: playerInventory.items,
      });

      let npc = {
        ...this.props.main.npcData[this.npcName],
        money: this.props.main.npcData[this.npcName].money - totalValue,
        inventory: merchantInventory.items,
      };
      await this.props.updateNpc({ name: this.npcName, npc });
      await this.props.updateVillage(villageData);
    }
  }
  async optionButtonHandler(event) {
    if (this.state.currentOption !== event.target.name) {
      await this.setState({
        ...this.state,
        currentOption: event.target.name,
        basket: [],
        tray: [],
      });
    }
  }

  buyingTransaction() {
    return (
      <Buying
        inventory={this.props.main.npcData[this.npcName].inventory}
        inputBuyBlurHandler={this.inputBuyBlurHandler}
        amountInputChangeHandler={this.amountInputChangeHandler}
        handleBuyButton={this.handleBuyButton}
      ></Buying>
    );
  }
  sellingTransaction() {
    return (
      <Selling
        inventory={this.props.main.player.inventory}
        inputSellBlurHandler={this.inputSellBlurHandler}
        amountInputChangeHandler={this.amountInputChangeHandler}
        handleSellButton={this.handleSellButton}
      ></Selling>
    );
  }
}

export default BaseVenderComponent;

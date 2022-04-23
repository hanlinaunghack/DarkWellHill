import React from "react";
import ResearchChild from "./research.child.component.jsx";
import {
  ResearchTree,
  researchFunc,
} from "../../../data/dataDef/researchTree.jsx";
import { researchCost } from "../../../data/configurations.jsx";

class ResearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.researchClickHandler = this.researchClickHandler.bind(this);
    this.researchItemClickHandler = this.researchItemClickHandler.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
    this.modalWindowHandler = this.modalWindowHandler.bind(this);
    this.closeResearchModal = this.closeResearchModal.bind(this);
    this.state = {
      windowIsOpen: false,
    };
  }
  render() {
    return this.props.main.unlockables.researchBook ? (
      <ResearchChild
        main={this.props.main}
        researchItemClickHandler={this.researchItemClickHandler}
        researchClickHandler={this.researchClickHandler}
        closeModalWindow={this.closeResearchModal}
        modalWindowHandler={this.modalWindowHandler}
      ></ResearchChild>
    ) : (
      <></>
    );
  }
  modalWindowHandler(name) {
    switch (name) {
      case "background":
        return this.state.windowIsOpen ? "researchtree-background" : "hidden";
      default:
        return "hidden";
    }
  }

  researchClickHandler(event) {
    this.setState({ ...this.state, windowIsOpen: true });
  }
  closeResearchModal() {
    this.setState({ ...this.state, windowIsOpen: false });
  }
  async researchItemClickHandler(event, child) {
    let cost = Number(researchCost[child.name].moneyCost);
    let playerMoney = Number(this.props.main.player.money);
    if (cost <= playerMoney) {
      playerMoney = playerMoney - cost;
      await this.props.savePlayer({
        ...this.props.main.player,
        money: playerMoney,
      });
      let rt = new ResearchTree(this.props.main.unlockables.researchTree);
      rt.researchResearch(child.name);
      if (researchFunc[child.name]) {
        await researchFunc[child.name](this.props.main, this.props.savePlayer);
      }
      await this.props.saveResearchTree(rt);
    } else {
      alert("You can't afford it");
    }
  }
  keyPressHandler(event) {
    if (
      event.keyCode === 27 ||
      event.code === "Escape" ||
      event.key === "Escape"
    )
      this.closeResearchModal();
  }
  componentDidMount() {
    document.addEventListener("keyup", this.keyPressHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.keyPressHandler);
  }
}
export default ResearchComponent;

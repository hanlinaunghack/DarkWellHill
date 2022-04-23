import React from "react";
import BaseVenderComponent from "../base/basevender.component.jsx";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import SharedComponent from "../shared/shared.jsx";
import LoadingScreen from "../shared/loadingScreen.component/loadingScreen.component.jsx";
import "./tavern.css";

class TavernComponent extends BaseVenderComponent {
  constructor(props) {
    super(props);
    this.componentName = "tavern";
    this.npcName = "Cole";
    this.state = {
      isLoading: true,
      currentOption: "Buy",
      basket: [],
      tray: [],
    };
  }

  render() {
    return this.state.isLoading ? (
      <LoadingScreen></LoadingScreen>
    ) : (
      <div className="container">
        <SharedComponent />
        <div>
          <div className="title-container">
            <h3 className="title-label">Tavern</h3>
            <div className="buttons-container">
              <Button
                className="nav"
                onClick={(event) => this.navigationHandler("market")}
              >
                <img title="Market" className="nav" src={this.navIcon.market} />
              </Button>
            </div>
          </div>
          <div>
            <div className="title-container">
              <h3>{this.props.main.npcData.Cole.name}</h3>
              <img className="title-image" src={this.fullImages["Cole"]}></img>
              <div className="title-option-buttons">
                <button
                  className={
                    this.state.currentOption === "Buy"
                      ? "option-button selected"
                      : "option-button"
                  }
                  name="Buy"
                  onClick={this.optionButtonHandler}
                >
                  Buying
                </button>
                <button
                  className={
                    this.state.currentOption === "Sell"
                      ? "option-button selected"
                      : "option-button"
                  }
                  name="Sell"
                  onClick={this.optionButtonHandler}
                >
                  Selling
                </button>
                <p className="npc-money-text">
                  Money: {this.props.main.npcData.Cole.money}
                </p>
              </div>
            </div>

            <div>
              {this.state.currentOption === "Buy"
                ? this.buyingTransaction()
                : this.sellingTransaction()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TavernComponent)
);

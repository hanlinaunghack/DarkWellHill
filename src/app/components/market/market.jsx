import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import Button from "react-bootstrap/Button";
import SharedComponent from "../shared/shared.jsx";
import BaseVenderComponent from "../base/basevender.component.jsx";

import "./market.css";

class MarketComponent extends BaseVenderComponent {
  constructor(props) {
    super(props);
    this.componentName = "market";
    this.npcName = "Joe";
  }

  render() {
    return this.state.isLoading ? (
      <div className="container">Loading...Please Wait...</div>
    ) : (
      <div className="container">
        <SharedComponent />
        <div className="title-container">
          <h3 className="title-label">Market</h3>
          <div className="buttons-container">
            <Button
              className="nav"
              onClick={(event) => this.navigationHandler("home")}
            >
              <img title="Home" className="nav" src={this.navIcon.home} />
            </Button>
            <Button
              className="nav"
              onClick={(event) => this.navigationHandler("tavern")}
            >
              <img title="Tavern" className="nav" src={this.navIcon.tavern} />
            </Button>
          </div>
        </div>
        <div>
          <div className="title-container">
            <h3>{this.props.main.npcData.Joe.name}</h3>
            <img className="title-image" src={this.fullImages["Joe"]}></img>
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
                Money: {this.props.main.npcData.Joe.money}
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
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MarketComponent)
);

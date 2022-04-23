import React from "react";
import BaseComponent from "../base/base.component.jsx";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import SharedComponent from "../shared/shared.jsx";
import LoadingScreen from "../shared/loadingScreen.component/loadingScreen.component.jsx";
import ResearchComponent from "./research.component.jsx";
import FarmComponent from "../farm/farm.component.jsx";
import endOfDay from "./endOfDay.jsx";
import "./home.css";

class HomeComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.componentName = "home";
    this.sleepHandler = this.sleepHandler.bind(this);
    this.state = {
      isLoading: true,
    };
  }
  sleepHandler() {
    endOfDay({
      main: this.props.main,
      saveState: this.props.saveState,
      nextEventFinder: this.nextEventFinder.bind(this),
    });
  }
  render() {
    return this.state.isLoading ? (
      <LoadingScreen></LoadingScreen>
    ) : (
      <div className="container">
        <SharedComponent />
        <div>
          <div className="title-container">
            <h3 className="title-label">Home</h3>
            <div className="buttons-container">
              <Button
                className="nav"
                onClick={(event) => this.navigationHandler("market")}
              >
                <img title="Market" className="nav" src={this.navIcon.market} />
              </Button>
              <Button
                className="nav"
                onClick={(event) => this.navigationHandler("forest")}
              >
                <img title="Forest" className="nav" src={this.navIcon.forest} />
              </Button>
              <Button className="nav" onClick={this.sleepHandler}>
                <img title="Sleep" className="nav" src={this.navIcon.sleep} />
              </Button>
            </div>
          </div>
          <FarmComponent></FarmComponent>
          <ResearchComponent
            main={this.props.main}
            savePlayer={this.props.savePlayer}
            saveResearchTree={this.props.saveResearchTree}
          ></ResearchComponent>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
);

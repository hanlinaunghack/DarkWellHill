import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { save_file, load_file } from "../../../api/savefile.js";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../../reducers/utility.jsx";
import { STATUSBAR_ICON } from "../../../../data/dataDef/images.jsx";
import LoadingScreen from "../loadingScreen.component/loadingScreen.component.jsx";
import Calendar from "../../../../data/dataDef/calendar.jsx";
import Character from "../../../../data/dataDef/character.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import "./topStatusBar.css";

class TopStatusBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.calculateStats = this.calculateStats.bind(this);
    this.saveButtonHandler = this.saveButtonHandler.bind(this);
    this.navigationHandler = this.navigationHandler.bind(this);
    this.statusButtonManager = this.statusButtonManager.bind(this);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    return this.state.isLoading ? (
      <LoadingScreen></LoadingScreen>
    ) : (
      <div>
        <Row className="status-bar">
          <Col md={0} className="progress-bar-label">
            <p>Health</p>
            <p>Energy</p>
          </Col>
          <Col mad={2} className="progress-bar-bundle">
            <ProgressBar
              variant="success"
              now={this.calculateStats("health")}
            ></ProgressBar>
            <ProgressBar
              variant="success"
              now={this.calculateStats("energy")}
            ></ProgressBar>
          </Col>
          <Col md={2} className="money">
            <span>Gold: {this.props.main.player.money}</span>
          </Col>
          <Col md={2}>
            <div className="statusbar-container">
              <div>
                <img
                  className="statusbar-icon"
                  src={STATUSBAR_ICON.vegetableIcon}
                />
                <span className="statusbar-label">
                  {this.props.main.villageData.vegetable}
                </span>
              </div>
              <div>
                <img
                  className="statusbar-icon"
                  src={STATUSBAR_ICON.vegetableIcon}
                />
                <span className="statusbar-label">
                  {this.props.main.villageData.protein}
                </span>
              </div>
              <span>Morale: {this.props.main.villageData.morale}</span>
            </div>
          </Col>
          <Col md={2}>
            <div>
              <span>
                (Upkeep: {this.props.main.villageData.vegetableMin} -{" "}
                {this.props.main.villageData.vegetableMax})
              </span>
            </div>
          </Col>
          <Col md={4}>
            <Button onClick={this.saveButtonHandler}>Save</Button>
          </Col>
        </Row>
      </div>
    );
  }

  statusButtonManager() {
    if (this.props.main.currentLocation === "home")
      return <Button onClick={this.sleepHandler}>Sleep</Button>;
    return <div></div>;
  }

  navigationButtons() {
    switch (this.props.main.currentLocation) {
      case "home":
        return (
          <Button onClick={(event) => this.navigationHandler(event, "market")}>
            Market
          </Button>
        );
      case "market":
        return (
          <Button onClick={(event) => this.navigationHandler(event, "home")}>
            Home
          </Button>
        );
      default:
        return <Button onClick={this.navigationHandler}>Market</Button>;
    }
  }
  async navigationHandler(event, location) {
    this.setState({ ...this.state, isLoading: true });
    let time = new Calendar(this.props.main.time);
    let player = new Character(this.props.main.player);
    time.increaseMinute(20);

    let isOverTimed = time.checkValidity();
    if (isOverTimed) {
      player.fillUpEnergy("half");
      //you do not need to increase day and reset time for this because it is already handled
    }

    let main = {
      ...this.props.main,
      time: time,
      currentLocation: location,
    };
    await this.props.saveState(main);
    await this.saveButtonHandler();
    setTimeout(() => {
      this.props.history.push(location);
    }, 1000);
  }
  /**
   * handle save method
   */
  async saveButtonHandler() {
    await save_file(this.props.main, "/api/tempfile");
  }

  /*
  helper method to calculate the percentage of player's current health and energy
  */
  calculateStats(type) {
    switch (type) {
      case "health":
        return (
          100 *
          (this.props.main.player.health[0] / this.props.main.player.health[1])
        );
      case "energy":
        return (
          100 *
          (this.props.main.player.energy[0] / this.props.main.player.energy[1])
        );
      default:
        return 0;
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopStatusBarComponent)
);

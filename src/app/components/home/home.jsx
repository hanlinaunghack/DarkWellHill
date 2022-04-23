import React from "react";
import BaseComponent from "../base/base.component.jsx";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
<<<<<<< HEAD
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
=======
import { save_file, load_file } from "../../api/savefile";
import Button from "react-bootstrap/Button";
import ToggleLoading from "../../api/toggleLoading.jsx";
import SharedComponent from "../shared/shared.jsx";
import InventoryComponent from "../inventory/inventory.jsx";
import toggleInventory from "./helpers/toggleInventory.jsx";
import sleepHandlerHelper from "./helpers/sleep.jsx";
import TravelComponent from "./helpers/travel.jsx";

const titleStyle = {
  background: "#DDF3FE",
  textAlign: "center",
  paddingLeft: "30px"
};
const inventoryStyle = {
  background: "#DDF3FE",
  textAlign: "left",
  paddingBottom: "30px",
  display: "flex"
};
const homeTravelLocations = ["Fields"];
class HomeComponent extends React.Component {
>>>>>>> 9f8bb1c929103c2f3a6ff3b2bda33737c640d703
  constructor(props) {
    super(props);
    this.componentName = "home";
    this.sleepHandler = this.sleepHandler.bind(this);
    this.state = {
      isLoading: true,
<<<<<<< HEAD
=======
      openInventory: false
>>>>>>> 9f8bb1c929103c2f3a6ff3b2bda33737c640d703
    };
    this.inventoryHandler = this.inventoryHandler.bind(this);
    this.sleepHandler = this.sleepHandler.bind(this);
  }
<<<<<<< HEAD
  sleepHandler() {
    endOfDay({
      main: this.props.main,
      saveState: this.props.saveState,
      nextEventFinder: this.nextEventFinder.bind(this),
    });
=======
  async componentWillMount() {
    var data = await load_file("/api/tempfile");
    if (data) {
      data = JSON.parse(data);
      await Promise.resolve(this.props.saveMainState(data));
      this.setState(ToggleLoading(this.state));
    } else {
      //no data was loaded go to menu
      this.props.history.push("/menu");
    }
>>>>>>> 9f8bb1c929103c2f3a6ff3b2bda33737c640d703
  }
  inventoryHandler() {
    this.setState(toggleInventory);
  }
  sleepHandler() {
    sleepHandlerHelper(this.props.main, this.props.saveMainState);
  }
  render() {
    return this.state.isLoading ? (
      <LoadingScreen></LoadingScreen>
    ) : (
      <div className="container">
<<<<<<< HEAD
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
=======
        <SharedComponent main={this.props.main} history={this.props.history} />
        <div style={titleStyle}>
          <h3>Home</h3>
          <div style={inventoryStyle}>
            <Button variant="outline-secondary" onClick={this.inventoryHandler}>
              Inventory
            </Button>
            <TravelComponent locations={homeTravelLocations} />
            <Button variant="outline-secondary" onClick={this.sleepHandler}>
              Sleep
            </Button>
            {this.state.openInventory ? <InventoryComponent /> : ""}
          </div>
>>>>>>> 9f8bb1c929103c2f3a6ff3b2bda33737c640d703
        </div>
      </div>
    );
  }
}
<<<<<<< HEAD

=======
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    saveMainState: data => dispatch({ type: "SAVE_STATE", data }),
    savePlayer: data => dispatch({ type: "SAVE_PLAYER", data })
  };
}
>>>>>>> 9f8bb1c929103c2f3a6ff3b2bda33737c640d703
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
);

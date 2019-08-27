import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { save_file, load_file } from "../../api/savefile";
import ToggleLoading from "../../api/toggleLoading.jsx";
import SharedComponent from "../shared/shared.jsx";
import InventoryComponent from "../inventory/inventory.jsx";
import toggleInventory from "./helpers/toggleInventory.jsx";
import sleepHandlerHelper from "./helpers/sleep.jsx";

const titleStyle = {
  background: "#DDF3FE",
  textAlign: "center",
  paddingLeft: "30px"
};
const inventoryStyle = {
  background: "#DDF3FE",
  textAlign: "left",
  paddingBottom: "30px"
};
class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      openInventory: false
    };
    this.inventoryHandler = this.inventoryHandler.bind(this);
    this.sleepHandler = this.sleepHandler.bind(this);
  }
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
  }
  inventoryHandler() {
    this.setState(toggleInventory);
  }
  sleepHandler() {
    sleepHandlerHelper(this.props.main, this.props.saveMainState);
  }
  render() {
    return this.state.isLoading ? (
      <div className="container">Loading... Please Wait... </div>
    ) : (
      <div className="container">
        <SharedComponent main={this.props.main} history={this.props.history} />
        <div style={titleStyle}>
          <h3>Home</h3>
          <div style={inventoryStyle}>
            <button onClick={this.inventoryHandler}>Inventory</button>
            <button onClick={this.sleepHandler}>Sleep</button>
            {this.state.openInventory ? <InventoryComponent /> : ""}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    saveMainState: data => dispatch({ type: "SAVE_STATE", data }),
    savePlayer: data => dispatch({ type: "SAVE_PLAYER", data })
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeComponent)
);

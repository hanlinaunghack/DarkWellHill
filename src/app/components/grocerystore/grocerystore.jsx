import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { save_file, load_file, load_parse } from "../../api/savefile.js";
import ToggleLoading from "../../api/toggleLoading.jsx";
import SharedComponent from "../shared/shared.jsx";
import Shared2Cmponent from "../shared/shared2.jsx";
import mainProptype from "../../../data/proptypes/proptypes.jsx";
import BuyComponent from "../transaction/buy.jsx";
import SellComponent from "../transaction/sell.jsx";

const titleStyle = {
  background: "#DDF3FE",
  textAlign: "center",
  paddingLeft: "30px"
};
const contentStyle = {
  display: "flex"
};
const inventoryStyle = {
  background: "#DDF3FE",
  textAlign: "left",
  paddingBottom: "30px",
  display: "flex"
};
const groceryTravelLocations = ["fields"];
class GroceryStoreComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  async componentWillMount() {
    var data = await load_file("/api/tempfile");
    if (data) {
      data = load_parse(data);
      await Promise.resolve(this.props.saveMainState(data));
      this.setState(ToggleLoading(this.state));
    } else {
      //no data was loaded go to menu
      this.props.history.push("/menu");
    }
  }
  render() {
    return this.state.isLoading ? (
      <div className="container">Loading... Please Wait... </div>
    ) : (
      <div className="container">
        <SharedComponent main={this.props.main} history={this.props.history} />
        <div style={titleStyle}>
          <h3>Shopping Mart</h3>
          <div style={inventoryStyle}>
            <Shared2Cmponent
              locations={groceryTravelLocations}
            ></Shared2Cmponent>
          </div>
          <div>
            This is the store{" "}
            <div style={contentStyle}>
              <SellComponent
                player={this.props.main.player}
                tradableTypes={this.props.main.npc.traders.habib.tradableTypes}
              ></SellComponent>
              <BuyComponent
                npc={this.props.main.npc.traders.habib}
              ></BuyComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
GroceryStoreComponent.propType = mainProptype;
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
  )(GroceryStoreComponent)
);

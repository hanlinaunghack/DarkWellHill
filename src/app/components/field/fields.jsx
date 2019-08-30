import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { save_file, load_file } from "../../api/savefile";
import ToggleLoading from "../../api/toggleLoading.jsx";
import SharedComponent from "../shared/shared.jsx";
import Shared2Cmponent from "../shared/shared2.jsx";
import Tiles from "./helper/tiles.jsx";

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
const fieldsTravelLocations = ["home"];
class FieldsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
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
  render() {
    return this.state.isLoading ? (
      <div className="container">Loading... Please Wait... </div>
    ) : (
      <div className="container">
        <SharedComponent main={this.props.main} history={this.props.history} />
        <div style={titleStyle}>
          <h3>Fields</h3>
          <div style={inventoryStyle}>
            <Shared2Cmponent
              locations={fieldsTravelLocations}
            ></Shared2Cmponent>
          </div>
          <table>
            <Tiles main={this.props.main}></Tiles>
          </table>
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
  )(FieldsComponent)
);

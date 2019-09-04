import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { save_file, load_file, load_parse } from "../../api/savefile";
import Button from "react-bootstrap/Button";
import ToggleLoading from "../../api/toggleLoading.jsx";
import SharedComponent from "../shared/shared.jsx";
import sleepHandlerHelper from "./helpers/sleep.jsx";
import Shared2Cmponent from "../shared/shared2.jsx";

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
const footerStyle = {
  background: "#DDF3FE",
  display: "flex",
  paddingLeft: "30px"
};
const homeTravelLocations = ["fields"];
class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.sleepHandler = this.sleepHandler.bind(this);
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
            <Shared2Cmponent locations={homeTravelLocations}></Shared2Cmponent>
          </div>
        </div>
        <div style={footerStyle}>
          <Button variant="outline-secondary" onClick={this.sleepHandler}>
            Sleep
          </Button>
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

import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { save_file, load_file } from "../../api/savefile";
import ToggleLoading from "../../api/toggleLoading.jsx";
import Items from "./items.jsx";

const titleStyle = {
  background: "#DDF3FE",
  display: "block"
};
class InventoryComponent extends React.Component {
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
      await Promise.resolve(this.props.saveState(data));
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
        <table style={titleStyle}>
          <Items main={this.props.main} />
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    saveState: data => dispatch({ type: "SAVE_STATE", data }),
    savePlayer: data => dispatch({ type: "SAVE_PLAYER", data })
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(InventoryComponent)
);

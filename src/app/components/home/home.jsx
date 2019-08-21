import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { save_file, load_file } from "../../api/savefile";
import ToggleLoading from "../../api/toggleLoading.jsx";
import SharedComponent from "../shared/shared.jsx";

const titleStyle = {
  background: "#DDF3FE",
  textAlign: "center",
  paddingBottom: "20px"
};
class HomeComponent extends React.Component {
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
        <SharedComponent main={this.props.main} />
        <div style={titleStyle}>
          <h3>Home</h3>
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
    saveState: data => dispatch({ type: "SAVE_STATE", data }),
    savePlayer: data => dispatch({ type: "SAVE_PLAYER", data })
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeComponent)
);

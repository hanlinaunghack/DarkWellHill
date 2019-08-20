import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { save_file, load_file } from "../../api/savefile";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    var data = await load_file("/api/tempfile");
    if (data) {
    }
  }
  render() {
    return <div className="container">this is home</div>;
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    savePlayer: data => dispatch({ type: "SAVE_PLAYER", data })
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeComponent)
);

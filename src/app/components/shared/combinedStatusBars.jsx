import React from "react";
import { connect } from "react-redux";
import TopHeaderBar from "./topHeaderBar.component/topHeaderBar.component.jsx";
import TopStatusBar from "./topStatusBar.component/topStatusBar.component.jsx";
import RightStatusBar from "./rightStatusBar.component/rightStatusBar.component.jsx";

class CombinedStatusBars extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TopHeaderBar></TopHeaderBar>
        <TopStatusBar></TopStatusBar>
        <RightStatusBar></RightStatusBar>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    saveState: (data) => dispatch({ type: "SAVE_STATE", data }),
    savePlayer: (data) => dispatch({ type: "SAVE_PLAYER", data }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CombinedStatusBars);

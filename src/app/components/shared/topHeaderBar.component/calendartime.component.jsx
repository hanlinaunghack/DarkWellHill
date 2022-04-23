import React from "react";
import { connect } from "react-redux";
import Calendar from "../../../../data/dataDef/calendar.jsx";

class CalendarTime extends React.Component {
  render() {
    return (
      <div>
        {new Calendar(this.props.main.time).getHour()}:
        {new Calendar(this.props.main.time).getMinute()}
        {new Calendar(this.props.main.time).formatClock()}
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
export default connect(mapStateToProps, mapDispatchToProps)(CalendarTime);

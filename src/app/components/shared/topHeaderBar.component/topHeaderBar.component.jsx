import React from "react";
import { connect } from "react-redux";
import CalendarTime from "./calendartime.component.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./topHeaderBar.css";

class TopHeaderBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-bar">
        <Row>
          <Col>Name: {this.props.main.player.name}</Col>
          <Col>Weather: {this.props.main.weather}</Col>
          <Col>
            Date: {this.props.main.time.month}/{this.props.main.time.day}/
            {this.props.main.time.year}
          </Col>
          <Col>
            <CalendarTime></CalendarTime>
          </Col>
        </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(TopHeaderBar);

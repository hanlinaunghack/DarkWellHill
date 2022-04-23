import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { on, trigger } from "./utility.jsx";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import Calendar from "../../../data/dataDef/calendar.jsx";

class EventManager extends React.Component {
  constructor(props) {
    super(props);
    this.nextEventFinder = this.nextEventFinder.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.nextEventFinder(1);
    }, 500);
  }
  render() {
    return null;
  }
  nextEventFinder(eventID) {
    let eventList = [];
    let found = false;
    let currentDate = new Calendar(this.props.main.time);
    this.props.main.eventList.forEach((e) => {
      let result = currentDate.compareDates(e.date);
      if (result && !found && (eventID ? eventID === e.id : true)) {
        //trigger
        found = true;
        trigger("message", e.event.dialogues);
      } else {
        eventList.push(e);
      }
    });
    this.props.saveEventList(eventList);
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventManager)
);

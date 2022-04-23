import Calendar from "../../../../data/dataDef/calendar.jsx";
import Character from "../../../../data/dataDef/character.jsx";
import { save_file, load_file } from "../../../api/savefile.js";

import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export const saveButtonHandler = async function (main) {
  await save_file(main, "/api/tempfile");
};

//feed in this.props (do not truncate)
export const navigationHandler = async function (props, location) {
  let time = new Calendar(props.main.time);
  let player = new Character(props.main.player);
  time.increaseMinute(20);

  let isOverTimed = time.checkValidity();
  if (isOverTimed) {
    player.fillUpEnergy("half");
    //you do not need to increase day and reset time for this because it is already handled
  }

  let main = {
    ...props.main,
    time: time,
    currentLocation: location,
  };
  await props.saveState(main);
  await saveButtonHandler(main);
  setTimeout(() => {
    props.history.push(location);
  }, 100);
};

import React from "react";
import Calendar from "../../../data/dataDef/calendar.jsx";
import { ResearchTree } from "../../../data/dataDef/researchTree.jsx";
import { save_file, load_file } from "../../api/savefile.js";
import { navigationHandler } from "../shared/navigationHelper/navigationHandler.jsx";
import { trigger, on } from "../eventManager/utility.jsx";
import { FULL_IMAGES, NAVICON } from "../../../data/dataDef/images.jsx";
import ToggleLoading from "../../api/toggleLoading.jsx";

class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.navigationHandler = this.navigationHandler.bind(this);
    this.componentName = "";
    this.navIcon = NAVICON;
    this.fullImages = FULL_IMAGES;
    this.state = {
      isLoading: true,
    };
  }
  async componentWillMount() {
    var data = await load_file("/api/tempfile");
    if (data) {
      data = JSON.parse(data);
      await Promise.resolve(this.props.saveState(data));

      if (this.props.main.currentLocation !== this.componentName) {
        this.props.history.push(this.props.main.currentLocation);
      } else {
        this.setState(ToggleLoading(this.state));
      }
      ///need some work here
      this.nextEventFinder();
    } else {
      //no data was loaded go to menu
      this.props.history.push("/menu");
    }
  }
  navigationHandler(location) {
    this.setState({ ...this.state, isLoading: true });
    navigationHandler(this.props, location);
  }

  nextEventFinder(eventID) {
    let eventList = [];
    let found = false;
    let currentDate = new Calendar(this.props.main.time);
    this.props.main.eventList.forEach((e) => {
      let result = currentDate.compareDates(e.date);
      if (
        result &&
        !found &&
        this.props.main.currentLocation === e.location &&
        (eventID ? eventID === e.id : true)
      ) {
        //trigger
        found = true;
        trigger("message", e.event.dialogues);
        if (e.event.unlockables) {
          let u = { ...this.props.main.unlockables, ...e.event.unlockables };
          this.props.saveUnlockable(u);
        }

        ///researching free technology from event
        if (e.event.researchBookName) {
          let rTree = new ResearchTree(
            this.props.main.unlockables.researchTree
          );
          rTree.researchResearch(e.event.researchBookName);
          this.props.saveResearchTree(rTree);
        }
      } else {
        eventList.push(e);
      }
    });
    //very careful with this saveEventList because it is only present in the child not here.
    this.props.saveEventList(eventList);
  }
}

export default BaseComponent;

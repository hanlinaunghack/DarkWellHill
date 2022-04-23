import React from "react";
import { connect } from "react-redux";
import { FACE_ICONS, FULL_IMAGES } from "../../../../data/dataDef/images.jsx";
import { on, off } from "../../eventManager/utility.jsx";
import { addItemToInventory } from "../../../../data/dataDef/items/items.jsx";
import { save_file, load_file } from "../../../api/savefile.js";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../../reducers/utility.jsx";
import "./bottomMessageWindow.css";

class BottomMessageWindow extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.labelHandler = this.labelHandler.bind(this);
    this.displayHandler = this.displayHandler.bind(this);
    this.saveButtonHandler = this.saveButtonHandler.bind(this);
    this.messageEventHandler = this.messageEventHandler.bind(this);
    this.state = {
      message: [],
    };
  }

  render() {
    return (
      <div>
        <div className={this.displayHandler("background")}></div>
        <div
          className={this.displayHandler("message")}
          onClick={this.clickHandler}
        >
          <div className={this.displayHandler("image")}>
            <img
              className="image-full"
              src={this.labelHandler("fullimage")}
            ></img>
            <img
              className="image-icon"
              src={this.labelHandler("faceicon")}
            ></img>
          </div>
          <div className={this.displayHandler("text")}>
            <p>{this.labelHandler("header")}</p>
            <p>{this.labelHandler("text")}</p>
          </div>
        </div>
      </div>
    );
  }

  /**
   * this event needs an Array input
   * each item in Array needs to be an object
   * { header, text, faceicon }
   * text is REQUIRED!
   */
  componentDidMount() {
    on("message", this.messageEventHandler);
  }
  componentWillUnmount() {
    off("message", this.messageEventHandler);
  }

  async clickHandler(event) {
    let s = { ...this.state };
    if (s && s.message[0]) {
      let currentElement = s.message.shift();
      if (
        currentElement &&
        currentElement.rewards &&
        currentElement.rewards.length
      ) {
        let inventory = [...this.props.main.player.inventory];
        currentElement.rewards.forEach((e, i) => {
          inventory = addItemToInventory(inventory, e);
        });
        await this.props.updateInventory(inventory);
        this.saveButtonHandler();
      }
      this.setState(s);
    }
  }
  async saveButtonHandler() {
    await save_file(this.props.main, "/api/tempfile");
  }
  messageEventHandler(event) {
    let message = this.state.message.concat(event.detail);
    this.setState({ ...this.state, message });
  }

  /*
  determines which label goes in the message window
  */
  labelHandler(type) {
    if (this.state.message && this.state.message[0]) {
      switch (type) {
        case "header":
          return this.state.message[0].header
            ? this.state.message[0].header + ":"
            : "";
        case "faceicon":
          return this.state.message[0].faceicon
            ? FACE_ICONS[this.state.message[0].faceicon]
            : "";
        case "fullimage":
          return this.state.message[0].fullimage
            ? FULL_IMAGES[this.state.message[0].fullimage]
            : "";
        case "text":
          return this.state.message[0].text ? this.state.message[0].text : "";
        default:
          return null;
      }
    }
  }

  /*
  show or hide message window by tweaking the CSS
  */
  displayHandler(type) {
    switch (type) {
      case "background":
        return this.state.message && this.state.message[0]
          ? "background-container"
          : "hidden";
      case "message":
        return this.state.message && this.state.message[0]
          ? "message-container"
          : "hidden";
      case "image":
        return this.state.message &&
          this.state.message[0] &&
          this.state.message[0].faceicon
          ? "image-container"
          : "hidden";
      case "text":
        return this.state.message &&
          this.state.message[0] &&
          this.state.message[0].faceicon
          ? "text-container"
          : "text-container-noface";
      default:
        return null;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomMessageWindow);

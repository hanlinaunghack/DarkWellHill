import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import { NAVICON } from "../../../data/dataDef/images.jsx";
import CollectBerries from "./forest.berries.component.jsx";
import ForestFishing from "./forest.fishing.jsx";
import Button from "react-bootstrap/Button";
import BaseComponent from "../base/base.component.jsx";
import SharedComponent from "../shared/shared.jsx";
import ForestFieldComponent from "./forest.field.component.jsx";

import "./forest.css";

class ForestComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.componentName = "forest";
    this.saveForestFieldHandler = this.saveForestFieldHandler.bind(this);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <div className="container">
        <SharedComponent />
        <div className="title-container">
          <h3 className="title-label">Forest</h3>
          <div className="buttons-container">
            <Button
              className="nav"
              onClick={(event) => this.navigationHandler("home")}
            >
              <img title="Home" className="nav" src={NAVICON.home} />
            </Button>

            <Button
              className="nav"
              onClick={(event) => this.navigationHandler("jacks-hut")}
            >
              <img title="Jack's Hut" className="nav" src={NAVICON.jacksHut} />
            </Button>
          </div>
        </div>
        <div className="forest-field-container">
          <div>
            {this.props.main.forestData.fields.map((e, i) => {
              return e && e.health[0] > 0 ? (
                <ForestFieldComponent
                  key={i}
                  item={e}
                  player={this.props.main.player}
                  time={this.props.main.time}
                  saveForestField={this.saveForestFieldHandler}
                ></ForestFieldComponent>
              ) : (
                <div key={i}></div>
              );
            })}
          </div>
          <CollectBerries
            player={this.props.main.player}
            time={this.props.main.time}
            savePlayer={this.props.savePlayer}
            updateCalendar={this.props.updateCalendar}
          ></CollectBerries>
          <ForestFishing
            player={this.props.main.player}
            time={this.props.main.time}
            savePlayer={this.props.savePlayer}
            updateCalendar={this.props.updateCalendar}
          ></ForestFishing>
        </div>
      </div>
    );
  }

  saveForestFieldHandler({ newField, player, time }) {
    let fields = [...this.props.main.forestData.fields];
    fields = fields.map((e) => {
      return newField.id === e.id ? newField : e;
    });
    let forestData = {
      ...this.props.main.forestData,
      fields,
    };
    let data = {
      ...this.props.main,
      forestData,
      player,
      time,
    };
    this.props.saveState(data);
    return fields;
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ForestComponent)
);

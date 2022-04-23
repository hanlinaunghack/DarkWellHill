import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FieldComponent from "./field.component.jsx";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import "./farm.css";

class FarmComponent extends React.Component {
  constructor(props) {
    super(props);
    this.saveFarmHandler = this.saveFarmHandler.bind(this);
    this.mediumFarm = this.props.main.unlockables.researchTree.children.find(
      (e) => e.name === "Extra Field"
    );
    this.largeFarm = this.mediumFarm.children.find(
      (e) => e.name === "Extra Field 2"
    );
  }
  render() {
    return (
      <div className="farm-container">
        <div className="field-container">
          <h4>Small Field</h4>
          <div className="field-plots-container">
            {this.props.main.farm.smallField.map((e, i) => {
              return (
                <FieldComponent
                  item={e}
                  key={e.id}
                  player={this.props.main.player}
                  time={this.props.main.time}
                  fieldType="smallField"
                  saveFarm={this.saveFarmHandler}
                ></FieldComponent>
              );
            })}
          </div>
        </div>
        {this.mediumFarm.isResearched ? (
          <div className="field-container">
            <h4>Medium Field</h4>
            <div className="field-plots-container">
              {this.props.main.farm.mediumField.map((e, i) => {
                return (
                  <FieldComponent
                    item={e}
                    key={e.id}
                    player={this.props.main.player}
                    time={this.props.main.time}
                    fieldType="mediumField"
                    saveFarm={this.saveFarmHandler}
                  ></FieldComponent>
                );
              })}
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {this.largeFarm.isResearched ? (
          <div className="field-container">
            <h4>Large Field</h4>
            <div className="field-plots-container">
              {this.props.main.farm.largeField.map((e, i) => {
                return (
                  <FieldComponent
                    item={e}
                    key={e.id}
                    player={this.props.main.player}
                    time={this.props.main.time}
                    fieldType="largeField"
                    saveFarm={this.saveFarmHandler}
                  ></FieldComponent>
                );
              })}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }

  saveFarmHandler({ newField, fieldType, player, time }) {
    let farm = { ...this.props.main.farm };
    farm[fieldType] = farm[fieldType].map((e) => {
      return newField.id === e.id ? newField : e;
    });
    let data = {
      ...this.props.main,
      farm,
      player,
      time,
    };
    this.props.saveState(data);
    return farm;
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FarmComponent)
);

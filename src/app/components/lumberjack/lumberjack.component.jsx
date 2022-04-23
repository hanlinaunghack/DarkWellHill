import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import Button from "react-bootstrap/Button";
import SharedComponent from "../shared/shared.jsx";
import BaseComponent from "../base/base.component.jsx";

//import "./market.css";

class LumberJackComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.componentName = "jacks-hut";
    this.state = {
      isLoading: true,
    };
  }
  render() {
    return this.state.isLoading ? (
      <div className="container">Loading...Please Wait...</div>
    ) : (
      <div className="container">
        <SharedComponent />
        <div className="title-container">
          <h3 className="title-label">Jack's Hut</h3>
          <div className="buttons-container">
            <Button
              className="nav"
              onClick={(event) => this.navigationHandler("market")}
            >
              <img title="Market" className="nav" src={this.navIcon.market} />
            </Button>
            <Button
              className="nav"
              onClick={(event) => this.navigationHandler("forest")}
            >
              <img title="Forest" className="nav" src={this.navIcon.forest} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LumberJackComponent)
);

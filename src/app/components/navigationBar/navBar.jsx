import React from "react";
import Button from "react-bootstrap/Button";
import { FULL_IMAGES, NAVICON } from "../../../data/dataDef/images.jsx";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="buttons-container">
        {this.props.locations.map((e, i) => {
          return (
            <Button
              key={i}
              className="nav"
              onClick={(event) => this.props.navigationHandler(e.name)}
            >
              <img
                title={e.label}
                className="nav"
                src={this.navIcon[e.name]}
              ></img>
            </Button>
          );
        })}
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavigationMenu)
);

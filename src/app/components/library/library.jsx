import React from "react";
import BaseComponent from "../base/base.component.jsx";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import SharedComponent from "../shared/shared.jsx";
import LoadingScreen from "../shared/loadingScreen.component/loadingScreen.component.jsx";
import NavigationMenu from "../navigationBar/navBar.jsx";
import ResearchComponent from "./research.component.jsx";

class LibraryComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.componentName = "library";
    this.navigationMenu = [{ name: "home", label: "Home" }];
  }
  render() {
    return this.state.isLoading ? (
      <LoadingScreen></LoadingScreen>
    ) : (
      <div className="container">
        <SharedComponent />
        <div className="title-container">
          <h3 className="title-label">Library</h3>
          <NavigationMenu
            locations={this.navigationMenu}
            navigationHandler={this.navigationHandler}
          ></NavigationMenu>
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LibraryComponent)
);

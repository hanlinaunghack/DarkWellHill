import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import "./rightStatusBar.css";

const customStyle = {
  position: "fixed",
  left: "calc(100vw - 20rem)",
  top: "10rem",
};

const init = {
  listItem: [{}, {}, {}, {}],
  display: true,
};

class RightStatusBarComponent extends React.Component {
  render() {
    if (!this.props.main.display.rightStatusbarDisplay) return null;
    return (
      <div style={customStyle}>
        <Container>{this.transformListGroup()}</Container>
      </div>
    );
  }

  transformListGroup() {
    const listItem = init.listItem.map((e, i) => {
      return this.props.main.player.inventory[i]
        ? this.props.main.player.inventory[i]
        : {};
    });
    return (
      <ListGroup>
        {listItem.map((e, i) => {
          return (
            <ListGroup.Item key={i} className="listGroupClass">
              {e.name ? e.name : ""}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightStatusBarComponent);

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { delete_file, save_file, load_file } from "../../../api/savefile.js";

class MenuModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.deleteAllFiles = this.deleteAllFiles.bind(this);
    this.saveFile = this.saveFile.bind(this);
    this.loadFile = this.loadFile.bind(this);
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    let newState = { ...this.state };
    newState.show = !newState.show;
    this.setState(newState);
  }
  async deleteAllFiles() {
    delete_file("/api/deleteAllFiles");
    setTimeout(() => this.props.history.push("/menu"), 500);
    this.handleClose();
  }
  async saveFile(data) {
    await save_file(data, "/api/savefile");
  }
  async loadFile() {
    await load_file("/api/savefile");
  }
  render() {
    return (
      <>
        <Button variant="outline-secondary" onClick={this.handleShow}>
          Menu
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <button onClick={() => this.saveFile(this.props.main)}>Save</button>
            <button onClick={this.loadFile}>Load</button>
            <button onClick={() => this.deleteAllFiles()}>Delete</button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MenuModalComponent)
);

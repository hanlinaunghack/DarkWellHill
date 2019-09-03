import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { delete_file, save_file, load_file } from "../../../api/savefile.js";

class MenuModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    let newState = { ...this.state };
    newState.show = !newState.show;
    this.setState(newState);
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
            <button onClick={() => saveFile(props.main)}>Save</button>
            <button onClick={loadFile}>Load</button>
            <button onClick={() => deleteAllFiles(props)}>Delete</button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
function deleteAllFiles(props) {
  delete_file("/api/deleteAllFiles");
  props.history.push("/menu");
}
async function saveFile(data) {
  await save_file(data, "/api/savefile");
}
async function loadFile() {
  await load_file("/api/savefile");
}

export default MenuModalComponent;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { delete_file, save_file, load_file } from "../../api/savefile.js";

const customStyle = {
  backgroundColor: "#DDF3FE",
  padding: "30px",
  paddingBottom: "60px",
  height: "50px"
};

const SharedComponent = props => {
  return (
    <div style={customStyle}>
      <Container>
        <Row>
          <Col xs={2}>
            Health: {props.main.player.health[0]}/{props.main.player.health[1]}
          </Col>
          <Col xs={2}>
            Energy: {props.main.player.energy[0]}/{props.main.player.energy[1]}
          </Col>
          <Col xs={1}>{props.main.weather}</Col>
          <Col xs={2}>
            {props.main.time.month}/{props.main.time.day}/{props.main.time.year}
            {"   "}
            {props.main.time.hour}:00
          </Col>
          <Col xs={1}>${props.main.player.money}</Col>
          <Col xs={3}>
            <button onClick={() => saveFile(props.main)}>Save</button>
            <button onClick={loadFile}>Load</button>
            <button onClick={() => deleteAllFiles(props)}>Delete</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

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
export default SharedComponent;

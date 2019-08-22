import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { delete_file } from "../../api/savefile.js";

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
          <Col>Name: {props.main.player.name}</Col>
          <Col>Weather: {props.main.weather}</Col>
          <Col>
            Date: {props.main.time.month}/{props.main.time.day}/
            {props.main.time.year} {"  "}
            Hour: {"  "}
            {props.main.time.hour}:00
          </Col>
          <Col>
            <button>Save</button>
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
export default SharedComponent;

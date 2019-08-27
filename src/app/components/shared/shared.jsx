import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuModalComponent from "./helper/menuModal.jsx";

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
          <Col xs={2}>
            <MenuModalComponent props={props} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SharedComponent;

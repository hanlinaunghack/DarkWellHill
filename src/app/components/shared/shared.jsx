import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            {props.main.time.year}
          </Col>
          <Col>{props.main.time.hour}:00</Col>
        </Row>
      </Container>
    </div>
  );
};

export default SharedComponent;

import React from "react";

const customStyle = {
  margin: "auto"
};
const ItemComponent = props => (
  <div style={customStyle}>
    <div>{props.name}</div>
    <div>{props.description}</div>
  </div>
);

export default ItemComponent;

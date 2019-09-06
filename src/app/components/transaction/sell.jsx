import React from "react";
import PlayerInventory from "./playerInventory.jsx";
import Button from "react-bootstrap/Button";

const customStyle = {
  marginTop: "20px",
  marginBottom: "20px"
};
const contentContainer = {
  border: "solid black 1px",
  padding: "30px",
  marginRight: "30px"
};
const BuyComponent = props => {
  return (
    <div style={contentContainer}>
      <table>
        <thead>
          <tr>
            <td>Your Items</td>
            <td>Value</td>
            <td>Quantity</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {props.player.inventory
            .filter((e, i) => props.tradableTypes.indexOf(e.type) > -1)
            .map((e, i) => (
              <PlayerInventory key={i} item={e}></PlayerInventory>
            ))}
          <tr>
            <td>Your Money</td>
            <td>{props.player.money}</td>
            <td>
              <Button variant="success" style={customStyle}>
                Sell
              </Button>
            </td>
            <td style={customStyle}>
              <Button variant="danger" style={customStyle}>
                Cancel
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default BuyComponent;

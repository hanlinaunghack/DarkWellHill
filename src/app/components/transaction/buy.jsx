import React from "react";
import SellerInventory from "./sellerInventory.jsx";
import Button from "react-bootstrap/Button";

const customStyle = {
  marginTop: "20px",
  marginBottom: "20px"
};
const contentContainer = {
  border: "solid black 1px",
  padding: "30px",
  marginLeft: "30px"
};
const BuyComponent = props => {
  return (
    <div style={contentContainer}>
      <table>
        <thead>
          <tr>
            <td>Seller's Items</td>
            <td>Value</td>
            <td>Quantity</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {props.npc.inventory.map((e, i) => (
            <SellerInventory key={i} item={e}></SellerInventory>
          ))}
          <tr>
            <td>Seller's Money</td>
            <td>{props.npc.money}</td>
            <td>
              <Button variant="success" style={customStyle}>
                Buy
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

import React from "react";
import SellerInventory from "./sellerInventory.jsx";
import Badge from "react-bootstrap/Badge";
const cursorStyle = {
  cursor: "pointer"
};
const SellComponent = props => {
  return (
    <div>
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
            <td></td>
            <td></td>
            <td>
              <Badge style={cursorStyle} variant="success">
                Buy
              </Badge>
            </td>
            <td>
              <Badge style={cursorStyle} variant="danger">
                Cancel
              </Badge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default SellComponent;

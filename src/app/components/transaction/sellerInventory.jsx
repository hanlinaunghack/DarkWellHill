import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";

const amountToBuy = {
  paddingRight: "10px",
  paddingLeft: "10px"
};
const column1 = {
  width: "200px"
};
const column2 = {
  width: "75px"
};
const badge = {
  cursor: "pointer",
  userSelect: "none"
};
function SellerInventory(props) {
  const [amount, setAmount] = useState(0);
  return (
    <tr>
      <td style={column1}>{props.item.name}</td>
      <td style={column2}>{props.item.value}</td>
      <td>{props.item.quantity}</td>
      <td>
        <span style={amountToBuy}>{amount}</span>
        <Badge
          pill
          variant="light"
          onClick={() =>
            setAmount(
              amount + 1 > props.item.quantity
                ? props.item.quantity
                : amount + 1
            )
          }
          style={badge}
        >
          +
        </Badge>
        <Badge
          pill
          variant="light"
          onClick={() => setAmount(amount - 1 < 0 ? 0 : amount - 1)}
          style={badge}
        >
          -
        </Badge>
      </td>
    </tr>
  );
}
export default SellerInventory;

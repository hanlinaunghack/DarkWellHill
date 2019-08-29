import React, { useState } from "react";
import TravelComponent from "./helper/travel.jsx";
import InventoryComponent from "../inventory/inventory.jsx";
import Button from "react-bootstrap/Button";

const customStyle = {
  display: "flex"
};
const Shared2Component = props => {
  const [open, setOpen] = useState(false);
  const inventoryHandler = () => setOpen(!open);
  return (
    <div>
      <div style={customStyle}>
        <Button variant="outline-secondary" onClick={inventoryHandler}>
          Inventory
        </Button>
        <TravelComponent locations={props.locations} />
      </div>
      {open ? <InventoryComponent /> : ""}
    </div>
  );
};

export default Shared2Component;

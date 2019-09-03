import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const travelRoute = name => {
  return `/${name}`;
};
const TravelDropdownComponent = props => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.locations.map((e, i) => (
          <Dropdown.Item key={i} href={travelRoute(e)}>
            {e}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TravelDropdownComponent;

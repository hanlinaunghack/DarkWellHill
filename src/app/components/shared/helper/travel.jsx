import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const travelRoute = name => {
  return `/${name}`;
};
const TravelDropdownComponent = props => {
  return (
    <>
      {props.locations.length ? (
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            Travel
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {props.locations.map((e, i) => (
              <Dropdown.Item key={i} href={travelRoute(e)}>
                {capFirstLetter(e)}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <></>
      )}
    </>
  );
};
function capFirstLetter(name) {
  return name[0].toUpperCase() + name.slice(1);
}
export default TravelDropdownComponent;

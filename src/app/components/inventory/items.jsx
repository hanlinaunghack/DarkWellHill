import React from "react";
import ItemComponent from "./item.jsx";

const Items = props => {
  return (
    <tbody>
      <tr>
        {props.main.player.inventory
          .filter((e, i) => i < 6)
          .map((ee, ii) => (
            <ItemComponent
              key={ii}
              name={ee.name}
              description={ee.description}
            />
          ))}
      </tr>
      <tr>
        {props.main.player.inventory
          .filter((e, i) => i >= 6 && i < 11)
          .map((ee, ii) => (
            <ItemComponent
              key={ii}
              name={ee.name}
              description={ee.description}
            />
          ))}
      </tr>
    </tbody>
  );
};

export default Items;

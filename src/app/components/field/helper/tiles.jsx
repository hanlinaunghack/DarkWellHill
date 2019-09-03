import React from "react";
import Tile from "./tile.jsx";

const Tiles = props => {
  return (
    <tbody>
      <tr>
        {props.main.fields
          .filter((e, i) => i < 3)
          .map((e, i) => (
            <Tile key={i} tile={e} actionHandler={props.actionHandler}></Tile>
          ))}
      </tr>
      <tr>
        {props.main.fields
          .filter((e, i) => i >= 3 && i < 6)
          .map((e, i) => (
            <Tile key={i} tile={e} actionHandler={props.actionHandler}></Tile>
          ))}
      </tr>
      <tr>
        {props.main.fields
          .filter((e, i) => i >= 6)
          .map((e, i) => (
            <Tile key={i} tile={e} actionHandler={props.actionHandler}></Tile>
          ))}
      </tr>
    </tbody>
  );
};
export default Tiles;

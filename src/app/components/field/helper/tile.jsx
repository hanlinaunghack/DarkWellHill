import React from "react";
import Image from "react-bootstrap/Image";
import images from "../../../images/tiles/index.jsx";

const imgStyle = {
  height: "250px",
  width: "350px"
};
class Tile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <td>
        {this.props.tile ? (
          <Image
            style={imgStyle}
            src={images[this.props.tile.image]}
            roundedCircle
          />
        ) : (
          ""
        )}
      </td>
    );
  }
}
export default Tile;

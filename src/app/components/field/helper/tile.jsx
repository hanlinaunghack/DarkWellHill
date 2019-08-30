import React from "react";
import Image from "react-bootstrap/Image";
import Radium from "radium";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import images from "../../../images/tiles/index.jsx";

const imageStyle = {
  height: "250px",
  width: "350px"
};
const styles = {
  image: {
    overflow: "hidden",
    ":hover": {
      cursor: "pointer"
    }
  }
};
class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.openHandler = this.openHandler.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }
  componentDidMount() {}
  closeHandler() {
    this.setState({ show: false });
  }
  openHandler() {
    this.setState({ show: true });
  }
  render() {
    return (
      <td>
        {this.props.tile ? (
          <div style={[styles.image]} onClick={this.openHandler}>
            <Image style={imageStyle} src={images[this.props.tile.image]} />
          </div>
        ) : (
          ""
        )}
        <Modal show={this.state.show} onHide={this.closeHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Actions</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {this.props.tile.actionTypes.map((e, i) => {
              return <Button key={i}>{e.name}</Button>;
            })}
          </Modal.Body>
        </Modal>
      </td>
    );
  }
}
Tile = Radium(Tile);
export default Tile;

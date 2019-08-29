import React from "react";
import Image from "react-bootstrap/Image";
import images from "../../images/index.jsx";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const customStyle = {
  margin: "auto"
};

class ItemComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  useEffect() {
    var shortContent = this.state.short;
    var longContent = this.state.long;
    const timerId = setInterval(() => {
      setContent(content === shortContent ? longContent : shortContent);
    }, 3000);

    return () => clearInterval(timerId);
  }
  render() {
    return (
      <td style={customStyle}>
        <OverlayTrigger
          trigger="hover"
          placement="top"
          overlay={
            <Popover id="popover-basic">
              <Popover.Title as="h3">
                {formatNameWithDash(this.props.name)}
              </Popover.Title>
              <Popover.Content>{this.props.description}</Popover.Content>
            </Popover>
          }
        >
          <Image
            src={images[this.props.name]}
            roundedCircle
            fluid
            width={100}
            height={100}
          />
        </OverlayTrigger>
      </td>
    );
  }
}

function formatNameWithDash(name) {
  return name.replace(/_/g, " ");
}
export default ItemComponent;

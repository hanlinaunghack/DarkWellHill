import React from "react";
import Image from "react-bootstrap/Image";
import Pick from "../../images/Pick.png";
import Hoe from "../../images/Hoe.png";
import Axe from "../../images/Axe.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const customStyle = {
  margin: "auto"
};
const items = {
  Hoe,
  Axe,
  Pick
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
              <Popover.Title as="h3">{this.props.name}</Popover.Title>
              <Popover.Content>{this.props.description}</Popover.Content>
            </Popover>
          }
        >
          <Image
            src={items[this.props.name]}
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

export default ItemComponent;

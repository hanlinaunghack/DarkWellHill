import Proptypes from "prop-types";
const itemProptype = {
  name: Proptypes.string,
  quantity: Proptypes.number,
  quality: Proptypes.number,
  value: Proptypes.number,
  type: Proptypes.string,
  description: Proptypes.string
};

export default itemProptype;

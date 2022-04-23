import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../reducers/utility.jsx";
import CombinedStatusBars from "./combinedStatusBars.jsx";
import BottomMessageWindow from "./bottomMessageWindow.component/bottomMessageWindow.component.jsx";
import InventoryWindow from "./inventoryWindow.component/inventoryWindow.component.jsx";

class SharedComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <InventoryWindow></InventoryWindow>
        <CombinedStatusBars></CombinedStatusBars>
        <BottomMessageWindow></BottomMessageWindow>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharedComponent);

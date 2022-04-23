import React from "react";
import "./loadingScreen.css";

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="loadingscreen">
        <div className="text">
          <h1>Loading...Please wait...</h1>
        </div>
      </div>
    );
  }
}
export default LoadingScreen;

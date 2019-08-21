import React from "react";
const ToggleLoading = state => {
  let newState = { ...state };
  newState.isLoading = !newState.isLoading;
  return newState;
};

export default ToggleLoading;

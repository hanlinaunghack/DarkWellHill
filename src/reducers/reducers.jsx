import InitialState from "../data/initialstate.jsx";

const reducers = (state = InitialState, action) => {
  switch (action.type) {
    case "SAVE_STATE":
      return { ...state, main: action.data };
    case "SAVE_FIELDS":
      let fieldsObject = { ...state.main };
      fieldsObject.fields = action.data;
      return {
        ...state,
        main: fieldsObject
      };
    case "SAVE_PLAYER":
      let playerObject = { ...state.main };
      playerObject.player.name = action.data.name;
      playerObject.player.gender = action.data.gender;
      return {
        ...state,
        main: playerObject
      };
    default:
      return state;
  }
};

export default reducers;
